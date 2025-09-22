console.log(1)
console.log(2)

let count = 0;
const inetervalId = setInterval(() => {
    console.log(count++)
    if(count > 10){
        clearInterval(inetervalId)
    }
}, 2000)

console.log(' timeOut',inetervalId)
// clearInterval(inetervalId)
console.log(4)
console.log(5)