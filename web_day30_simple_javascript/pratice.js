//একটি array থেকে সব নাম ছোট হাতের অক্ষরে রূপান্তর করো

const fruits = ["apple", "banana", "mango", "orange"];

const upper = fruits.map((fruit) => {
  return fruit.toUpperCase();
});
console.log(upper);

//একটি array থেকে ১০ এর বেশি মান ফিল্টার করে দেখাও

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const indicesOfLargeNumbers = [];

const overTen = numbers.filter((num) => num > 10);
console.log(overTen);

//

const overten = numbers.filter((num, index) => {
  if (num > 10) {
    indicesOfLargeNumbers.push(index);
  }
  return num > 10;
});
console.log(' overten array',overten);
console.log(' new array ',indicesOfLargeNumbers);

//একটি object-এর মধ্যে key-value জোড়া প্রিন্ট করো

const person = {
  name: "Rafi",
  age: 17,
  city: "Dhaka",
};
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

//একটি array of objects থেকে গড় বয়স বের করো

const students=[
    {name: "Rafi", age: 17},
    {name: "Projoy", age: 21},
    {name: "Nadia", age: 25},
    {name: "Ayesha", age: 10},
]

const adults = students.filter( student => student.age >= 18)
console.log(adults);

//forEach দিয়ে array-এর সব এলিমেন্ট যোগ করো

const numbers1 = [1, 2, 3, 4, 5];
let sum = 0;

for (const num of numbers1) {
  sum += num;
}
console.log(sum);