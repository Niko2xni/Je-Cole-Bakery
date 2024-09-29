document.addEventListener("DOMContentLoaded", function() {
    // Get the Pay Now button
    const payButton = document.querySelector(".pay-btn");

    // Add a click event listener to the button
    payButton.addEventListener("click", function() {
        // Display the alert message
        alert("Thank you for ordering! Your order is now being processed");

        // Redirect to the menu page
        window.location.href = "menu.html";
    });
});

