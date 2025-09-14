const numbers = [10, 29,30, 40]

//normal 
const a = numbers[0];
const b = numbers[1];
const c = numbers[2];
const d = numbers[3];
// console.log(a,b,c,d);

//destructuring
const [x,y,z] = numbers;
// console.log(x,y,z);

const person = {
    name: 'Projoy',
    age: 23,
    address: 'sylhet'
}

//normal
const name1 = person.name;
const age1 = person.age;
const address1 = person.address;
console.log(name1, age1, address1);

//destructuring
const {name, age, address} = person;
console.log(name, age, address);

const product = { name: "laptop", price: 1000, quantity: 2 };

// Destructuring price directly from product
const { price } = product;

// এক লাইনে calculation
const payable = price - price * 0.2;       // 20% discount
const total = payable + payable * 0.1;    // 10% VAT

console.log("Payable after discount:", payable);
console.log("Total with VAT:", total.toFixed(2));



const num = [10, 20, 30, 40];
// skip value
const [first, , , second] = num;
console.log(first, second);

//rest operator
const [a, b, ...rest] = num;
console.log(rest);


const numbers = [10, 20, 30, 40];

// skip করার জন্য comma ব্যবহার
const [first, , third] = numbers;
console.log(first, third); // 10 30

// rest operator ব্যবহার
const [a, b, ...rest] = numbers;
console.log(rest); // [30, 40]


const person = {
    name: "Projoy",
    age: 25,
    country: "Bangladesh",
    skills: ["JS", "HTML", "CSS"]
};

// nested destructuring
const { name, skills: [firstSkill, secondSkill] } = person;
console.log(name, firstSkill, secondSkill); // Projoy JS HTML

// default value
const { city = "Dhaka" } = person;
console.log(city); // Dhaka



const product = { name: "laptop", price: 1000 };

// আগের মতো: function(product) { const price = product.price; ... }
function calculate({ price }) {
    const discount = price * 0.2;
    const total = (price - discount) * 1.1;
    return total.toFixed(2);
}

console.log(calculate(product)); // 880.00
