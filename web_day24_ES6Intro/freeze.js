const employee = {
    name: "John",
    age: 30,
    salary: 5000
};
Object.freeze(employee);

//delete employee.age;
employee.salary = employee.salary + 16000;
employee.location = "Dhaka";
console.log(employee);

const person = { foo: 1 }; // obj starts with one property { foo: 1 }

person.expected = 2; // adds a new property 'bar' with value 2
person.age= 22;
person.name = "Projoy";
console.log(person);

const title = person.name;
const age = person.age;

console.log(title, age); 
// Projoy 22