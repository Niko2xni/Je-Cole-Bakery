let openCart = document.querySelector('#openCart');
let closeCart = document.querySelector('#closeCart');
let body = document.querySelector('body');
let checkOut = document.querySelector('.checkOut');
var cart = [];
var totalPrice = 0.00;

function addToCart(name, price) {
    cart.push({ bread: name, rate: price });
    totalPrice += price;

    display();
};

function removeFromCart(index) {
    totalPrice -= cart[index].rate;
    cart.splice(index, 1);

    display();
}

function display() {
    var cartItem = document.getElementById('cartItem');
    var cartPrice = document.getElementById('cartPrice');
    var cartTotal = document.getElementById('cartTotal');

    cartItem.innerHTML = '';
    cartPrice.innerHTML = '';

    cart.forEach(function (pizza, index) {
        var addedItems = document.createElement('li');
        var bills = document.createElement('li');

        addedItems.textContent = pizza.bread;

        bills.textContent = '₱' + pizza.rate.toFixed(2);

        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            removeFromCart(index);
        };

        addedItems.appendChild(removeButton);

        cartItem.appendChild(addedItems);
        cartPrice.appendChild(bills);
    });
    
    cartTotal.textContent = '₱' + totalPrice.toFixed(2);
};

openCart.addEventListener('click', ()=>{
    body.classList.add('active');
});

closeCart.addEventListener('click', ()=>{
    body.classList.remove('active');
});

checkOut.addEventListener('click', ()=>{
    localStorage.setItem("totalPrice", totalPrice);
    window.location.href = "delivery.html";
});