/**
 * MULIT_LEVEL CONDITION
 * 1. if
 * 2. else if
 * 3. else
 */

// IF
const price = 2000;

if(price >= 5000){
    // 10 % discount
    const discount = price * 10 / 100;
    console.log(discount);
    const payAmount = price - discount;
    console.log(payAmount);
    console.log("You can get 10% discount");
}
else if(price > 2500 ){
    // 5 discount 
    const discount = price * 5 / 100
    const payAmount = price - discount
    console.log(payAmount)
    console.log('5% discount')

}
else{
    console.log(price);
}