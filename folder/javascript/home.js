const Carts_array = get_Carts(data, "events");
console.log(Carts_array);

let padre = document.getElementById("cards_contain");
let hijo = "";

for(let j = 0; j < Carts_array.length; j++){
    hijo += `
    <div class="card_alpha">
        <img src="${Carts_array[j].image}" alt="event_image">
        <h2>${Carts_array[j].name}</h2>
        <p>${Carts_array[j].description}</p>
        <div class="info">
            <p>Price $${Carts_array[j].price}</p>
            <a href="./details.html" class="info_to_details">Ver más</a>
        </div>
    </div>
    
    `;
    padre.innerHTML = hijo;
}