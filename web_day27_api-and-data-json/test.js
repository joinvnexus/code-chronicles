



const data = async() => {

    const res= await fetch("https://jsonplaceholder.typicode.com/users/1")

    console.log("hello")
    const data = await res.json();
    console.log(data)
    console.log(true)
}
data()