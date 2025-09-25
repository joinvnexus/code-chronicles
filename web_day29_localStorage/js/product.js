// ===== ADMIN SIDE =====

let products = [];
let cart = [];


// Load products from localStorage
// let products = JSON.parse(localStorage.getItem("products")) || [];
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add product (Admin)
const addproduct = () => {
    const nameInput = document.getElementById("product-name");
    const priceInput = document.getElementById("product-price");


    const product = {
        id: Date.now(), // unique id
        name: nameInput.value, // string
        price: parseFloat(priceInput.value) // convert string to number
    };

    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));

    nameInput.value = "";
    priceInput.value = "";

    displayProducts();
}
document.getElementById("add-product").addEventListener("click", addproduct);

// Display products (Admin → User can also see this)
function displayProducts() {
    const ul = document.getElementById("product-list");
    ul.innerHTML = "";

    products.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${product.name} - ${product.price}
            <button id="add-to-cart" >Add to Cart</button>
        `;
        ul.appendChild(li);
        const addToCartButton = li.querySelector("#add-to-cart");
        addToCartButton.addEventListener("click", () => {
            addToCart(product.id);
        });
    });

}

// ===== USER SIDE =====

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => {
        return p.id === productId
        console.log("product", product)
    });

    const existingItem = cart.find(item => {
        return item.id === productId;
        console.log("existingItem", existingItem);
    });
    if (existingItem) {
        existingItem.quantity += 1; // increase quantity
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Display cart
function displayCart() {
    const ul = document.getElementById("cart-list");
    ul.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ${item.price} x ${item.quantity}
            = ${item.price * item.quantity}
            <button id="remove-from-cart" >❌ Remove</button>
        `;
        ul.appendChild(li);
        const removeFromCartButton = li.querySelector("#remove-from-cart");
        removeFromCartButton.addEventListener("click", () => {
            removeFromCart(index);
        });
    });

    document.getElementById("total-price").innerText = `Total: ${total}`;
}

// Remove product from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// ===== INIT =====
window.onload = () => {
    displayProducts();
    displayCart();
};
