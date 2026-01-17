const products = [
    {
        "id": 1,
        "name": "Red Premium Bag",
        "image": "img/b1.jpg",
        "category": "bag"
    },
    {
        "id": 2,
        "image": "img/m1.jpg",
        "name": "Female Model",
        "category": "model"
    },
    {
        "id": 3,
        "image":"img/s1.jpg",
        "name": "Red shoe",
        "category": "shoe"
    },
    {
        "id": 4,
        "image":"img/c1.jpg",
        "name": "Red Women Jacket",
        "category": "cloths"
    },
    {
        "id": 5,
        "image":"img/b2.jpg",
        "name": "Black Bag",
        "category": "bag"
    },
     {
        "id": 6,
        "image":"img/m2.jpg",
        "name": "Men Model",
        "category": "model"
    },
     {
        "id": 7,
        "image":"img/s2.jpg",
        "name": "Rgb Shoe",
        "category": "shoe"
    },
     {
        "id": 8,
        "image":"img/c2.jpg",
        "name": "Brown Jacket",
        "category": "cloths"
    },
    {
        "id": 9,
        "image":"img/s3.jpg",
        "name": "Black Shoe",
        "category": "shoe"
    },
    {
        "id": 10,
        "image":"img/b4.jpg",
        "name": "Carry Bag",
        "category": "bag"
    },
    {
        "id": 11,
        "image":"img/c3.jpg",
        "name": "White Top",
        "category": "cloths"
    },
    {
        "id": 12,
        "image":"img/s4.jpg",
        "name": "White Shoe",
        "category": "shoe"
    },
    {
        "id": 13,
        "image":"img/c4.jpg",
        "name": "Denim Jacket",
        "category": "cloths"
    },
    {
        "id": 14,
        "image":"img/b3.jpg",
        "name": "Blue Bag",
        "category": "bag"
    },
    {
        "id": 15,
        "image":"img/m3.jpg",
        "name": "Man",
        "category": "model"
    },
    {
        "id": 16,
        "image":"img/m4.jpg",
        "name": "Women Model",
        "category": "model"
    },
]

const container = document.getElementById('container')
const buttons = document.querySelectorAll('.button')


function renderProducts(category = "all") {
    container.innerHTML = ""; //

    const filteredProducts = category === "all"
        ? products
        : products.filter(product => product.category === category);

    filteredProducts.forEach(product => {
        const card = document.createElement("div");


        card.className="col-sm-12 col-md-3 col-lg-3 col-12"
        card.innerHTML = `
<br>
 <div class="wrapper">
                    <div class="card">
                        <img src="${product.image}" class="card-img img-fluid" alt="...">
                        <div class="content">
                            <h1>${product.name}</h1>
                        </div>
                    </div>
                </div>
 </div>                
`;


        container.appendChild(card);
    })
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => {
            b.classList.remove("btn-primary");
            b.classList.add("btn-outline-primary")
        })
        btn.classList.remove("btn-outline-primary");
        btn.classList.add("btn-primary");
        renderProducts(btn.dataset.category)
    })
})

renderProducts("all")