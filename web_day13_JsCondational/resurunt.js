const age = 40;
const price = 500;
if (age <= 12 ){
    console.log('you can eat free')
}
else if ( age >= 60){
    // 50% discunt
    console.log("You get 50 % discount ")
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
} else if(age >= 50){
    // 25% discount
    const discount = price * 25 / 100;
    const payAmount = price - discount
    console.log(payAmount = " you get 25% discount")
} else if (age >= 40) {

    // 15 % discount
    const discount = price * 15 /100;
    const payAmount = price - discount;
    console.log(payAmount + " you get 15% discount")


}
else{
console.log(price)
}