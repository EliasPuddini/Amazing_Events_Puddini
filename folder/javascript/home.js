let Carts_array = get_Carts(data, "events");



var flag = true;


let padre = document.getElementById("cards_contain");
let hijo = "";

let chequeados = [];


let escucha = document.getElementById("escucha_categorias");
let divcheckboxes = document.querySelectorAll('input[type="checkbox"]');

console.log(divcheckboxes);

escucha.addEventListener("click",() =>{
    divcheckboxes.forEach(element => {
        element.addEventListener("click",() =>{
            if(element.checked){
                chequeados.push(element.id);            
            }
        })
    });
    let result = chequeados.filter((item,index)=>{
        return chequeados.indexOf(item) === index;
    })
    chequeados = result;
    mostrar();
})

let search = document.getElementById("search");
let texto = document.querySelectorAll('input[type="text"]');
let string_busqueda = "";

console.log(search);
console.log(texto);


search.addEventListener("click", () =>{
    string_busqueda = texto.value;
    mostrar();
})



function mostrar(){

    if(string_busqueda == "" && chequeados.length != 0){
        padre.innerHTML = ``;
        console.log(Carts_array.lenght);
        for(let x = 0; x < chequeados.length; x++){
            console.log(Carts_array.length);
            console.log(chequeados)
            let Carts_array_filtred = Carts_array.filter(evento_a_filtrar => evento_a_filtrar === chequeados[x].id);
            Carts_array = Carts_array_filtred;

        }
        for(let xa = 0; xa < Carts_array.length; xa++){
            hijo += `
            <div class="card_alpha">
                <img src="${Carts_array[xa].image}" alt="event_image">
                <h2>${Carts_array[xa].name}</h2>
                <p>${Carts_array[xa].description}</p>
                <div class="info">
                    <p>Price $${Carts_array[xa].price}</p>
                    <a href="./details.html?id=${Carts_array[xa]._id}" class="info_to_details">Ver más</a>
                </div>
            </div>
            
            `;
            padre.innerHTML = hijo;
            
        }console.log("funciona")
        
    }else if(string_busqueda != "" && chequeados.length == 0){
        padre.innerHTML = ``;
        for(let y = 0; y < Carts_array.length;y++){
            if(Carts_array[y].name == string_busqueda){
                hijo += `
                <div class="card_alpha">
                    <img src="${Carts_array[y].image}" alt="event_image">
                    <h2>${Carts_array[y].name}</h2>
                    <p>${Carts_array[y].description}</p>
                    <div class="info">
                        <p>Price $${Carts_array[y].price}</p>
                        <a href="./details.html?id=${Carts_array[y]._id}" class="info_to_details">Ver más</a>
                    </div>
                </div>
                
                `;
                padre.innerHTML = hijo;   
            }
        }
    }else if(string_busqueda != "" && chequeados.lenght != 0){
        padre.innerHTML = ``;
        for(let w = 0; w < chequeados.length; w++){
            let Carts_array_filtred = Carts_array.filter(evento_a_filtrar => evento_a_filtrar === chequeados[w].value);
            Carts_array = Carts_array_filtred;
        }
        for(let wa = 0;wa < Carts_array.length;wa++){
            if(Carts_array[wa].name == string_busqueda){
                hijo += `
                <div class="card_alpha">
                    <img src="${Carts_array[wa].image}" alt="event_image">
                    <h2>${Carts_array[wa].name}</h2>
                    <p>${Carts_array[wa].description}</p>
                    <div class="info">
                        <p>Price $${Carts_array[wa].price}</p>
                        <a href="./details.html?id=${Carts_array[wa]._id}" class="info_to_details">Ver más</a>
                    </div>
                </div>
                
                `;
                padre.innerHTML = hijo;   
            }
        }
    }else if(string_busqueda == "" && chequeados.length == 0){
        padre.innerHTML = ``;
        for(let j = 0; j < Carts_array.length; j++){
            hijo += `
            <div class="card_alpha">
                <img src="${Carts_array[j].image}" alt="event_image">
                <h2>${Carts_array[j].name}</h2>
                <p>${Carts_array[j].description}</p>
                <div class="info">
                    <p>Price $${Carts_array[j].price}</p>
                    <a href="./details.html?id=${Carts_array[j]._id}" class="info_to_details">Ver más</a>
                </div>
            </div>
            
            `;
            padre.innerHTML = hijo;   
        }
    }

}
mostrar();