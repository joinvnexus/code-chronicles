
//
const  numbars = [1, 8, 9, 5, 6, 7, 2, 3, 4, 10];

const players= [{}, {}, {}, ];
const employees = [
    { name : "Rahul", age : 20, designation : "developer", salary : 50000},
    { name : "Raj", age : 20 , designation : "content writer", salary : 30000},
    { name : "Rohit", age : 20 , designation : "manager", salary : 25000},
    { name : "Ramesh", age : 20 , designation : "tester", salary : 20000},
];

employees[0].name = "ratul";

// console.log(employee[0])
// console.log(employee[1].salary);
// console.log(employee[3].name);

// for (const employee of employees) {
//     console.log(employee.salary, employee.designation, employee.name);
// }

for(const emp of employees){
    // console.log(emp.salary, emp.designation, emp.name);
    const person = emp;
    const personInfo = person.name + ":" + person.salary + ":" + person.designation;
    console.log(personInfo);
}