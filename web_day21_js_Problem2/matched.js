const numbers =[ 12, 34, 54, 67];

// for(let i = 0; i <numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }


// for(const num of numbers){
//     console.log(num);

// }

const products = [
    {id: 1, name: ' phone phone', price: 12000, color: 'black'},
    {id: 2, name: ' phone laptop', price: 22000, color: 'black'},
    {id: 3, name: ' phone watch', price: 3000, color: 'black'},
    {id: 4, name: ' Phone tablet', price: 6000, color: 'black'},
    {id: 5, name: 'camera', price: 8000, color: 'black'},
    {id: 6, name: 'mouse', price: 2000, color: 'black'},
    {id: 7, name: 'keyboard', price: 5000, color: 'black'},
    {id: 8, name: 'printer', price: 6000, color: 'black'},
]

// for( const product of products){
//     console.log(product);

// }

function matchedProducts(products, keyword){
    const matched = [];
    for (const product of products){
        // console.log(product.name.toLowerCase().includes(keyword))
        if(product.name.toLowerCase().includes(keyword.toLowerCase())){
            matched.push(product);
        }
    }
    return matched
}
const result = matchedProducts(products, 'laptop');
console.log(result)