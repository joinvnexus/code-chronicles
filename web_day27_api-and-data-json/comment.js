
let allComment = [];
const loadcomment = async () => {
    const url = "https://jsonplaceholder.typicode.com/comments"
    const res = await fetch(url)
    const data = await res.json();
    allComment = data;
    displayComment(data);

    /** fetch(url)
    .then(res => res.json())
    .then(data =>{
        // console.log(data)
        // allComment.push(...data);0
        // allComment.push(...data);
        allComment= data;
        displayComment(data);
    })*/

}


const displayComment = (Comments) => {
    const commentContainer = document.getElementById("commen-container");
    commentContainer.innerHTML = "";
    const limitedComment = Comments.slice(0, 10); // limited comment 
    // console.log(limitedComment)
    limitedComment.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment-item")
        commentDiv.innerHTML = `
        <h2>${comment.id}</h2>
        <h2>${comment.name}</h2>
        <p>${comment.email}</p>
        <p>${comment.body}</p>
        `
        commentContainer.appendChild(commentDiv);


    })

}

// serach function 
const searchComment = (e) => {
    const searchText = e.target.value;
    const matchedComment = allComment.filter(comment =>
        comment.name.toLowerCase().includes(searchText.toLowerCase()) ||
        comment.email.toLowerCase().includes(searchText.toLowerCase())
    );
    displayComment(matchedComment);
}

document.getElementById("search-input")
    .addEventListener("input", searchComment);
loadcomment();