// if
const age = 20;
if (age >= 18) {
  console.log("you are an adult");
}

//if...else
const year = 23;
if (year >= 18) {
  console.log("You can vote 🗳️");
} else {
  console.log("You cannot vote 🗳️");
}

//if...else if...else

const marks = 80;
if (marks >= 80) {
  console.log("You got A grade");
} else if (marks >= 60) {
  console.log("You got B grade");
} else if (marks >= 40) {
  console.log("You got C grade");
} else {
  console.log("You got F grade");
}

const username = "projoy ";
const password = "1234";

if (username === "projoy ") {
  if (password === "1234") {
    console.log("Login successful ✅");
  } else {
    console.log("Incorrect password");
  }
} else {
  console.log("User not found 🚫");
}

//Ternary operator
const ages = 20;
const result = ages >= 18 ? "You are an adult" : "You are not an adult";
console.log(result);

// switch Statement

const day = 4;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid day");
}

let temperature = 30;

if (temperature > 35) {
  console.log("It's too hot ☀️");
} else {
  console.log("Weather is fine 🌤️");
} 

let email = "user@gmail.com"; 
let userPassword = "abc123";

if (email === "user@gmail.com") { 
  if (userPassword === "abc123") {
    console.log("✅ Login successful");
  } else {
    console.log("❌ Wrong password");
  }
} else {
  console.log("🚫 No user found");
}

let isMember = true;
let message = isMember ? "Welcome Back!" : "Please Sign Up!";
console.log(message);

let fruit = "mango";

switch (fruit) {
  case "apple":
    console.log("🍎 Apple selected");
    break;
  case "mango":
    console.log("🥭 Mango selected");
    break;
  case "banana":
    console.log("🍌 Banana selected");
    break;
  default:
    console.log("Unknown fruit");
}
