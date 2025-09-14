// ✅ VARIABLE NAMING STYLES
var longVariableName = "Camel case - most common in JS";
var long_variable_name = "Snake case - sometimes used";
var LongVariableName = "Pascal case - used in class names";

// ❌ Invalid: spaces are not allowed in variable names
// var long variable name = "This will cause an error!";

// ✅ NUMBER OPERATIONS
var orangePrice = 100;
var chocolate = 200;
var applePrice = parseFloat('20.8');

var total = orangePrice + chocolate + applePrice;
console.log("Total price:", total); // 320.8

// ✅ FLOATING POINT FIX
var first = 0.2;
var second = 0.4;
var floatTotal = first + second;
console.log("Float total (fixed):", floatTotal.toFixed(2)); // "0.60"
console.log("As number:", parseFloat(floatTotal.toFixed(2))); // 0.6

// ✅ DISCOUNT EXAMPLE
var originalPrice = 100;
var discountPrice = 20;
var totalPrice = originalPrice - discountPrice;
console.log("Price after discount:", totalPrice); // 80

// ✅ SHORTCUT ASSIGNMENT
var price = 20;
price += 10; // Adds 10
console.log("Updated price:", price); // 30

var fridge = 3000;
fridge -= 1000; // Subtracts 1000
console.log("Fridge price after discount:", fridge); // 2000

// ✅ MULTIPLICATION EXAMPLE
var quantity = 5;
var itemPrice = 10;
var finalTotal = quantity * itemPrice;
console.log("Final total:", finalTotal); // 50

var appleCost = 50;
appleCost *= 3; // appleCost = appleCost * 3
console.log("Apple cost (3 items):", appleCost); // 150

// ✅ TYPE COERCION
console.log(20 + '20');  // "2020" (string)
console.log(20 - '10');  // 10 (number)
console.log(20 * '10');  // 200
console.log(20 / '10');  // 2
console.log(20 % '10');  // 0

// ✅ STRING CONCATENATION
var firstName = "John";
var lastName = "Deo";
var fullName = firstName + " " + lastName;
console.log("Full name:", fullName); // John Deo

// ✅ STRINGS
var name = "John Deo";
console.log("Name:", name);

var address = "Dhaka, Bangladesh";
console.log("Address:", address);

var country = 'Bangladesh';
console.log("Country:", country);
console.log("Type of country:", typeof country);

// ✅ BOOLEANS
var isStudent = true;
console.log("Is student:", isStudent);
console.log("Type of isStudent:", typeof isStudent);

var isPass = false;
console.log("Is pass:", isPass);
console.log("Type of isPass:", typeof isPass);

// ✅ NUMBERS
var age = 17;
console.log("Age:", age);
console.log("Type of age:", typeof age);

// ✅ SPECIAL CHARACTERS
console.log("Backslash: \\"); // double backslash
console.log("New line example:\nThis is line two.");
