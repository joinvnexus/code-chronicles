

 async function loadData(){
    console.log("one")
    console.log("two")
/**
      fetch("https://jsonplaceholder.typicode.com/users/1")
      .then ( res => res.json())
      .then (data => console.log(data))
      .catch(err => console.log(err))
       */

     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
     const data = await response.json()
     console.log("data", data)

    console.log("three")
    console.log("four")
    console.log("five")

}

//  loadData()




const loadData1 = async () => {
    console.log(1)
    console.log(2)
    try {
        const response = await fetch (" https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log('got data', data.length)

    }
    catch (err) {
        console.log(" error" )
    }
    console.log(3)
    console.log(4)
    console.log(5)
}

loadData1()