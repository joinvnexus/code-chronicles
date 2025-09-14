/**
 * if
 * 1. if
 * 2. else if
 * 3. else
 * ===============================
 * if work with condition 
 * else work with condition
 * else if work with condition
 *  -------------------------------
 * 
 * ---------STRUCTURE----------
 * if(condition){
 *  //true
 * }else if(condition){
 *  //true
 * }else{
 *  //false
 * }
 *
 */

// if 
var  age = 18;
if(age >= 18){
    console.log("You can drive");
}else if(age < 18){
    console.log("You can not drive");
}

// else
var age = 17;
if(age >= 18){
    console.log("You can drive");
}else{
    console.log("You can not drive");
}

// else if
var age = 17;
if(age >= 18){
    console.log("You can drive");
}else if(age < 18){
    console.log("You can not drive");
}

var time = 12;

if( time >= 5 && time <= 11){
    console.log("Good Morning");

}else if( time >= 12 && time <= 16){
    console.log("Good Afternoon");
}

else if( time >= 17 && time <= 20){
    console.log("Good Evening");
}else{
    console.log("Good Night");
}

var weight = 40  ;
if (weight <= 50) {
    console.log("i will got to gym")
} else {
    consol.log("i will not go to gym")
}
