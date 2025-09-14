/**
 * 1.const --> value not going to change
 * 
 * 2.let --> value can change and the scope is local
 * 
 * 3.var --> value can change and the scope is global
 * 
  */
 const price = 500; // numbar
 console.log(price); // 500
 const name = "Rahul"; // string
 console.log(name); // Rahul
 const isStudent = true; // boolean
 console.log(isStudent); // true
 const friends = ["Rahul", "Raj", "Rohit"]; // array
 console.log(friends); // ["Rahul", "Raj", "Rohit"]

 const person = { // object
     name: "Rahul",
     age: 20,
     city: "Rajkot"
 }
 console.log(person); // {name: "Rahul", age: 20, city: "Rajkot"}
 
 // condation 
 if (price < 100){
    console.log('price is geater than 100')
 } else if(price >500){
    console.log('price is less than 500')
 }
 else {
    console.log('price is less than 100')
 }

 // while loop 
 let num = 0;
 while(num <= 50){
    console.log('num is -',num)
    // num = num + 1
    num += 5
    //   num++;
 }

// for loop
 for (let i = 0; i <10; i++){
    console.log(i)
 }