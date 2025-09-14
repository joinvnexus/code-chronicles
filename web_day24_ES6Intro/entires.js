const employee = {
    name: "John",
    age: 30,
    salary: 5000
};

const { name, age, salary } = employee;

//console.log(name); // "John"
//console.log(age); // 30
//console.log(salary); // 5000

const keys = Object.keys(employee);
const values = Object.values(employee);
const entries = Object.entries(employee);

console.log(keys); // ["name", "age", "salary"]
console.log(values); // ["John", 30, 5000]
console.log(entries); // [["name", "John"], ["age", 30], ["salary", 5000]]