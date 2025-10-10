const numbers = [10, 20, 30, 40, 50, 60];

const total = numbers.reduce((sum, num) => {
  return sum + num;
});

console.log("Total:", total);

const average = total / numbers.length;
console.log("Average:", average);

const person = {
  name: "Rafi",
  age: 17,
  city: "Dhaka",
};

const { name, age, city } = person;
console.log(`Name: ${name}, Age: ${age}`);

const people = [
  { name: "Rafi", age: 17 },
  { name: "Projoy", age: 22 },
  { name: "Nadia", age: 25 },
  { name: "Ayesha", age: 18 },
];

function getEvenAge(arr) {
  return arr.filter((person) => person.age % 2 === 0);
}
const result = getEvenAge(people);
console.log(result);

const student = {
  name: "Rafi",
  address: {
    city: "Dhaka",
    postal: 1205,
  },
};
const user2 = {
  name: "Projoy",
};

console.log(student?.address?.city);
console.log(student?.address?.postal);
console.log(user2?.address?.country || "Country not found");



const users = [
  { name: "Rafi", age: 17 },
  { name: "Projoy", age: 21 },
  { name: "Nadia", age: 25 },
  { name: "Ayesha", age: 10 },
];
const adults = users.filter(user => user.age >= 18);
const adultNames = adults.map(user => user.name.toUpperCase());
const avgAge = adults.reduce((sum, user) => sum + user.age, 0) / adults.length;

console.log("Adults:", adults);
console.log("Adult Names (Uppercase):", adultNames);
console.log("Average Age of Adults:", avgAge);
