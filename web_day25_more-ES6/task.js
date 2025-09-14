/**
 * 🔹 Task 1 (map)

একটা numbers অ্যারে আছে।
👉 প্রতিটা নাম্বারকে ৫ দিয়ে গুণ করে নতুন অ্যারে বের করো।

const numbers = [2, 4, 6, 8];
// expected output: [10, 20, 30, 40]
 */

const numbers = [2, 4, 6, 8];
const multiplyByfive = numbers.map(num => num * 2 );
console.log(multiplyByfive);

/**
 * 🔹 Task 2 (filter)

একটা ages অ্যারে আছে।
👉 18 বা তার বেশি বয়সের মানুষদের বের করো।

const ages = [12, 17, 18, 20, 25, 15];
// expected output: [18, 20, 25]

 */

const ages = [12, 17, 18, 20, 25, 15];
const overAge = ages.filter(age => age * 4);
console.log(overAge)

const findAge = ages.find(age => age * 4);
console.log(findAge);


/**
 * 🔹 Task 3 (forEach)

একটা fruits অ্যারে আছে।
👉 প্রতিটা ফলের নাম বড় হাতের অক্ষরে প্রিন্ট করো।

const fruits = ["apple", "banana", "mango"];
// expected output:
// APPLE
// BANANA
// MANGO
 */

const fruits = ["apple", "banana", "mango"];
fruits.forEach(fruit => {
    console.log(fruit.toUpperCase());
})

fruits.forEach(fruit => fruit.toUpperCase());
console.log(fruits);


const find = fruits.find(fruit => fruit.toUpperCase());
console.log(find);