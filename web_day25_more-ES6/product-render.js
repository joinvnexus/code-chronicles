const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Electronics",
    price: 1200,
    type: "new"
  },
  {
    id: 2,
    name: "Nike Air Max",
    category: "Shoes",
    price: 150,
    type: "featured"
  },
  {
    id: 3,
    name: "Samsung TV",
    category: "Electronics",
    price: 800,
    type: "popular"
  },
  {
    id: 4,
    name: "Wooden Chair",
    category: "Furniture",
    price: 100,
    type: "featured"
  },
  {
    id: 5,
    name: "Dell Laptop",
    category: "Electronics",
    price: 1000,
    type: "new"
  }
];

const productContainer = document.getElementById("product-container");

products.forEach ( product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML =`
    <h3>${product.name}</h3>
    <p>Category: ${product.category}</p>
    <p>Price: $${product.price}</p>
    <p>Type: ${product.type}</p>
    `;
    productContainer.appendChild(productDiv);
});

const categoryContainer = document.getElementById("product-category");

products.filter(category => category.type === "new")
.forEach(product => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");
    categoryDiv.innerHTML = `
    <h3>${product.name}</h3>
    <p>Category: ${product.category}</p>
    <p>Price: $${product.price}</p>
    <p>Type: ${product.type}</p>
    `;
    categoryContainer.appendChild(categoryDiv);
})
