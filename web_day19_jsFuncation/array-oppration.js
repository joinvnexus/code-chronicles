/**
 * 
 * object : write a function to give me the sum of all numbers in a array
 * 1. declare a funcation 
 * 2. call check whether the funcation is called  properly
 * 3. set a prameters(s)
 * 4. pas the paraemater (s ) check whether is passed ina proper format
 * 5. do the funcation tasks (step by step)
*/
function sumOfArray(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    return sum; // ✅ return after loop
}

const numbs = [34, 56, 798, 76];
const total = sumOfArray(numbs); // ✅ pass the array
console.log('Sum of array is:', total);
