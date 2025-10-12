const user = [
  { name: "Rafi", age: 17 },
  { name: "Projoy", age: 22 },
  { name: "Nadia", age: 25 },
  { name: "Ayesha", age: 19 },
  { name: "Samin", age: 15 },
];

const transformBtn = document.getElementById("transformBtn");

transformBtn.addEventListener("click", () => {
  // Step 1: Filter users above 18
  const adults = user.filter((user) => {
    return user.age >= 18 ;
  });

  // Step 2: Convert all adults names to uppercase using map()

  const upperdCaseNames = adults.map((adult) => ({
    ...adult,
    name: adult.name.toUpperCase(),
  }));

  // Step 3: Calculate total age using reduce()

  const totalAge = upperdCaseNames.reduce((sum, current) => {
    return sum + current.age;
  }, 0);
console.log(totalAge);
  //  // Step 4: Destructure one user
  const [firstUser] = upperdCaseNames;

  const result = `
  ✅ Adult Users: ${upperdCaseNames.length}
👤 First Adult: ${firstUser.name}
📊 Total Age: ${totalAge}

🔹 Transformed Data:
${JSON.stringify(upperdCaseNames, null, 2)}
`;

  document.getElementById("output").textContent = result;
});
