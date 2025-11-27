const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 25,
    stock: 100,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    category: "Electronics",
    price: 55,
    stock: 50,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 40,
    stock: 0,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "Fashion",
    price: 70,
    stock: 30,
    rating: 4.6,
  },
  {
    id: 5,
    name: "T-shirt",
    category: "Fashion",
    price: 20,
    stock: 200,
    rating: 4.1,
  },
  {
    id: 6,
    name: "Coffee Mug",
    category: "Home",
    price: 10,
    stock: 150,
    rating: 4.0,
  },
  {
    id: 7,
    name: "Notebook",
    category: "Stationery",
    price: 5,
    stock: 500,
    rating: 3.9,
  },
  {
    id: 8,
    name: "Desk Lamp",
    category: "Home",
    price: 30,
    stock: 70,
    rating: 4.3,
  },
  {
    id: 9,
    name: "Smart Watch",
    category: "Electronics",
    price: 120,
    stock: 20,
    rating: 4.7,
  },
  {
    id: 10,
    name: "Backpack",
    category: "Fashion",
    price: 60,
    stock: 45,
    rating: 4.4,
  },
];



//console.log(result);



const newData = {
  id: 11,
  name: "Wireless Mouse",
  category: "Electronics",
  price: 25,
  stock: 100,
  rating: 4.5,
};

const updateddata =[...products,newData]
console.log(updateddata);

const num = 20;
/* 
if(num) {
  console.log("true")
} else{
   console.log("false")

} */

  // num ? console.log("true") : console.log("false");

  // const result = (num >=10  && num <= 20) ? console.log("true") : console.log("false")
const isActive = false;

const showUser = (Active) => {
  return Active;
};

const hideUser = (Active) => {
  return !Active;
};

console.log(showUser(isActive)); // Expected output: false
console.log(hideUser(isActive)); // Expected output: true