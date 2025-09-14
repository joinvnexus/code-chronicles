function greet(name, callback) {
//   console.log("Hello " + name);
  callback(); // call the callback function
}
// pass sayBye as a callback
greet("John", sayBye);
greet("Jane", sayBye);

function sayBye() {
//   console.log("Goodbye!");
}


function sayHello(name, Bye) {

    console.log("Hello----" + name + "----" )
    Bye()

}
sayHello( "John" , sayGoodBye)

function sayGoodBye(){
    console.log("Bye----")
}

function normal (FristName, LastNamen ,age, moreDetailsAdd){

    console.log(`my name ${FristName} ${LastNamen} and my age is ${age} `)
    if(typeof moreDetailsAdd === "function"){
        // moreDetailsAdd()
        const newDetails = moreDetailsAdd("maths" , "codeing" , 10)
         console.log(newDetails)
    }


}
const name = normal('projoy' , 'Naidu', 30 , student )

function student (subject , hobby , rollNumber){

    return `my subject is ${subject} and my hobby is ${hobby} and my roll number is ${rollNumber}`

}

const student1 = new student("maths" , "codeing" , 10)






// new call back learn fresh topic

function user (name, age, location, callback ) {

    console.log(`my name is ${name} and my age is ${age} and my location is ${location}`)
    callback()

}

user( "projoy" , 30, "chennai" , addCallback)

function addCallback(){
    console.log("add callback")
}


