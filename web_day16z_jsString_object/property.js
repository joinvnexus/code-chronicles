const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "traveling", "coding"],
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    },
    salary:30000,
}
// console.log(person.lastName)
const income = person.salary;
// console.log(income) 

//bracket notation

console.log(person['age'])
const boyos = person['firstName']
console.log(boyos)

