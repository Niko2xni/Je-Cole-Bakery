document.addEventListener('DOMContentLoaded', function() {

    const storedFname = localStorage.getItem("fname"); 
    const storedLname = localStorage.getItem("lname");
    const storedEmail = localStorage.getItem("email");
    const storedNumber = localStorage.getItem("number");


    if (storedFname && storedLname && storedEmail && storedNumber) {
 
        document.querySelector("#customerInfo tr:nth-child(2) td:nth-child(2)").textContent = storedFname;
        document.querySelector("#customerInfo tr:nth-child(3) td:nth-child(2)").textContent = storedLname;
        document.querySelector("#customerInfo tr:nth-child(4) td:nth-child(2)").textContent = storedEmail;
        document.querySelector("#customerInfo tr:nth-child(5) td:nth-child(2)").textContent = storedNumber;
    } else {
        alert("No customer data found! Please fill out the sign-up form.");
    }
});