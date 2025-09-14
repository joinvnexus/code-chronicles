function add (a, b){
    return a + b;
}
console.log(add(10,20));

// basic 
const add2 = (a,b) => a + b;
console.log(add2(10,20));

// one parameter
const square = a => a * a;
console.log(square(10));

//no parameter
const greet =() => 'hello';
console.log(greet());


//multi-line
const multiply = (a,b) =>{
    let result = a * b;
    return result;
}
console.log(multiply(10,20));