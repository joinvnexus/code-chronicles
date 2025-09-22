function one(){
    two()
    console.log(1)

}
function two(){
    three()
    console.log(2)

}
function three(){
    setTimeout(()=>{
        console.log("new three inside set time out",0)

    },4000)
    four()
    console.log(3)

}
function four(){
    five()
    console.log(4)

}
function five(){
    setTimeout(()=>{
        console.log("new five inside set time out",0)

    })
    console.log(5)

}

one()