const computer ={
    brand:'microsoft',
    price: 20000,
    processor: 'intel',
    hdd:'512gb',
    monitor:'asus'
}
const values = Object.values(computer);
console.log(values)

const productDetailsList = document.getElementById('product-details');

for (const value of values) {
    const li = document.createElement('li');
    li.textContent = value;
    productDetailsList.appendChild(li);
}