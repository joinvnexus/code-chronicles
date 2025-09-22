

// promise hell
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(user1 => {
    console.log("First fetch data:", user1);

    // Nested 2nd fetch
     fetch("https://jsonplaceholder.typicode.com/users/2")
      .then(res => res.json())
      .then(user2 => {
        console.log("Second fetch data:", user2);

        // Nested 3rd fetch
        fetch("https://jsonplaceholder.typicode.com/users/3")
          .then(res => res.json())
          .then(user3 => {
            console.log("Third fetch data:", user3);
          });
      });
  })
  .catch(err => console.log("Error:", err));
