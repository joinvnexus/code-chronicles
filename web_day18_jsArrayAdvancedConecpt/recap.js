/**
 *  
 * 
 */

const book = ['physics', 'chemistry', 'maths', 'biology', 'english'];

for (let i = 0; i < book.length; i++){
    console.log(book[i]);
}

const revers_book = book.reverse();

console.log(revers_book);

const Sort_book = book.sort();
console.log(Sort_book);


const gadgets = [
    {name: 'phone', price: 1000 , color: 'black', brand: 'samsung'},
    {name: 'laptop', price: 2000 , color: 'white', brand: 'lenovo'},
    {name: 'tablet', price: 1500 , color: 'red', brand: 'apple'},
    {name: 'watch', price: 500 , color: 'blue', brand: 'rolex'},
    {name: 'camera', price: 800 , color: 'grey', brand: 'canon'},
]

//2d array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]