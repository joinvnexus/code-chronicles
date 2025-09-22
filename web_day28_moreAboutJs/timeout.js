console.log(1)
console.log(2)

const timeOut =setTimeout( () => {
    console.log(3)
},5000)

const timeOut1 =setTimeout( () => {
    console.log(33)
},5000)


console.log(' timeOut',timeOut, timeOut1)
clearTimeout(timeOut)

console.log(4)
console.log(5)