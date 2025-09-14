/**
 * 
 * function tkes an array as paremeter 
 * give me the average of the odd number in the array
 */
/**function addAverage (num){
    console.log(num);
   for(const element of num ){
    console
   }

}
const number = [42, 13, 58, 65 , 81]
const avg = addAverage(number);
console.log('avrage of the odd numbers is :', avg);
*/
function oddAvreage (numbers){
    // console.log(numbar)
    const oddNumbers = [];
    for( const element of numbers){
        // console.log(element)
        if(element % 2 === 1){ //odd check 
           oddNumbers.push(element)
        }
    }
    // odd is the array that contains only the odd numbers
    // console.log(oddNumbers)
    let sum = 0;
    for (const num of oddNumbers){
        sum = sum + num;
    }
    const count = oddNumbers.length;
    console.log(sum)
    const avg = sum / count;
    return avg;
}
const numbers = [42, 13, 58, 65, 81, 151]
const avg = oddAvreage(numbers)
console.log('Average of the odd numbers is:', avg)