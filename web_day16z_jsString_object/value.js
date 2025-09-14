const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "traveling", "coding"],
    'fav places':['london', 'UK', 'canada'],
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    },
    salary:30000,
}
person.salary = 25000;
person['fav places'] = ['america']
person['age'] = 22;

console.log(person)