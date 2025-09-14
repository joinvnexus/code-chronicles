const name = 'joe';
const age = 30;
const job = 'developer';
const city = 'seoul';
// console.log(`name: ${name}, age: ${age}, job: ${job}, city: ${city}`);


// function declare
function fanOff (){
    console.log('fan fanOff');
    console.log('fan fanOn');
}
//call the function
 fanOff();

// function declare
function sayHello(){
    console.log(' say hello');
}
// call the function
sayHello();

console.log('==============================');



function personUp(a,b){
    const result = a+b;
    // console.log(`${a} + ${b} = ${result}`);
    // console.log(`result: ${result}`);
    return result;
}
// call the function
personUp(5,8);
// const total =personUp(5,15);
// console.log(`total: ${total}`);