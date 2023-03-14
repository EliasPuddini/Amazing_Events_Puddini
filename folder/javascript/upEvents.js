const Carts_array2 = get_Carts(data, "events");

let array2 = [];

for(let j=0; j < Carts_array2.length; j++){
    if(data.currentDate < Carts_array2[j]["date"]){
        array2.push(Carts_array2[j]);
    }
}
console.log(array2);

let padre2 = document.getElementById("cards_contain3");
let hijo2 = "";

for(let j = 0; j < array2.length; j++){
    hijo2 += `
    <div class="card_alpha">
        <img src="${array2[j].image}" alt="event_image">
        <h2>${array2[j].name}</h2>
        <p>${array2[j].description}</p>
        <div class="info">
            <p>Price $${array2[j].price}</p>
            <a href="./details.html?id=${array2[j]._id}" class="info_to_details">Ver más</a>
        </div>
    </div>
    
    `;

}
    padre2.innerHTML = hijo2;