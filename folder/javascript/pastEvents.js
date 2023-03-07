const Carts_array = get_Carts(data, "events");

let array1 = [];

for(let j=0; j < Carts_array.length; j++){
    if(data.currentDate > Carts_array[j]["date"]){
        array1.push(Carts_array[j]);
    }
}
console.log(array1);

let padre = document.getElementById("cards_contain2");
let hijo = "";

for(let j = 0; j < array1.length; j++){
    hijo += `
    <div class="card_alpha">
        <img src="${array1[j].image}" alt="event_image">
        <h2>${array1[j].name}</h2>
        <p>${array1[j].description}</p>
        <div class="info">
            <p>Price $${array1[j].price}</p>
            <a href="./details.html" class="info_to_details">Ver más</a>
        </div>
    </div>
    
    `;
    padre.innerHTML = hijo;
}