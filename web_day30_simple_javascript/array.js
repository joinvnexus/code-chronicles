const array = [1, 2, 3, 4, 5];

// looping through array
array.forEach(function(item) {
    console.log(item);
});

// finding element in array
const found = array.find(function(item) {
    return item === 3;
});

console.log(found); // 3

// filtering array
const filtered = array.filter(function(item) {
    return item % 2 === 0;
});

console.log(filtered); // [2, 4]
