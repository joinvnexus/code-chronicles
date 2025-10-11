// global scope 
const name = "projoy";

function sayHello(){
      let message = "Hello JS Learner!";

    console.log("Hello " + name)
}

sayHello();
console.log(name);
//console.log(message);

if(true){
    let num1 = 10;
    const num2 = 20;
    var num3 = 30;
}
//console.log(num1);
//console.log(num2);
console.log(num3);

console.log(a); // ❌ undefined
var a = 10;
console.log(a); // ✅ 10

var a;      // hoisted
console.log(a); // undefined
a = 10;


//console.log(b); // ❌ Error: Cannot access 'b' before initialization
let b = 20;
console.log(b); // ✅ 20



//🧩 Example 3: Function Hoisting

sayHello();
function sayHello () {
    console.log("Hello JS Learner!");

}

// function expressions 

//sayHI();
const sayHI = function (){
    console.log(" HI, JS Learner!");

}


function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log("Count:", count);
  }

  return inner;
}

const counter = outer(); // outer() একবার কল করা হলো
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3


function A (){
    let x = 10;
function B(){
    let y =20;
    function C(){
        console.log(x,y);
    
    }
    
    C();


}
B();
}
A();