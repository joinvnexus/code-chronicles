
const numbers = [1, 2, 3, 4, 5];

// const doubleNumbers = []
// for ( const num of numbers){
//     const result = num * 2;
//     doubleNumbers.push(result);

// }
// const doubleNumberFunction = x => x * 2 // arrow function

// const doubleNumbers = numbers.map(doubleNumberFunction)

const doubleNumbers = numbers.map( x => x *2); // arrow function

const fiveTmes = numbers.map( num => num * 5);

const square = numbers.map(num => num * num);
console.log(square);

console.log(fiveTmes);


console.log(doubleNumbers);



const friends = ['omnia', 'salma', 'ali', 'mohamed'];

const newName = friends.map(name =>`${name} (${name.slice(0,2).toUpperCase()})`);
const capitalized = friends.map( name => name[0] .toUpperCase() + name.slice(1));

const result = friends.map ((num,index)=>{
   
    return num * index;
     console.log(num, index);
})
console.log(newName); 
console.log(capitalized);
