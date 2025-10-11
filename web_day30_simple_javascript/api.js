const postContainer = document.getElementById("posts");
const loadBtn = document.getElementById("loadBtn");

const displayData = (posts) => {
  postContainer.innerHTML = "";
  posts.slice(0, 5).forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `;
    postContainer.appendChild(postDiv);
  });
};

// fetch data

const fetchposts = async () => {
  postContainer.innerHTML = "<p>⏳ Fetching posts... please wait 3 seconds</p>";
  setTimeout(async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      displayData(data);
      console.log(data);
    } catch (error) {
      postContainer.innerHTML = `<p style="color:red;">❌ Failed to fetch data: ${error}</p>`;

      console.log(error);
    }
  }, 3000);
};

//button click
loadBtn.addEventListener("click", fetchposts);

//
