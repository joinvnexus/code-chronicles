/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;

// Write your code here
var currentSalary = startingSalary; // currentSalary = 15000

for (var i = 0; i < experience; i++) {
    currentSalary = currentSalary + currentSalary *0.05; // currentSalary = 15000 + 15000 * 0.05 = 16500
}

// Output
console.log(currentSalary.toFixed(2));
