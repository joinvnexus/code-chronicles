const numbers = [ 1, 2, 3, 4, 5, 6];
 console.log(numbers);

// const evenNumbers = numbers.filter(num => num % 2 === 0)

// console.log(evenNumbers);

// const oddNumbers = numbers.filter(num => num % 2 !== 0)
// console.log(oddNumbers);


// 1. শুধু জোড় সংখ্যা বের করবো
const evens = numbers.filter(num => num % 2 === 0); 
// [2, 4, 6]
console.log(evens);


// 2. জোড় সংখ্যাগুলোকে দ্বিগুণ করবো
const doubleEvens = evens.map(num => num * 2);
// [4, 8, 12]
console.log(doubleEvens);


// 3. এখন সেগুলো প্রিন্ট করবো
doubleEvens.forEach(num => console.log(num));
// আউটপুট:
// 4
// 8
// 12
console.log(doubleEvens);
