function add (a, b) {
    return a+b
}

console.log(add(10,20))

function multiply (a, b) {
    return a * b
}

const result = multiply(10, 20)
console.log(result)

function sayHello (){
    console.log('Hello World');

}
const message = sayHello();
console.log(message);
//sayHello()

const divide = function (a ,b) {
    return a / b
}

console.log(divide(10, 2))

// normal function
function num (a, b) {
    return a + b
}

// arrow function '
const num1 = ( a, b) =>{
    return a + b
}

console.log(num1(10, 20))

function greet (name) {
    return `hello , ${name}`
}

console.log(greet("projoy"))

// even & odd check

function isEven (num){
    if (num % 2 === 0){
        return true
    } else {
        return false
    }
}

console.log(isEven(5))
console.log(isEven(10))

const isOdd = num1 => num1 % 2 !== 0
console.log(isOdd(5))
console.log(isOdd(10))

const wellCome = (name = 'Guest') => {
    return `wellcome ${name}`

}
console.log(wellCome("projoy"))
console.log(wellCome())

// nested function 
function outer (){
    console.log("Outer Function");
    function inner () {
        console.log("Inner Function");
    }
    inner();
}

outer();
// Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("IIFE Function");
})();

// Recursion
function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  console.log(factorial(5)); //