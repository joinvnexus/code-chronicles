const users = [
  { name: "Rafi", age: 17 },
  { name: "Projoy", age: 22 },
  { name: "Nadia", age: 25 },
  { name: "Ayesha", age: 19 },
  { name: "Samin", age: 15 },
];

const transformBtn = document.getElementById("transformBtn");
const output = document.getElementById("output");

// Function to display result
function displayResult(data) {
  const totalAge = data.reduce((sum, user) => sum + user.age, 0);
  const [firstUser] = data;

  const result = `
✅ Adult Users: ${data.length}
👤 First Adult: ${firstUser ? firstUser.name : "N/A"}
📊 Total Age: ${totalAge}

🔹 Transformed Data:
${JSON.stringify(data, null, 2)}
`;

  output.textContent = result;
}

// Load data from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const saved = JSON.parse(localStorage.getItem("transformedUsers"));
  if (saved && saved.length > 0) {
    displayResult(saved);
  } else {
    output.textContent = "Waiting for action...";
  }
});

// Button click event
transformBtn.addEventListener("click", () => {
  // Filter adults
  const adults = users.filter(user => user.age >= 18);

  // Uppercase names
  const transformed = adults.map(user => ({
    ...user,
    name: user.name.toUpperCase(),
  }));

  // Save to localStorage
  localStorage.setItem("transformedUsers", JSON.stringify(transformed));

  // Display
  displayResult(transformed);
});
