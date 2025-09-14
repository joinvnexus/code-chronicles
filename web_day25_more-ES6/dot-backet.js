const student = {
    name : 'John',
    age : 30,
    grade : 'A',
    address : '123 Main St'
}

//dot notion
const studentName = student.name;
console.log(studentName);

//bracket notation
const studentAge = student['age'];
console.log(studentAge);

for (const key in student){
   // console.log(key, student[key]);
   const value = student[key];
   console.log(value);

}