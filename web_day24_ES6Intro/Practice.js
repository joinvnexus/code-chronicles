// problem 1
function greeting(name, age) {
    console.log(`My name is ${name} and i am ${age} years old`);
}
greeting("Projoy", 23);

//problem 2
function multiply(num1, num2) {
    return num1 * num2;
}
const result = multiply(5, 7);
console.log(result);
// convert that arrow function 
const multiply2 = (num1, num2) => num1 * num2;
console.log(multiply2(5, 7));

// problem 3
function Greet(name = "Projoy", age) {
    console.log(`My name is ${name} and i am ${age} years old`);

}
Greet(undefined, 23);

// problem 4
const user = { 
    id: 1,
    name: "Projoy naidu",
    username: "projoy",
    email: "projoy@example.com",
};
const {username, email} = user;
console.log(username, email);

// problem 5
const num1 =[1,2,3]
const num2 =[4,5,6]
const num3 = [...num1, ...num2];
console.log(num3);

// problem 6
/**
 * Write a function that accepts any number of numbers and returns their sum using the rest operator.
 * 
 */
function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}
const result1 = sum(1, 2, 3, 4, 5);
console.log(result1); // Output: 15