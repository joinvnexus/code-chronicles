const num = '12'; // number
if (typeof num === 'number') {
    console.log('number');
} else {
    console.log('not number');
}

const str = 'hello'; // string
if (typeof str === 'string') {
    console.log('string');
} else {
    console.log('not string');
}

const number = [1, 2, 3, 4, 5]
// console.log(Array.isArray(number));
console.log(typeof number);

const student ={
    name: 'jane',
    age: 20,
    isStudent: true,
    address: 'Dhaka'
}
console.log(typeof student);
// console.log(Array.isArray(number));
console.log(Array.isArray(student));

// isNaN example
console.log(isNaN("123"));   // false → string হলেও number বানানো যায়
console.log(isNaN("abc"));   // true  → string কে number বানানো যায় না
console.log(isNaN(NaN));     // true

// Number.isNaN example
console.log(Number.isNaN("123"));  // false → string, কিন্তু NaN না
console.log(Number.isNaN("abc"));  // false → string, কিন্তু NaN না
console.log(Number.isNaN(NaN));    // true → একমাত্র আসল NaN

// Number.isInteger example
console.log(Number.isInteger(3));   // true
console.log(Number.isInteger(3.14)); // false

const strs = Array(10).join('wat ' + 1)
console.log(str);

console.log([] + []);        // ""
console.log([5] + {ispicky: true});        // "[object Object]"
console.log({} + []);        // 0

console.log(true + true);    // 2
console.log(true + false);   // 1

console.log("10" - 1);       // 9   (string number হলে minus কাজ করে)
console.log("10" + 1);       // "101" (কিন্তু plus এ string concat হয়ে যায়)



let fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); // apple

fruits.push("orange");  // add last
console.log(fruits);
fruits.pop();           // remove last
console.log(fruits);
fruits.unshift("kiwi"); // add first
console.log(fruits);
fruits.shift();         // remove first
console.log(fruits);

fruits.forEach(f => console.log(f)); // loop through
