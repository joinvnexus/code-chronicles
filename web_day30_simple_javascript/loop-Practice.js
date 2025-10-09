for (let j = 1; j <= 10; j++) {
  console.log(j);
}

let j = 2;
while (j <= 10) {
  console.log(" while even ", j);
  j += 2;
}

const colors = ["red", "green", "blue", "yellow"];
for (const color of colors) {
  console.log(" color", color);
}

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
};

for (let prop in car) {
  console.log(prop, "->", car[prop]);
}

/// print even numbers

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("Even:", i);
  }
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Total Sum:", sum);


let i = 1;
while (i <= 5) {
  console.log("Projoy", i);
  i++;
}


//fizzBuzz game
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


let users = [
  { name: "Rafi", age: 17 },
  { name: "Nadia", age: 20 },
  { name: "Projoy", age: 25 },
];

for(const user of users){
    if(user.age >= 18){
        console.log(`${user.name} is an adult`)
    } else{
        console.log(`${user.name} is not an adult`)
    
    }
}

const num =5;
console.log(`Multiplication Table for ${num}`)

for(let i =1 ; i <= 10; i++){
    console.log(`${num} * ${i} = ${num * i}`)
}

let students = [
  { name: "Ayesha", marks: 85 },
  { name: "Rafi", marks: 67 },
  { name: "Rima", marks: 42 },
  { name: "Siam", marks: 33 },
];

for (let student of students) {
  let grade;

  if (student.marks >= 80) grade = "A+";
  else if (student.marks >= 70) grade = "A";
  else if (student.marks >= 60) grade = "B";
  else if (student.marks >= 40) grade = "C";
  else grade = "F";

  console.log(`${student.name}: ${grade}`);
}
