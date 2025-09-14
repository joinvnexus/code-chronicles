const height = [65, 66, 68, 72, 78, 60, 65, 66]

function getMax(numbers){
    // console.log(numbers)
    let max = numbers[0];
    for(const num of numbers){
        // console.log(num);
        if(num > max){
            max = num;
        }
    }
    return max;
}
const max = getMax(height);
console.log('max value is ',max)

// hw work : min number

