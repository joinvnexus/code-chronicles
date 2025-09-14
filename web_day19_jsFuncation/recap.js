function add(price1, price2){
    const total = price1 + price2;
    return total ;
}
const bill = add(5, 80);

function add2(price1, price2){
    // const total = price1 + price2;
    return price1 + price2;
}

const bill2 = add(5,15)

// console.log(bill);
// console.log(bill2);


// 
function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mult = sum * diff;
    const result =  mult/2;
    console.log(result);
    return result;
}
doMath(10, 20);

const price = 30;
const tax = 0.5;
const total = doMath(price, tax);
console.log(total);



