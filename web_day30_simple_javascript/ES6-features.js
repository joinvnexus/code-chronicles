//template string (backtick)
const userName = "projoy";
const age = 22;
//
console.log(`my name is ${userName} and i am ${age} years old`);

//multiline string

const msg = `Hello ${userName},
 Welcome to JavaScript ES6+!
 `;
console.log(msg);

//Destructuring

//Array Destructuring

const fruits = ["apple", "banana", "orange"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit, secondFruit, thirdFruit);

//Object Destructuring
const user = { fullName: "Rafi", userAge: 20, userCity: "Dhaka" };
const { fullName, userAge, userCity } = user;
console.log(fullName, userAge, userCity);

//Spread & Rest Operator (...)

//Spread Operator (...)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// Object Spread Operator

const obj1 = { name: "projoy", age: 20 };
const obj2 = { ...obj1, city: "Dhaka" };
console.log(obj2);

function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));

function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

//defult parameter

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet();
greet("John");

console.log("Start");

setTimeout(() => {
  console.log("Timer 1 finished");
  setTimeout(() => {
    console.log("Timer 2 finished");
    setTimeout(() => {
      console.log("Timer 3 finished");
      setTimeout(() => {
        console.log("Timer 4 finished");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

console.log("End");

let count = 0;

const timer = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);
  if (count === 5) clearInterval(timer);
}, 1000);

// promise

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("success");
  } else {
    reject("failed");
  }
});
myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// async await

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();


// localStorage

// Save data
localStorage.setItem("username", "Projoy");

// Get data
const username = localStorage.getItem("username");
console.log(username); // Projoy

// Remove data
localStorage.removeItem("username");

// Clear all
localStorage.clear();


//sessionStorage

sessionStorage.setItem("theme", "dark");
console.log(sessionStorage.getItem("theme"));
