// Task 4 : Create a form inside the HTML page that contains inputs for ( name , description, price and quantity)
// for product and when you submit the form it will save the product inside array in the local storage and then 
// display all the products as a cards under the form.
interface Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

document.getElementById('productForm')!.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLInputElement).value;
    const price = parseFloat((document.getElementById('price') as HTMLInputElement).value);
    const quantity = parseInt((document.getElementById('quantity') as HTMLInputElement).value);

    // Create a new product object
    const newProduct: Product = { name, description, price, quantity };

    // Get the existing products from local storage
    const products: Product[] = JSON.parse(localStorage.getItem('products') || '[]');

    // Add the new product to the array
    products.push(newProduct);

    // Save the updated products array back to local storage
    localStorage.setItem('products', JSON.stringify(products));

    // Display the updated products list
    displayProducts();

    // Clear the form
    (document.getElementById('productForm') as HTMLFormElement).reset();
});

function displayProducts() {
    const productCards = document.getElementById('productCards')!;
    productCards.innerHTML = ''; // Clear existing content

    // Get the products from local storage
    const products: Product[] = JSON.parse(localStorage.getItem('products') || '[]');

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Quantity: ${product.quantity}</p>
        `;
        productCards.appendChild(card);
    });
}

// Display the products on page load
displayProducts();
