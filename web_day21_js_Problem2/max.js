const disha = 5;
const salman = 10;
if(disha > salman){
    console.log('dish get the stowberry')
} else{
    console.log('salman get the stowberry')
}

function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    } else{
        return num2
    }
}
const max = getMax(96, 79)
const max2 = getMax(56,98)
const ultimateMax = getMax(max, max2)
// console.log()
console.log('max of two is:' ,ultimateMax)