
// pratice task 
//you went to the supermarket to buy some Orange and Apple. calculate how much money you have to pay.

var wallet = 1000;

var OrinalPrice = 500;
var ApplePrice = 300;

var total = OrinalPrice + ApplePrice;
// console.log(total)

var afterPayHave = wallet - total;
// console.log(afterPayHave)

//praticetask two
//write a program to calculate the the average marks of mathmatics, Biology, Chemistry, Physics, and Bangla. Also, calculate the percentage and grade.

var mathmatics = 80;
var Biology = 90;
var Chemistry = 70;
var Physics = 85;
var Bangla = 75;

var totalMarks = mathmatics + Biology + Chemistry + Physics + Bangla;
console.log(totalMarks)

var percentage = (totalMarks / 500) * 100;
console.log(percentage)

var grade;
if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "A-";
} else if (percentage >= 50) {
    grade = "B";
} else if (percentage >= 40) {
    grade = "C";
} else {
    grade = "Fail";
}
console.log(grade)