const Carts_array1 = get_Carts(data, "events");

let array1 = [];

for(let j=0; j < Carts_array1.length; j++){
    if(data.currentDate > Carts_array1[j]["date"]){
        array1.push(Carts_array1[j]);
    }
}
console.log(array1);

let padre1 = document.getElementById("cards_contain2");
let hijo1 = "";

for(let j = 0; j < array1.length; j++){
    hijo1 += `
    <div class="card_alpha">
        <img src="${array1[j].image}" alt="event_image">
        <h2>${array1[j].name}</h2>
        <p>${array1[j].description}</p>
        <div class="info">
            <p>Price $${array1[j].price}</p>
            <a href="./details.html?id=${array1[j]._id}" class="info_to_details">Ver más</a>
        </div>
    </div>
    
    `;
    padre1.innerHTML = hijo1;
}