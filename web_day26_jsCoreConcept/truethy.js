let data;
data = 0;
data = ""; // falsey
data = '  ' // truthy as it has value
data = false;
data = null;
data = undefined;
data = NaN;
console.log(data)
console.log(typeof data)

if (data) {

    console.log("data is true")

} else {
    console.log("data is false")
}

//use logical not operator
if (!data) {
    console.log("data is false")
} else {
    console.log("data is true")
}

// capture all positive value 
if (data === true ){
    console.log('only true inside the double not')
}