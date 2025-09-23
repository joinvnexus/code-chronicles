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

const getCart = () =>{
    const cart = {}; // akon object dewa ase kne[] array dile ki oy and [{}]ata dile ki oy
    return cart;
}

const addProductTocart = ( item, quantity)=>{
    const cart = getCart();

    cart[item] = quantity;
    console.log(" cart",cart);

}