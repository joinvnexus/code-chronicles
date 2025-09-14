// var 
const text = "hello";

let time = 10;
time = 11;
console.log(time);

// function defult parameter
function add (num1, num2 = 0){
    return num1 + num2;
}

add(10);

// template literal
const name = "John";
const age = 30;
const friends= ["Alice", "Bob", "Charlie"];

const message = `My name is ${name} and I am ${age} years old. My friends are ${friends}.`;
console.log(message);

// object
const student ={
    name: "John",
    age: 30,
    grade: "A",
    address: "123 Main St"
};
console.log(student.name);

// array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);

// loop
for (let i = 0; i < 10; i++){
    console.log(i);
}

const innerHTML = `
    <ul>
        <li>${name}</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
`;
console.log(innerHTML);


//arrow function
const adds = (num1 , num2) => num1 + num2;
console.log(adds(10, 20));

//spread operator
const number1 = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

//rest parameter
const sum = (...numbers) => numbers.reduce((total, num) => total + num, 0);
console.log(sum(1, 2, 3, 4, 5));

//destructuring
const country = {
    Name: "United States",
    capital: "Washington, D.C."
};
const { Name, capital } = country;
console.log(Name,  capital);