
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log(fruits.length);
console.log(fruits[fruits.length - 3]);

//⚙️ 2️⃣ Array Create & Access

const numbers = [10, 20, 30, 40, 50];

console.log(numbers[0]); // 10
console.log(numbers[3]); // 40
console.log(numbers.length); // 5

//🧱 3️⃣ Array Methods (সবচেয়ে দরকারি ৫টা)

//🔹 (1) push() → শেষে নতুন এলিমেন্ট যোগ করে

const colors = ['red', 'green' , 'yellow'];
console.log (colors);

colors.push('blue');
console.log(colors);

// 🔹 (2) pop() → শেষের এলিমেন্ট মুছে ফেলে

colors.pop();
console.log(colors);

//🔹 (3) slice(start, end) → Array-এর অংশ কেটে নেয় (মূল array পরিবর্তন করে না)

const sliced = colors.slice(0,2);
console.log(sliced);
console.log(colors);

//🔹 (4) map() → প্রতিটি element-এর উপর কাজ করে নতুন array তৈরি করে

const numbers1 = [1, 2, 3, 4, 5];
const doubled = numbers1.map((num)=> {
    return num * 2
});
console.log(doubled);

//🔹 (5) filter() → যেগুলো শর্ত পূরণ করে সেগুলো রেখে দেয়

let ages = [12, 18, 25, 30, 15];
const adults = ages.filter(( age) =>{
 return age >= 18;

})
console.log(adults);


//🔁 4️⃣ Array Loops
//🔹 for loop
const fruits1 = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits1.length; i++){
    console.log(fruits1[i]);
}
console.log('=============')
//🔹 for...of loop
for (const fruit of fruits1){
    console.log(fruit);
}
console.log('=============')
//🔹 forEach() method

fruits1.forEach( fruit =>{
    console.log(fruit);
})


// pratice 
let number = [10, 20, 30];
let sum = 0;

for(const num of number){
    sum += num
    console.log( num)
}
console.log("Sum:", sum); // 60

let nums = [1, 2, 3, 4, 5, 6];

const even1 = nums.filter( num =>{
    return num%2 === 0;
})
console.log(even1)


const names = ["Ayesha", "Rafi", "Rima", "Siam"];
const upperNames = names.map( name => {
    return name.toUpperCase();
})
console.log(upperNames)


//🧱 6️⃣ Objects (কী-ভ্যালু pair)

const person = {
    name: "Ayesha",
    age: 20,
    city: "Dhaka",
    country: "Bangladesh"

}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person['country']);

person.age = 21;
console.log(person.age);
console.log(person)

//🔁 9️⃣ for...in Loop → Object এর জন্য

for (let prop in person){
    console.log(prop, "->", person[prop]);
}


//🧩 🔟 Array of Objects (সবচেয়ে বেশি ব্যবহৃত বাস্তবে)

let users = [
 { name: "Rafi", age: 17 },
 { name: "Projoy", age: 21 },
 { name: "Ayesha", age: 25 },
];
let adultUsers = users.filter(user => user.age >= 18);
console.log(adultUsers);


//🔹 Get names only
let nam = users.map(user => {
    return user.name
})
console.log(nam)

let student = {
  name: "Projoy",
  subjects: {
    math: 85,
    english: 78,
    score:{
        math: 85,
        english: 78
    }
  },
};

console.log(student.subjects.math); // 85
console.log(student.subjects.english); // 78
console.log(student.subjects.score.math); // 85


let students = [
  { name: "Rafi", marks: 85 },
  { name: "Projoy", marks: 72 },
  { name: "Nadia", marks: 63 },
  { name: "Rima", marks: 39 },
];

students.forEach(student => {
  let grade;
  if (student.marks >= 80) grade = "A+";
  else if (student.marks >= 70) grade = "A";
  else if (student.marks >= 60) grade = "B";
  else if (student.marks >= 40) grade = "C";
  else grade = "F";

  console.log(`${student.name}: ${grade}`);
});
