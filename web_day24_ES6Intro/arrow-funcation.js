// function declaration
function add (num1, num2){
    return num1 + num2;

}
 // function expression
 const addition = function (num1 , num2){
    return num1 + num2;
 
 } 

 const result = addition(10, 20);
 console.log(result);


// arrow function
const add2 = (num1, num2) => num1 + num2;

const result2 = add2(10, 20);
console.log(result2); // 30

const multiply = (num1, num2) => num1 * num2;
const result3 = multiply(10, 20);
console.log(result3);

const square = num => num * num;
const result4 = square(10);
console.log(result4);

const puron = (a, b) => {
  const result = a * b;
  return result;
};
console.log(puron(4, 5)); // 20
