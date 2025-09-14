const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(const number of numbers){
   // console.log(number);
}

const person = {
    name: 'Projoy',
    age: 23,
    address: 'sylhet'
}
for (const key in person) {
    const value = person[key];
    console.log(key, value);
   // console.log(person[key]);
}
const keys = Object.keys(person);
console.log(keys);

for(const key of keys){
    const value = person[key];
    console.log(key, value);

}