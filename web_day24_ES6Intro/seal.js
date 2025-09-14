const employee = {
    name: "John",
    age: 30,
    salary: 5000
};
Object.seal(employee);

//delete employee.age;
employee.salary = employee.salary + 16000;
employee.location = "Dhaka";
console.log(employee);