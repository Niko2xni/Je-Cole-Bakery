let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
});

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'Product Name 1',
        image: 'logo.png',
        price: 120
    },
    {
        id: 2,
        name: 'Product Name 2',
        image: 'logoWhite.png',
        price: 100
    },
    {
        id: 3,
        name: 'Product Name 3',
        image: 'croissant.png',
        price: 110
    },
    {
        id: 4,
        name: 'Product Name 4',
        image: 'baguette.png',
        price: 80
    },
    {
        id: 5,
        name: 'Product Name 5',
        image: 'Eclair.png',
        price: 90
    },
    {
        id: 6,
        name: 'Product Name 6',
        image: 'Paris-Brest.png',
        price: 140
    }
];

let listCards = [];

function initApp() {
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv);
    })
}

initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>${value.quantity}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}