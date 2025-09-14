
/**
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 * 

 */
function number (a, b, c, d){
    const mult =  a*b*c*d;
    return mult;
}
const result = number(1,2,3,4);
console.log(result);

//Task-2
/**
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 * 
 */
function processNumber(num) {
    if (num % 2 !== 0) { // odd
        return num * 2;
    } else { // even
        return num / 2;
    }
}

// Example usage:
console.log(processNumber(" 1 ", 5)); // odd → 10
console.log(processNumber(8)); // even → 4

     