document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    // Get form values
    var name = document.getElementById('name').value;
    var description = document.getElementById('description').value;
    var price = parseFloat(document.getElementById('price').value);
    var quantity = parseInt(document.getElementById('quantity').value);
    // Create a new product object
    var newProduct = { name: name, description: description, price: price, quantity: quantity };
    // Get the existing products from local storage
    var products = JSON.parse(localStorage.getItem('products') || '[]');
    // Add the new product to the array
    products.push(newProduct);
    // Save the updated products array back to local storage
    localStorage.setItem('products', JSON.stringify(products));
    // Display the updated products list
    displayProducts();
    // Clear the form
    document.getElementById('productForm').reset();
});
function displayProducts() {
    var productCards = document.getElementById('productCards');
    productCards.innerHTML = ''; // Clear existing content
    // Get the products from local storage
    var products = JSON.parse(localStorage.getItem('products') || '[]');
    products.forEach(function (product) {
        var card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = "\n            <h2>".concat(product.name, "</h2>\n            <p>").concat(product.description, "</p>\n            <p>Price: $").concat(product.price.toFixed(2), "</p>\n            <p>Quantity: ").concat(product.quantity, "</p>\n        ");
        productCards.appendChild(card);
    });
}
// Display the products on page load
displayProducts();
