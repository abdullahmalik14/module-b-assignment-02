const data_arr = [
    {
        id: 4,
        image_url: "https://i.imgur.com/R2PN9Wq.jpeg",
        title: "newTitle",
        price: 205,
        description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        buy: "Buy Now"
    },
    {
        id: 7,
        image_url: "https://i.imgur.com/mp3rUty.jpeg",
        title: "Ergonomic Wooden Tuna",
        price: 743,
        description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        buy: "Buy Now"
   
    },
    {
        id: 9,
        image_url: "https://i.imgur.com/R3iobJA.jpeg",
            title: "Electronic Bronze Chips",
            price: 808,
            description: "The automobile layout consists of a front-engine design, mounted at the rear of the engine and four wheel drive",
        buy: "Buy Now"

        },
    {
        "id": 11,
        image_url: "https://i.imgur.com/cBuLvBi.jpeg",
        title: "Awesome Bronze Car",
        price: 382,
        description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        buy: "Buy Now"
        
    },
    {
        id: 12,
        image_url: "https://i.imgur.com/KeqG6r4.jpeg",
        title: "Recycled Rubber Cheese",
        price: 30,
        description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        buy: "Buy Now"
        
    }
]

const cardData = document.getElementById("car_data");

data_arr.map((data)=>cardData.innerHTML+=
`
<div class="col-md-4">
<div class="col-md-4">
    <div class="card" style="width: 300px; margin-top: 20px; height:500px">
        <img src="${data.image_url}" class="card-img-top" alt="..." style = "width:300px; height:250px">
        <div class="card-body">
          <h5 class="card-title">${data.title}</h5>
          <p class="card-text">${data.description}</p>
          <h6>${data.price}</h6>
          <a href="#" class="btn btn-success">${data.buy}</a>
        </div>
      </div>
    </div>


</div>



`

)

