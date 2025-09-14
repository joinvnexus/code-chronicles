let price = 50;
let  comp_price = price;

price= 30;
comp_price = 10;


// price = 30;
// console.log(price);
// console.log(comp_price);


const product = [22, 22, 22];
const comp_product = [];
// const comp_product = product;
for (const item of product) {
    comp_product.push(product);
}

 product[0] = 33;


// console.log(product);
// console.log(comp_product);


const numbars = [1, 8, 9, 5, 6, 7, 2, 3, 4, 10];

const comp_numbars = Array.from(numbars);
const comp_numbars= [].concat(numbars);

// //  comp_numbars.push(15);
console.log(numbars);
console.log(comp_numbars);