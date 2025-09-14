const numbers= [1, 2, 3, 4, 5,6 ,58, 45,40];

const evenNumbers = numbers.map(num => num * 2)
console.log(evenNumbers);

const oddNumbers = numbers.map(num => num % 2 !== 0)
console.log(oddNumbers);

const item = ['apple', 'banana', 'orange', 'kiwi', 'grape' ];
const newarr = [];
const addnew = item.map( name => {
    newarr.push(name + ' fuck you ');
    return newarr;
})
console.log(addnew);
const upperCaseItems = item.map(name => name.toUpperCase() + '!');
console.log(upperCaseItems)

const lowerCaseItems = item.map(name => name.toLowerCase() + '!');
console.log(lowerCaseItems)
