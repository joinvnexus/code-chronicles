let myPoints = 3;
// create two function add3points() and removePoinit(), and have them 
// add/remove points to/from the myPoints variable 

function add3points(){
    myPoints+= 3
}
function removePoints(){
    myPoints -= 3
}
add3points()
add3points()
add3points()
removePoints()
removePoints()
// console.log(myPoints)

// try tp predct what each of the line will log out 
// console.log('2' + 2)
// console.log(11 +7)
// console.log(6 + '5')
// console.log('mypoints :' + 5 + 9)
// console.log(2 + 2)
// console.log("11" + "14")

//when the user clicks the purches button , render out 
// "Something went wrong. please try again " in the paragraph
//that has the id="error".
const errorPara = document.getElementById('error')
console.log(errorPara);
function purches(){
    console.log('button click')
    errorPara.textContent = "Something went wrong. please try again "
}