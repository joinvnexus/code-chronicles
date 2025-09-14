const product = [
    {
        name: 'shampo',
        price: 300,
    },
    {
        name: "mirror",
        price: 100,
    },
    {
        name: 'shirt',
        price: 700,
    },
    {
        name: 'pant',
        price: 1200,
    }

]

function getShopPrice(products){
    let sum = 0;
    for(const product of products){
        sum = sum +product.price
    }
    return sum;
        // console.log(product)
}
const total = getShopPrice(product)
console.log('total price ', total)