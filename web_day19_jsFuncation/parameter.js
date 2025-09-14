 function parameter (){
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
 }

//  parameter();


// 3-->3*3=9
// 4-->4*4=16
//11-->11*11=121

//
function square (number){
    console.log("square of number", number);
    const borgo = number*number;
    console.log("square of number", borgo);
    
    return borgo;

}
square(5);
console.log('========================')
square(6);
console.log('========================')
square(17);
const borgo = square(234);
console.log(borgo);
console.log('========================')

//parameter

function add(a, b){
    const sum = a+b;
    console.log(sum);
}
// const result = add(12,11);
add(15,2);
add(5,7);

function addAll(a,b,c,d,e){
    const result = a+b+c+d+e;
    console.log(result);
}
addAll(1,2,3,4,8);