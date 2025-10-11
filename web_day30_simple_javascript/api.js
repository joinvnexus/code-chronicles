  const postContainer = document.getElementById("posts");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    let posts = [];       // All posts from API
    let visibleCount = 0; // How many posts shown

    // 🔹 Fetch posts once
    const fetchPosts = async () => {
      postContainer.innerHTML = "<p>⏳ Loading posts...</p>";
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        posts = await res.json();
        visibleCount = 0;
        postContainer.innerHTML = "";
        showPosts(); // first 6 posts
      } catch (error) {
        postContainer.innerHTML = `<p style="color:red;">❌ Failed to load posts</p>`;
        console.error(error);
      }
    };

    // 🔹 Display posts dynamically
    const showPosts = () => {
      const slice = posts.slice(visibleCount, visibleCount + 6);
      slice.forEach((post) => {
        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
      });

      visibleCount += 6;

      // Hide Load More if no posts left
      if (visibleCount >= posts.length) {
        loadMoreBtn.style.display = "none";
      }
    };

    // 🔹 Load more on button click
    loadMoreBtn.addEventListener("click", showPosts);

    // 🔹 Load initial data
    fetchPosts();