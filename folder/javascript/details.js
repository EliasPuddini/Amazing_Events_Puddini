let queryString = location.search;

let params = new URLSearchParams(queryString);

let id = params.get("id");


let card = [];

let evento = data["events"].forEach(element => {
        if(element._id == id){
            card = element;
        }
    })

const div = document.querySelector(".detail_content");

if(card.assistance == undefined){
    div.innerHTML = `
                <div class="detail_img">
                <img src="${card.image}" alt="Event_image">
                </div>
                <div class="detail_info">
                <div>
                    <h3>${card.name}</h3>
                    <br>
                    <p>Date: ${card.date}</p>
                    <p>${card.description}</p>
                    <p>Category: ${card.category}</p>
                    <p>Place: ${card.place}</p>
                    <div class="capacity">
                        <p>Capacity: #${card.capacity}</p>            
                        <p>Assistance or estimate: #${card.estimate}</p>                    
                    </div>
                    <div class="price">
                        <p>Price:$${card.price}</p>                        
                    </div>
                </div>
                </div>
                `
}else{
    div.innerHTML = `
                <div class="detail_img">
                <img src="${card.image}" alt="Event_image">
                </div>
                <div class="detail_info">
                <div>
                    <h3>${card.name}</h3>
                    <br>
                    <p>Date: ${card.date}</p>
                    <p>${card.description}</p>
                    <p>Category: ${card.category}</p>
                    <p>Place: ${card.place}</p>
                    <div class="capacity">
                        <p>Capacity: #${card.capacity}</p>            
                        <p>Assistance or estimate: #${card.assistance}</p>                    
                    </div>
                    <div class="price">
                        <p>Price:$${card.price}</p>                        
                    </div>
                </div>
                </div>
                `
}
