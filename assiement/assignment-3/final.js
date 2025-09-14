
// PROBLEM 1 TASK 

/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here

//per person share
var sharePerPerson = area / 2;

console.log(sharePerPerson);


// PROBLEM 2 TASK


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if(money >= 25000){
    console.log('montu akta Laptop pabe!');
} else if( money >=10000 ){
    console.log('montu akta Cycle pabe!')
} else {
    console.log('montu akta Chocolate  pabe!')
}

// PROBLEM 3 TASK



/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
for ( var day = 1; day <= LastDay; day++) {
    if (day % 3 === 0) {
        console.log(day + " - medicine")
    } else {
         console.log(day + " - rest");
    }
}

// PROBLEM 4 TASK

/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here


if (fileName.startsWith('#') || fileName.endsWith(".pdf") || fileName.endsWith(".docx")) {
  console.log("Store");
} else {
  console.log("Delete");
}


// PROBLEM 5 TASK


/** Problem 05 - ( PH Email Generator )  */
var student = {

    name: "monu",
    roll: 99,
    department: "eee"

};

var email = student.name + student.roll +'.' + student.department+'@ph.ac.bd';

console.log(email)

// PROBLEM 6 TASK

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
