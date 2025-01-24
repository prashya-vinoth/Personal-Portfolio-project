// Initialize the cart with an empty array
let cart = [];

// Function to update the cart UI
function updateCart() {
    const cartButton = document.getElementById('cartButton');
    const cartCount = cart.length;
    cartButton.textContent = `Cart (${cartCount})`;
}

// Function to handle adding products to the cart
function addToCart(productName, productPrice) {
    // Create a product object
    const product = {
        name: productName,
        price: productPrice
    };

    // Add the product to the cart array
    cart.push(product);

    // Update the cart UI
    updateCart();
}

// Attach event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.getAttribute('data-product');
        const productPrice = parseFloat(event.target.getAttribute('data-price'));
        
        addToCart(productName, productPrice);
    });
});
