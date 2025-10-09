//🧠 1️⃣ Function Without Parameters

function sayHello() {
  console.log("Hello, JavaScript!");
}

sayHello(); // Output: Hello, JavaScript!

// 🧮 2️⃣ Function With Parameters

function add(num1, num2) {
  console.log("Sum:", num1 + num2);
}
add(10, 20); // Output: Sum: 30

//🔁 3️⃣ Function With Return Value

const multiply = (num1, num2 ) => {
    return num1 * num2
}
const result = multiply(10, 20)
console.log("Result:", result);


//⚙️ 4️⃣ Default Parameter Value

const greet = (name = 'Guest') => {
    console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet('John'); // Output: Hello, John!

//🧠 5️⃣ Conditional Logic Inside Function

const isEven = num => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(5)); // Output: false
console.log(isEven(10)); // Output: true

// short version of above code
const isOdd = num => num % 2 !== 0
console.log(isOdd(5))
console.log(isOdd(10))

// average 3 numbers
const average = (num1, num2, num3) => (num1 + num2 + num3) / 3
console.log(average(10, 20, 30))

//🧮 6️⃣ verage 3 numbers with normal 
function average1(a, b, c) {
  return (a + b + c) / 3;
}

console.log("Average:", average1(10, 20, 30));



const a = 10;
const b = 20;
const c = 30;

const avr = () => {
    const one = a/3;
    const two = b/3;
    const three = c/3;
    console.log( one, two, three)
    return one + two + three
}
console.log(avr())


//📜 7️⃣ String Manipulation Function

const reverseString = ( str) => {
    return str.split('').reverse().join('')

}

console.log(reverseString('hello'))

