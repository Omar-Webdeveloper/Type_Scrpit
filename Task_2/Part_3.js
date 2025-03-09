// Task 3: Modify Object in an Array of Interfaces
// You are given an array of Product interfaces, where each product has a name, price, and quantity. 
// Write a script to decrease the price of each product by 15% if the quantity is greater than 5.
// Define an array of 3 Product objects
var Product = [
    {
        name: "Laptop",
        price: 100,
        quantity: 11
    },
    {
        name: "Mobile",
        price: 100,
        quantity: 3
    },
    {
        name: "Adnan",
        price: 100,
        quantity: 4
    }
];
function product_offers() {
    var My_product = document.getElementById("product");
    My_product.innerHTML = ""; // Clear existing content
    Product.forEach(function (The_Products) {
        var listItem = document.createElement("li");
        if (The_Products.quantity > 5) {
            The_Products.price = The_Products.price * 0.85; // Decrease price by 15%
        }
        listItem.textContent = "".concat(The_Products.name, " - Quantity: ").concat(The_Products.quantity, " - Price: $").concat(The_Products.price.toFixed(2));
        My_product.appendChild(listItem);
    });
}
;
