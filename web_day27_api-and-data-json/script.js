
const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        // promise of response
        .then((res) => res.json())
        // promise of data
        .then((data) => {
            console.log(data)
        })
}

const loadpost = () => {
    const url = "https://jsonplaceholder.typicode.com/users"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            displaypost(data);
        })
}
// loadpost();

const displaypost = (posts) => {

    //1. get the post container
    const postContainer = document.getElementById("post-container")
    postContainer.innerHTML = "";
    // console.log(postContainer)
    // forEach loop
    posts.forEach(posts => {
        // 2. create a li
        const li = document.createElement("li");
        li.classList.add("post-item")
        // 3. set innerText
        li.innerHTML = `
        <h2>${posts.name}</h2>
        <p>${posts.email}</p>
        <p>${posts.address.street}</p>
        <p>${posts.address.suite}</p>
        <p>${posts.address.geo.lat}
        <p>${posts.website}</p>
        <p>${posts.phone}</p>
        <p>${posts.company.name}</p>


        `

        // 4. append child
        postContainer.appendChild(li)

    })
}

