document.addEventListener('DOMContentLoaded', function() {

    const storedFname = localStorage.getItem("fname"); 
    const storedLname = localStorage.getItem("lname");
    const storedEmail = localStorage.getItem("email");
    const storedNumber = localStorage.getItem("number");

    //new deliv
    const storedHouse = localStorage.getItem("house");
    const storedStreet = localStorage.getItem("street");
    const storedBarangay = localStorage.getItem("barangay");
    const storedCity = localStorage.getItem("city");
    const storedPostalCode = localStorage.getItem("postalCode");

    //new order details
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    const storedTotalPrice = localStorage.getItem("totalPrice");

    console.log("Cart:", storedCart);
    console.log("Total Price:", storedTotalPrice);

    if (storedFname && storedLname && storedEmail && storedNumber) {
 
        document.querySelector("#customerInfo tr:nth-child(2) td:nth-child(2)").textContent = storedFname;
        document.querySelector("#customerInfo tr:nth-child(3) td:nth-child(2)").textContent = storedLname;
        document.querySelector("#customerInfo tr:nth-child(4) td:nth-child(2)").textContent = storedEmail;
        document.querySelector("#customerInfo tr:nth-child(5) td:nth-child(2)").textContent = storedNumber;
    } else {
        alert("No customer data found! Please fill out the sign-up form.");
    }

    //new deliv details
    if (storedHouse && storedStreet && storedBarangay && storedCity && storedPostalCode) {
        document.querySelector("#customerInfo tr:nth-child(6) td:nth-child(2)").textContent = storedHouse;
        document.querySelector("#customerInfo tr:nth-child(7) td:nth-child(2)").textContent = storedStreet;
        document.querySelector("#customerInfo tr:nth-child(8) td:nth-child(2)").textContent = storedBarangay;
        document.querySelector("#customerInfo tr:nth-child(9) td:nth-child(2)").textContent = storedPostalCode;
        document.querySelector("#customerInfo tr:nth-child(10) td:nth-child(2)").textContent = storedCity;
    }

    const orderTable = document.querySelector("#orderInfo");

    if (storedCart && storedCart.length > 0 && storedTotalPrice) {
        // Add each item from the cart
        storedCart.forEach(item => {
            const row = document.createElement('tr');
            const itemCell = document.createElement('td');
            const priceCell = document.createElement('td');
            
            itemCell.textContent = item.name;
            priceCell.textContent = '₱' + parseFloat(item.price).toFixed(2);
            
            row.appendChild(itemCell);
            row.appendChild(priceCell);
            orderTable.appendChild(row);
        });

        // Add a row for the total price
        const totalRow = document.createElement('tr');
        const totalTextCell = document.createElement('td');
        const totalPriceCell = document.createElement('td');
        
        totalTextCell.innerHTML = '<h3>Total Price: </h3>';
        totalPriceCell.innerHTML = '₱' + parseFloat(storedTotalPrice).toFixed(2);
        
        totalRow.appendChild(totalTextCell);
        totalRow.appendChild(totalPriceCell);
        orderTable.appendChild(totalRow);
    } else {
        alert("No order data found!");
    }

});