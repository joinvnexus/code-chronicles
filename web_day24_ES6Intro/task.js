/**
 * 📝 Practice Task

👉 Create a small program using only arrow functions:

No parameter → return a welcome message "Welcome to Arrow Functions!".

One parameter → take a number and return its square.

Two parameters → take two numbers and return their sum.

Multi-line arrow function → take a string and return the string reversed.

Array callback → from an array of numbers [2, 4, 6, 8], return a new array with each number doubled using .map().

Object → take an object {name: "Alice", age: 22} and return only the name.
 */

// 1. No parameter → welcome message
const welcome = () => {
   return "Welcome to Arrow Functions!";
};



// 2. One parameter → square
const square = (num) => {
  // return square of num
};
console.log(square(5));

// 3. Two parameters → sum
const add = (a, b) => {
  // return sum of a and b
};

// 4. Multi-line → reverse string
const reverseString = (str) => {
  // let reversed = ...
  // return reversed;
};

// 5. Array callback → double numbers
const numbers = [2, 4, 6, 8];
const doubled = numbers.map(/* your arrow function */);

// 6. Object → get name
const person = { name: "Alice", age: 22 };
const getName = (obj) => {
  // return name only
};


// ✅ Console log kore output check koro
console.log(welcome());
console.log("Square of 5 =", square(5));
console.log("Sum =", add(10, 20));
console.log("Reverse of 'hello' =", reverseString("hello"));
console.log(doubled);
console.log(getName(person));
