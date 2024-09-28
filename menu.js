let openCart = document.querySelector('#openCart');
let closeCart = document.querySelector('#closeCart');
let body = document.querySelector('body');

openCart.addEventListener('click', ()=>{
    body.classList.add('active');
});

closeCart.addEventListener('click', ()=>{
    body.classList.remove('active');
});