const loginForm = document.getElementById('login');

document.getElementById('login').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Login Successfully Submitted!');
    window.location.href = "menu.html";
});

