const handelAddProduct = () => {
    const productName = document.getElementById("product-name");
    const productQuantity = document.getElementById("product-quantity");

    const productNameValue = productName.value;
    const productQuantityValue = productQuantity.value;



    // console.log( productName, productQuantity);
    displayProducts(productNameValue, productQuantityValue);
    // console.log("product added");

    addProductTocart(productNameValue, productQuantityValue);

    productName.value = "";
    productQuantity.value = "";
}

document.getElementById("add-product").addEventListener("click", handelAddProduct);

const displayProducts = (name, quantity) => {
    console.log(name, quantity);
    const ul = document.getElementById("product-list");

    const li = document.createElement("li")
    li.innerHTML = `<p> ${name} : ${quantity}</p>`;

    ul.appendChild(li);


}

const getCart = () => {
    let cart = {}; // akon object dewa ase kne[] array dile ki oy and [{}]ata dile ki oy

    const cartStringified = localStorage.getItem("cart"); // string ase kina array ase kina object ase kina 
    if (cartStringified) {
        cart = JSON.parse(cartStringified);
    }
    console.log("cartStringified", cartStringified);
    return cart;
}

const addProductTocart = (item, quantity) => {
    const cart = getCart();

    cart[item] = quantity;
    console.log(" cart", cart);
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem("cart", cartStringified);
    console.log("cartStringified", cartStringified);
    displayCart(cart);
}

const displayCart = (cart) => {
    const ul = document.getElementById("cart-list");
     ul.innerHTML = "";
    for (const item in cart) {
        const li = document.createElement("li");
        li.innerHTML = `<p>${item} : ${cart[item]}</p>`;
        ul.appendChild(li);
    }

}

/**
 * To save an object or array in localStorage:
 *
 * 1. Convert the object/array to a JSON string using JSON.stringify().
 * 2. Save the JSON string in localStorage using localStorage.setItem(key, value).
 * 3. To retrieve it, get the JSON string from localStorage using localStorage.getItem(key).
 * 4. Convert the JSON string back to an object/array using JSON.parse().
 */
