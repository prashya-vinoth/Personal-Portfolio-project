// script.js

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for reaching out, " + name + "! Your message has been sent.");
        document.getElementById("contact-form").reset(); // Reset form after submission
    } else {
        alert("Please fill in all fields before submitting.");
    }
});
