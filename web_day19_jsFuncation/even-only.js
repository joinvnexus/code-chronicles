/**
 * create function that will retun  only the even numbers retun the sum of even numbers 
 * 
 */

function evenNumbersOnly() {
    const evens = []
    for (const number of numbers) {
        //  console.log(number);
        if (number % 2 === 0) {
            // console.log(number);
            evens.push(number);
        }
        //  console.log(evens);
    }
    return evens;
}
const numbers = [5, 6, 7, 12, 8, 9, 10, 15, 20, 25 , 24]

// const result = evenNumbersOnly(numbers);
// console.log('even numbers are :', result);

function sumOfevenNumbers (num3, num4){
    // console.log(num3, num4);
    let evensNumbar = [];
    for( const number of num3){
        if(number % 2 === 0){
            // console.log(number);
            evensNumbar.push(number);
        }
    }
    for (const number of  num4){
        if(number % 2 === 0){
            evensNumbar.push(number)
        }
    }
    return evensNumbar;

}
const num1 = [5, 6, 7, 12, 8, 9, 10, 15, 20, 25 , 24];
const num2 = [1, 3, 5, 7, 9, 44, 13, 15, 17, 22, 21, 23, 25];
const result =sumOfevenNumbers(num1, num2);
console.log(' sum of even numbers in num1 and num2 are : ', result);



