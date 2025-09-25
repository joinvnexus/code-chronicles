let students = [];
let pushClass = [];

// -------- Save & Load from localStorage --------
const saveData = () => {
  localStorage.setItem("students", JSON.stringify(students));
  localStorage.setItem("pushClass", JSON.stringify(pushClass));
};

const loadData = () => {
  const studentsData = localStorage.getItem("students");
  const pushClassData = localStorage.getItem("pushClass");

  if (studentsData) {
    students = JSON.parse(studentsData);
  }
  if (pushClassData) {
    pushClass = JSON.parse(pushClassData);
  }
};

// -------- Add Student --------
const handleButtonClick = () => {
  const studentNameInput = document.getElementById("student-name");
  const studentAgeInput = document.getElementById("student-age");

  const student = {
    id: Date.now(),
    name: studentNameInput.value,
    age: parseInt(studentAgeInput.value),
  };

  students.push(student);
  saveData(); // save in localStorage

  studentNameInput.value = "";
  studentAgeInput.value = "";

  displayStudents();
};

const addStudent = document.getElementById("add-student");
addStudent.addEventListener("click", handleButtonClick);

// -------- Display Students --------
const displayStudents = () => {
  const ul = document.getElementById("student-list");
  ul.innerHTML = ""; // clear old list

  students.forEach((student) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <p>${student.name} : ${student.age}</p>
      <button class="add-to-cart">Add to Cart</button>
    `;

    ul.appendChild(li);

    const pushClassButton = li.querySelector(".add-to-cart");
    pushClassButton.addEventListener("click", () => {
      addToCart(student.id);
    });
  });
};

// -------- Add to Cart --------
const addToCart = (studentId) => {
  const student = students.find((s) => s.id === studentId);

  if (student && !pushClass.find((s) => s.id === studentId)) {
    pushClass.push(student);
    saveData(); // save in localStorage
    displayCart();
  }
};

// -------- Display Cart --------
const displayCart = () => {
  const ul = document.getElementById("cart-list");
  ul.innerHTML = "";

  let total = 0;

  pushClass.forEach((student) => {
    total += student.age;
    const li = document.createElement("li");
    li.innerHTML = `<p>${student.name} : ${student.age}</p>`;
    ul.appendChild(li);
  });

  //document.getElementById("total-price").innerText = `Total Age: ${total}`;
};

// -------- On Page Load --------
document.addEventListener("DOMContentLoaded", () => {
  loadData(); // load from localStorage
  displayStudents();
  displayCart();
});
