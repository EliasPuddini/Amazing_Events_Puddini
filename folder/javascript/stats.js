let url = "https://mindhub-xj03.onrender.com/api/amazing";
async function TraerDatos(){
    try{
        const response = await fetch(url);
        const datos = await response.json();
        console.log(datos);
        let eventos = datos["events"];
        console.log(eventos);

        let categorias = [];

        eventos.forEach(element =>{
            categorias.push(element.category)   //obtengo las categorias
        })
        categorias = categorias.filter((item, index) => {   //filtro las categorias repetidas
            return categorias.indexOf(item) === index;
        });


        let eventos_pasados = eventos.filter(elemento => elemento.date < datos.currentDate);
        let eventos_futuros = eventos.filter(elemento => elemento.date > datos.currentDate);



        let maxima_capacidad;
        let evento_max_cap = [];
        let min_per_asist;
        let event_min = [];
        let max_per_asis = 0;
        let event_max = [];
        let inicio = true;
        eventos.forEach(element => {
            if(inicio){
                min_per_asist = element.assistance*100/element.capacity;
                event_min.push(element.name);
                evento_max_cap.push(element.name);
                maxima_capacidad = element.capacity;
                max_per_asis = element.assistance*100/element.capacity;
                event_max.push(element.name);
                inicio = false;
            }
            if(maxima_capacidad < element.capacity){
                maxima_capacidad = element.capacity;
                evento_max_cap.shift();
                evento_max_cap.push(element.name);

            }if(min_per_asist > element.assistance*100/element.capacity){
                min_per_asist = element.assistance*100/element.capacity;
                event_min.shift();
                event_min.push(element.name);

            }if(max_per_asis < element.assistance*100/element.capacity){
                max_per_asis = element.assistance*100/element.capacity;
                event_max.shift();
                event_max.push(element.name);
            }
        });
        
        const tabla1 = document.getElementById("tabla1");
        const tabla2 = document.getElementById("tabla2");
        const tabla3 = document.getElementById("tabla3");

        tabla1.innerHTML = `
        <thead>
            <tr class="subtitulo">
                <td colspan="3">
                    <h3>Events statistics</h3>
                </td>
            </tr>
            <tr>
                <th>
                    Events with the highest percentage of attendance
                </th>
                <th>
                    Events with the lowest percentage of attendance
                </th>
                <th>
                    Event with larger capacity
                </th>
            </tr>                
        </thead>
        <tbody>
            <tr>
            <td>${event_max} ${max_per_asis}%</td>
            <td>${event_min} ${min_per_asist}%</td>
            <td>${evento_max_cap} ${maxima_capacidad}</td>
            </tr>
        </tbody>
        `


        let suma = 0;
        let asistencia = 0;
        let capacidad = 0;
        let asistencia_futuras = [];
        let ganancias_futuras = [];
        categorias.forEach(element =>{

            eventos_futuros.forEach(elemento =>{
                if(elemento.category === element){
                    suma += elemento.price*elemento.estimate;
                    asistencia += elemento.estimate;
                    capacidad += elemento.capacity;
                } 
            })
            let porcentaje_a = asistencia*100/capacidad;
            let porcentaje = porcentaje_a.toFixed(2);
            ganancias_futuras.push(suma);
            asistencia_futuras.push(porcentaje);
            suma = 0;
            asistencia = 0;
            capacidad = 0;
        })

        let hijo_tabla2 = `
        <thead>
            <tr class="subtitulo">
                <td colspan="3">
                    <h2>Upcoming events statics by category</h2>                    
                </td>

            </tr>
            <tr>
                <th>
                    Categories
                </th>
                <th>
                    Revenues
                </th>
                <th>
                    percentage of attendance
                </th>
            </tr>
        </thead>
        `
        
        let i = 0;
        categorias.forEach(element =>{
            if(ganancias_futuras[i] != 0){
                hijo_tabla2 +=
                `
                <tr>
                    <td>${element}</td>
                    <td>$${ganancias_futuras[i]}</td>
                    <td>${asistencia_futuras[i]}%</td>
                </tr>
                `                
            }

            i++
        })
        tabla2.innerHTML = hijo_tabla2;


        let hijo_tabla3 = `
        <thead>
            <tr class="subtitulo">
                <td colspan="3">
                    <h2>Past Events statistic by category</h2>
                </td>
            </tr>

            <tr>
                <th>
                    Categories
                </th>
                <th>
                    Revenues
                </th>
                <th>
                    percentage of attendance
                </th>
            </tr>
        </thead>
        `
        let asistencia_pasadas = [];
        let ganancias_pasadas = [];
        categorias.forEach(element =>{

            eventos_pasados.forEach(elemento =>{
                if(elemento.category === element){
                    suma += elemento.price*elemento.assistance;
                    asistencia += elemento.assistance;
                    capacidad += elemento.capacity;
                } 
            })
            let porcentaje_a = asistencia*100/capacidad;
            let porcentaje = porcentaje_a.toFixed(2);
            ganancias_pasadas.push(suma);
            asistencia_pasadas.push(porcentaje);
            suma = 0;
            asistencia = 0;
            capacidad = 0;
        })


        let j = 0;
        categorias.forEach(element =>{
            hijo_tabla3 +=
            `
            <tr>
                <td>${element}</td>
                <td>$${ganancias_pasadas[j]}</td>
                <td>${asistencia_pasadas[j]}%</td>
            </tr>
            `
            j++
        })
        tabla3.innerHTML = hijo_tabla3;

    }catch(error){
        console.log(error);
    }
}
TraerDatos();