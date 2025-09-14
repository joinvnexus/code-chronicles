const weight = 70;
const height = 1.8;

const bmi = weight / height * height;

// console.log("your BMI is: " + bmi.tofixed(2));

if ( bmi < 18.5 ){
    console.log( "you are the under Weight.")
} else if ( bmi >= 18.5 && 25){
    console.log('You have a normal weight.')
} else if( bmi >= 25 && bmi < 30){
    console.log('You have a  over weight')
} else{
    console.log("you are obese")
}