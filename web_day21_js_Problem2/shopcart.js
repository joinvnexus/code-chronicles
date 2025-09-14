const product = [
    { name: 'shampo', price: 300  ,quanity:5},
    { name: 'mirror', price: 100  ,quanity:4},
    { name: 'shirt',  price: 700  ,quanity:3},
    { name: 'pant',   price: 1200 ,quanity:2 }
];
 
function cartTotal(products){
    let totalPrice = 0;
    for(const item of products){
        // console.log(item)
         totalPrice += item.price + item.price
        // totalPrice = totalPrice + item.price + item.quanity

    }
    return totalPrice;
}
const totalQuanity = cartTotal(product)
console.log(totalQuanity);