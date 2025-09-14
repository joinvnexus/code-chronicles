function multiply(num1, num2){
    num1 = num1 + 10
    const mult = num1 * num2
    return mult;
}

const a = 10;
const b = 20;
console.log(" before the function call " , a, b)
const result = multiply( a, b)
console.log(" after the  Functions CALL",result)

// pass by referrance 
const manik = {
    name : "manik",
    balance : 10000
}
const projoy = {
    name : "projoy",
    balance : 20000
}

console.log( " before call ", manik , projoy)

function totalMoney (person1, person2){
    person1.balance = 0;
    person2.balance = person2.balance + 100
    const total = person1.balance + person2.balance
    return total

}

const totalResult = totalMoney(manik, projoy)
console.log(" after call ", manik , projoy)

console.log(" after call ", manik, projoy)