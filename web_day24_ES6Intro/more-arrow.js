const getTax = ( amount, taxRate) => amount * taxRate/100;
console.log(getTax(1000, 15)); // 150


// one parameter
const square =(a) => a * a;
console.log(square(10));

// one parameter(without brackets)
const vag = a => a / 2;
console.log(vag(10));


//no parameter
const greet =() => 'hello';
console.log(greet());

// array 
const fruits = ["apple", "banana", "cherry"];
const findFruit = fruits => fruits[1];
console.log(findFruit(fruits));

//object
const person = { name: "John", age: 30 };
const getPersonName = person => person.name;
console.log(getPersonName(person));

//multi-line
const multiply = (a,b) =>{
    let result = a * b;
    return result;
}
console.log(multiply(10,20));

//annymous function
document.getElementById("demo")
.addEventListener("click", () =>{
    alert("Button clicked!");
})

