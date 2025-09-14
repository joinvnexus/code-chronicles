
// js is a dynamically typed language
let data = 4

data = "string"

data = false
data =  {
    name: "John",
    age: 30
}
data = [1,2,3,4,5]


console.log(typeof data)


// js : primative data types
// 1. number 
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. object

// js : non-primative data types
// 1. array
// 2. function
// 3. object
// 4. date
// 5. regexp
// 6. error
// 

//example  of non-primative data type

let date = new Date()
console.log(date)
console.log(typeof date)


let arr = [1,2,3,4,5]
console.log(arr)
console.log(typeof arr)

let obj = {
    name: "John",
    age: 30
}
console.log(obj)
console.log(typeof obj)

let func = function() {
    console.log("Hello")
}
console.log(func)
console.log(typeof func)

let error = new Error("Error")
console.log(error)
console.log(typeof error)

let regexp = /hello/
console.log(regexp)
console.log(typeof regexp)

// js : primative data types
// 1. number 
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. object