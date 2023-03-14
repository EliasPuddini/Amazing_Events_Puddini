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
    string_busqueda = Array.from(texto)[0].value;
    mostrar();
})



function mostrar(){
    hijo = ``;
    if(string_busqueda == "" && chequeados.length != 0){
        let array_auxiliar = []
        for(let x = 0; x < chequeados.length; x++){
            console.log(chequeados)
            for(let u = 0; u < Carts_array.length;u++){
                for(let t = 0; t < chequeados.length;t++){
                    if(Carts_array[u].category == chequeados[t]){
                        array_auxiliar.push(Carts_array[u]);
                    }
                }
            }
        }

        Carts_array = array_auxiliar;

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

        hijo = ``;
        for(let y = 0; y < Carts_array.length;y++){
            if(Carts_array[y].name == string_busqueda || Carts_array[y].date == string_busqueda){
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
                console.log(Carts_array[y])
            }
            
        }
    }else if(string_busqueda != "" && chequeados.lenght != 0){

        
        let array_auxiliar2 = []
        for(let x = 0; x < chequeados.length; x++){
            for(let u = 0; u < Carts_array.length;u++){
                for(let t = 0; t < chequeados.length;t++){
                    if(Carts_array[u].category == chequeados[t]){
                        array_auxiliar2.push(Carts_array[u]);
                    }
                }
            }
        }

        Carts_array = array_auxiliar2;


        for(let wa = 0; wa < Carts_array.length;wa++){
            if(Carts_array[wa].name == string_busqueda || Carts_array[wa].date == string_busqueda){
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
                console.log(Carts_array[wa])
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