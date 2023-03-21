let url = "https://mindhub-xj03.onrender.com/api/amazing";
async function TraerDatos(){
    try{
        const response = await fetch(url);
        const datos = await response.json()
        let Carts_array1 = datos["events"]

        let array1 = [];

        for(let j=0; j < Carts_array1.length; j++){
            if(datos.currentDate < Carts_array1[j]["date"]){
                array1.push(Carts_array1[j]);
            }
        }
        console.log(array1);
        let dato = array1;

        const contenedor = document.getElementById('cards_contain2');
        const contenedorChecks = document.getElementById('escucha_categorias2');
        const input = document.querySelector('input');

        console.log(contenedorChecks)

        input.addEventListener('input',superFiltro);
        contenedorChecks.addEventListener('change',superFiltro);


        console.log(dato)

        pintarTarjetas(dato)

        ;
        crearCheckboxes(dato);

        function superFiltro(){


            let arrayFiltrado1 = filtrarPorTexto(dato, input.value)
            let arrayFiltrado2 = filtrarPorPais(arrayFiltrado1);
            pintarTarjetas(arrayFiltrado2);
        }

        function crearCheckboxes(arrayInfo){
            let checks = ''
            let caracteristicasRepetidas = arrayInfo.map(elemento => elemento.category)
            let caracteristicas = new Set(caracteristicasRepetidas.sort((a,b)=>{
                if(a>b){
                    return 1
                }
                if(a<b){
                    return -1
                }
                return 0
            }))
            caracteristicas.forEach(elemento =>{
                checks += `
                <label>
                    <input type="checkbox" id="${elemento}" value="${elemento}">
                    ${elemento}
                </label>
            `
            })
            contenedorChecks.innerHTML = checks
        }

        function filtrarPorTexto(arrayDatos, texto){
            let arrayFiltrado = arrayDatos.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
            return arrayFiltrado
        }

        function filtrarPorPais(arrayInfo){
            let checkboxes = document.querySelectorAll("input[type='checkbox']")
            console.log(checkboxes);
            let arrayChecks = Array.from(checkboxes)
            console.log(arrayChecks);
            let checksChecked = arrayChecks.filter(check => check.checked)
            console.log(checksChecked);
            if(checksChecked.length == 0){
                return arrayInfo
            }
            let checkValues = checksChecked.map(check => check.value)
            console.log(checkValues);
            let arrayFiltrado = arrayInfo.filter(elemento => checkValues.includes(elemento.category))
            console.log(arrayFiltrado);
            return arrayFiltrado
        }

        function pintarTarjetas(arrayDatos) {
            if(arrayDatos.length == 0){
                contenedor.innerHTML = "<h2 class='display-1 fw-bolder'>No hay coincidencias!</h2>"
                return
            }
            let tarjetas = ''
            arrayDatos.forEach(elemento => {
                tarjetas += `
                            </div>
                            <div class="card_alpha">
                                <img src="${elemento.image}" alt="event_image">
                                <h2>${elemento.name}</h2>
                                <p>${elemento.description}</p>
                                <div class="info">
                                    <p>Price $${elemento.price}</p>
                                    <a href="./details.html?id=${elemento._id}" class="info_to_details">Ver más</a>
                                </div>
                            </div>
                            
                            `
            })
            contenedor.innerHTML = tarjetas
    }}catch(error){
        console.log(error);
    }
}
TraerDatos()