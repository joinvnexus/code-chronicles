/**
 * not a difine 
 */

let money = 1000
console.log(money)
money = undefined
// console.log(money)

let money2;
// console.log(money2)

function add(num1, num2) {
   // console.log(' sum is ', num1 , num2) // console.log('num1, num2)
    const sum = num1 + num2
    // return sum
    console.log('sum is ', sum)
}
const result = add(10, 20)
console.log(result)


function total ( a , b){
   // console.log("value of parameters ", a, b)
    if(a===undefined || b === undefined){
        return 0
    }
    if( a && b){
        const sum = a + b
        return sum;
    }
}

const totalResult = total(10)
//console.log(" totalResult of result called function ",totalResult)


const phone = {
    name: "samsung",
    price: 20000,
    color: "black",
    ram: "4gb",
}
console.log(phone.price)
console.log(phone.color)
console.log(phone["ram"])
console.log(phone["model"])

const banks = ["bank1", "bank2", "bank3", "bank4", "bank5"]
console.log(banks[0])
console.log(banks[1])
console.log(banks[2])
console.log(banks[3])
console.log(banks[5])

delete banks[2]
console.log(banks)
console.log(banks[2])

console.log('type of undefined ', typeof undefined)
console.log('type of null ', typeof null)
 console.log('t==================')
let a = null;
let b;
console.log(a === b); // false (null !== undefined)
console.log(a == b);  // true  (loose equality considers them the same)
