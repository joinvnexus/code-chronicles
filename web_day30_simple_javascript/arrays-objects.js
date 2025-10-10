const numbers = [10, 20, 30, 40, 50];

const total = numbers.reduce( (sum, current) => {
    return sum + current

},0)
console.log("Total:", total);

const users = [
  { name: "Rafi", age: 17 },
  { name: "Projoy", age: 21 },
  { name: "Nadia", age: 25 },
];

const totalAge = users.reduce ( (sum, user )=> sum + user.age,0)
console.log("Total Age:", totalAge);

const avgAge = totalAge / users.length;
console.log("Average Age:", avgAge);

//Destructuring
//🎯 Array Destructuring:
const colors = ["red", "green", "blue"];
const[ firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);

//🎯 Object Destructuring:
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
  };
  
  const { make, model, year } = car;
  console.log(make, model, year);

  //🧩 ৩️⃣ Nested Object Access
  const student = {
  name: "Rafi",
  address: {
    city: "Dhaka",
    postalCode: 1205,
  },
};

console.log(student.address.city); // Output: Dhaka
console.log(student.address.postalCode); // Output: 1205
console.log(student?.address?.city);
console.log(student?.address?.country ? 'country' : 'not found');



const people = [
  { name: "Ayesha", age: 10 },
  { name: "Rafi", age: 17 },
  { name: "Nadia", age: 25 },
  { name: "Projoy", age: 21 },
];

function getAdults(arr) {
  return arr.filter(person => person.age >= 18);
}

console.log(getAdults(people));


function introduce({ name, age, city }) {
  return `Hi, I am ${name}, ${age} years old from ${city}.`;
}

const user = { name: "Rafi", age: 17, city: "Dhaka" };
console.log(introduce(user));
