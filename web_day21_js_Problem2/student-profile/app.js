// Helpers
const $ = (sel) => document.querySelector(sel);
const output = $("#output");

function print(msg, obj) {
  output.textContent = obj
    ? `${msg}\n` + JSON.stringify(obj, null, 2)
    : msg;
}

// Render profile data
function renderStudent(s) {
  $("#profile").innerHTML = `
    <p><b>Name:</b> ${s.name}</p>
    <p><b>ID:</b> ${s.id}</p>
    <p><b>Age:</b> ${s.age}</p>
    <p><b>Address:</b> ${s.address}</p>
    <p><b>Married:</b> ${s.isMarried ? "Yes" : "No"}</p>
  `;

  // Friends
  const friendsEl = $("#friends");
  friendsEl.innerHTML = "";
  s.friends.forEach(f => {
    const span = document.createElement("span");
    span.className = "pill";
    span.textContent = f;
    friendsEl.appendChild(span);
  });

  // Movies
  const moviesEl = $("#movies");
  moviesEl.innerHTML = "";
  s.movies.forEach(m => {
    const div = document.createElement("div");
    div.className = "movie";
    div.innerHTML = `
      <h3>${m.name}</h3>
      <p>Actor: ${m.actor}</p>
      <p>Actress: ${m.actress}</p>
    `;
    moviesEl.appendChild(div);
  });

  // Best Friend
  $("#bestFriend").innerHTML = `
    <p><b>Name:</b> ${s.bestFriend.name}</p>
    <p><b>Age:</b> ${s.bestFriend.details.age}</p>
    <p><b>Hobby:</b> ${s.bestFriend.details.hobby}</p>
  `;
}

// Event listeners for buttons
$("#btn-hobby").addEventListener("click", () => {
  print("Best Friend’s Hobby:", { hobby: student.bestFriend.details.hobby });
});

$("#btn-actress").addEventListener("click", () => {
  print("2nd Movie’s Actress:", { actress: student.movies[1].actress });
});

$("#btn-firstMovie").addEventListener("click", () => {
  print("First Movie Info:", student.movies[0]);
});

$("#btn-friendCount").addEventListener("click", () => {
  print(`Total friends: ${student.friends.length}`);
});

$("#btn-summary").addEventListener("click", () => {
  const summary = {
    name: student.name,
    age: student.age,
    friends: student.friends,
    bestFriend: student.bestFriend.name,
    movies: student.movies.map(m => m.name)
  };
  print("Profile Summary:", summary);
});

// Initialize render
renderStudent(student);
