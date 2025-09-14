const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => console.log(num));

numbers.forEach(num => {
    console.log(num);
    const result = num * 2;
    console.log(result);

})
const oddNumbers = numbers.filter( num => num % 2 !==0);
console.log(oddNumbers + 'odd numbers');


const friends = ['omnia', 'salma', 'ali', 'mohamed'];
friends.forEach(friend => {
    console.log(friend);
    const result = friend.toUpperCase();
    console.log(result);
} )

console.log(friends.map(friend => friend.toUpperCase()));
