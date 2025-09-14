
// let data = 5

const name = "John Doe" 

if (true) {
    const data = 10;
    console.log("inside the if block ", data)
     doMath(20,30)
    const person = data + ' ' + name
    console.log(person)
}

// console.log(data)

/**
while(true){
  
}
 */

for( const num of [1,2,3,4,5]){
    // console.log(num)
}


// funcation scope
function doMath(num1, num2){
    console.log(num1 + num2)
    const sum = num1 + num2
    const total = sum * 10
    console.log(' total is ',total)


    function add(x){
        return x * 10
    }
     console.log("add result:", add(5))

}


// console.log(location)
// 
let location= "chennai"


//4. Lexical Scope (Nested Functions)
const globalVar = "global";

function outer (){
    const outerVar = " i am outer variable "

    function inner(){
        
        const innerVar = " i am inner variable "
        console.log(outerVar) // inner function can access outer function variable
        console.log(innerVar) // inner function can access inner variable
        console.log(globalVar) // inner function can access global variable

    }
    inner()

}
outer()

// 5. Closure
