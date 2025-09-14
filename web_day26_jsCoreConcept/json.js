/**const person ={
    name : "projoy",
    age : 30,
    address : "sylhet, bangladesh",
    friends : ["manik" , "sivakumar"],
    isRich : true,
    money : 10000,

}
// console.log(person)

const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON)

const personObj = JSON.parse(personJSON);
console.log(personObj, typeof personObj)
 */

const result = fetch('https://jsonplaceholder.typicode.com/todos/1')
.then ((oppeka )=> oppeka.json())
// .then (oppekapol => console.log(oppekapol))


const studentProfile = {
    name : "projoy",
    age : 30,
    address : " sylhet, bangladesh",
    friends : ["manik" , "sivakumar"],
    isRich : true,
    money : 10000,
}
// console.log(" object to json here object ", studentProfile)

const studentProfileJSON = JSON.stringify(studentProfile);
// console.log(studentProfileJSON, typeof studentProfileJSON)

// fetch ('https://jsonplaceholder.typicode.com/todos/1')
// .then(tumrOppeka => tumrOppeka.json()) 
// .then(tumrOppeka => console.log(tumrOppeka))
//    

// 

fetch ('https://jsonplaceholder.typicode.com/todos/1')
.then ((tumrOppeka) =>{
    console.log(tumrOppeka)
    return tumrOppeka.json()
})
.then((tumrOppeka)=>{
    console.log(tumrOppeka)
})
fetch().then (() => {}) // anonymous function
.then (() => {})
.catch(() => {})
.finally(() => {})

//