// script.js

const productList = document.getElementById("productList");
const featuredProducts = document.getElementById("featuredProducts");
const newArrivals = document.getElementById("newArrivals");
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const closeCart = document.getElementById("closeCart");
const quickView = document.getElementById("quickView");
const quickTitle = document.getElementById("quickTitle");
const quickImg = document.getElementById("quickImg");
const quickDesc = document.getElementById("quickDesc");
const closeQuick = document.getElementById("closeQuick");

let products = [];
let cart = [];
let currentPage = 1;
const limit = 8;

// Fetch Products API (FakeStoreAPI)
async function fetchProducts() {
  let res = await fetch("https://fakestoreapi.com/products");
  products = await res.json();
  displayProducts();
  displayFeatured();
  displayNewArrivals();
}
fetchProducts();

// Display Products with Pagination
function displayProducts() {
  productList.innerHTML = "";
  const start = (currentPage - 1) * limit;
  const paginatedProducts = products.slice(start, start + limit);

  paginatedProducts.forEach(p => {
    let div = document.createElement("div");
    div.className = "bg-white p-4 shadow rounded flex flex-col";
    div.innerHTML = `
      <img src="${p.image}" class="h-40 object-contain mb-2">
      <h3 class="font-bold mb-2">${p.title.slice(0,30)}...</h3>
      <p class="text-sm mb-2">$${p.price}</p>
      <div class="mt-auto flex gap-2">
        <button onclick="addToCart(${p.id})" class="bg-blue-500 text-white px-2 py-1 rounded text-sm">Add to Cart</button>
        <button onclick="quickViewProduct(${p.id})" class="bg-gray-300 px-2 py-1 rounded text-sm">Quick View</button>
      </div>
    `;
    productList.appendChild(div);
  });
}

// Featured Products
function displayFeatured() {
  featuredProducts.innerHTML = "";
  products.slice(0, 4).forEach(p => {
    let div = document.createElement("div");
    div.className = "bg-white p-4 shadow rounded";
    div.innerHTML = `<img src="${p.image}" class="h-40 mx-auto"> <h3>${p.title.slice(0,25)}...</h3>`;
    featuredProducts.appendChild(div);
  });
}

// New Arrivals
function displayNewArrivals() {
  newArrivals.innerHTML = "";
  products.slice(-4).forEach(p => {
    let div = document.createElement("div");
    div.className = "bg-white p-4 shadow rounded";
    div.innerHTML = `<img src="${p.image}" class="h-40 mx-auto"> <h3>${p.title.slice(0,25)}...</h3>`;
    newArrivals.appendChild(div);
  });
}

// Add to Cart
function addToCart(id) {
  let product = products.find(p => p.id === id);
  cart.push(product);
  cartCount.textContent = cart.length;
  renderCart();
}

// Render Cart
function renderCart() {
  cartItems.innerHTML = "";
  cart.forEach((p, i) => {
    let li = document.createElement("li");
    li.textContent = `${p.title.slice(0,20)} - $${p.price}`;
    cartItems.appendChild(li);
  });
}

// Quick View
function quickViewProduct(id) {
  let p = products.find(x => x.id === id);
  quickTitle.textContent = p.title;
  quickImg.src = p.image;
  quickDesc.textContent = p.description;
  quickView.classList.remove("hidden");
}

// Event Listeners
cartBtn.addEventListener("click", () => cartModal.classList.remove("hidden"));
closeCart.addEventListener("click", () => cartModal.classList.add("hidden"));
closeQuick.addEventListener("click", () => quickView.classList.add("hidden"));

document.getElementById("nextPage").addEventListener("click", () => {
  if (currentPage * limit < products.length) {
    currentPage++;
    displayProducts();
  }
});
document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayProducts();
  }
});

// Search & Filter
document.getElementById("searchInput").addEventListener("input", e => {
  let query = e.target.value.toLowerCase();
  let filtered = products.filter(p => p.title.toLowerCase().includes(query));
  productList.innerHTML = "";
  filtered.forEach(p => {
    let div = document.createElement("div");
    div.className = "bg-white p-4 shadow rounded";
    div.innerHTML = `<img src="${p.image}" class="h-40 mx-auto"> <h3>${p.title.slice(0,25)}...</h3>`;
    productList.appendChild(div);
  });
});

document.getElementById("filterSelect").addEventListener("change", e => {
  let val = e.target.value;
  let filtered = val === "all" ? products : products.filter(p => p.category === val);
  productList.innerHTML = "";
  filtered.forEach(p => {
    let div = document.createElement("div");
    div.className = "bg-white p-4 shadow rounded";
    div.innerHTML = `<img src="${p.image}" class="h-40 mx-auto"> <h3>${p.title.slice(0,25)}...</h3>`;
    productList.appendChild(div);
  });
});
