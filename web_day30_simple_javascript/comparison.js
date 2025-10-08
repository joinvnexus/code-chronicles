 

 // == (Equal to) check only value not a types
console.log(5 == 5);      
console.log(5 == "5");    
console.log("hi" == "hi"); 
console.log(0 == false);  



//=== (Strict Equal to) 
console.log(5 === 5); // check type and value

console.log(5 === "5")
console.log(true ===1)
console.log(false === 0);
console.log(null === undefined);

//!= (Not Equal to) check only value not a types
console.log(5 !=5)
console.log(5 != "5")
console.log("hi" != "hi")
console.log(0 != false)

// !== (Strict Not Equal to) check type and value
console.log(5 !== 5)
console.log(5 !== "5")
console.log(true !== 1)
console.log(false !== 0)
console.log(null !== undefined)

// > (Greater than)
// < (Less than)
// >= (Greater than or equal to)
// <= (Less than or equal to)

console.log("============")
console.log( 10>5)
console.log( 10<5)
console.log( 5>=5)
console.log( 10<=5)


console.log(5 < 10);   // true
console.log(10 < 5);   // false
console.log("a" < "b"); // true


console.log("============")
let x = 20;
let y = "20";
let z = 30;

console.log(x < z && x == y);   // && = and
console.log(x > z || x === y);  // || = or


