const numbers = [87, 8 , 5 , 91]
// console.log(numbers);
// console.log(...numbers);

// const max = Math.max(1121, 121, 112 ,11, 94, 514)

const max = Math.max(...numbers)

// console.log(max);

const numbers2 = [87, 8 , 5 , 91]
const numbers3 = [87, 8 , 5 , 91]
const allNumbers = [...numbers2, ...numbers3]
console.log(allNumbers);

// const first = [1, 2, 3]
// const second = first
// second.push(4)
// console.log(first);
// console.log(second);

const first = [1, 2, 3]
const second = [...first]
const third = [0, ...first, 4, 5, 6]
second.push(7)
// console.log(first);
// console.log(second);
// console.log(third);

const age = [12, 13, 14, 15]
const newAge = [ 16, 17, 18]
const allAge = [...age, ...newAge]
console.log(allAge);

const person = {
    name: "Projoy",
    age: 10
}

const newPerson = {
    ...person,
    passion: "Coding"
}
console.log(newPerson);

const totat = (a,b,c) => a + b + c;
const result = totat(45, 55, 65)
const digat = [40, 50, 60]
const result2 = totat(...digat)
console.log(result2);