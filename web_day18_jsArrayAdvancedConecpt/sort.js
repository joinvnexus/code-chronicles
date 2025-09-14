const num = [ 6,8,9,1,2,3,4,5,7]

// console.log(num);
num.sort();
// console.log(num);

const friends = ['Rahul', 'Raj', 'Rohit', 'Ramesh', 'Vishal','Rakesh', 'Rajesh'];
friends.sort();
console.log(friends);



const age = [2, 12, 30, 14, 50, 60];
// console.log(age);
// console.log(age);
// age.sort();
// console.log(age);


//ascending order
const Ages = age.sort(function(a, b){
    return a - b;
});


//descending order
const Ages_1 = age.sort(function(a, b){
    return b - a;
});
console.log(Ages_1);