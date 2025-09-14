// =========================
// Option 1: Inline Functions
// =========================

// Change background to Yellow
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

// Change background to Red
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// =========================
// Option 2: DOM Property Method
// =========================

// Change background to Blue using .onclick
const btnMakeBlue = document.getElementById("btn");
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

// Change background to Green (separate function)
const btnMakeGreen = document.getElementById("btn-green");
btnMakeGreen.onclick = makeGreen;

/**
 * Sets the background color to green
 */
function makeGreen() {
  document.body.style.backgroundColor = "green";
}

// =========================
// Option 3: addEventListener (Best Practice)
// =========================

// Change background to Purple
document
  .getElementById("btn-make-purple")
  .addEventListener("click", function makePurple() {
    document.body.style.backgroundColor = "purple";
  });

// Change background to Pink (anonymous function)
document
  .getElementById("btn-make-pink")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "pink";
  });

// Dark Mode
const darkColor = document.getElementById("btn-dark");
function makeDark() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}
darkColor.addEventListener("click", makeDark);

// Light Mode (Arrow function)
const btnMakeLight = document.getElementById("btn-light");
btnMakeLight.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightblue";
  document.body.style.color = "black";
});

// =========================
// Example (commented out): Event Delegation
// =========================
/*
const productList = document.getElementById("product-list");
productList.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === "li") {
    alert(`You clicked on ${event.target.textContent}`);
  }
});
*/

// Another example with addEventListener
/*
const btn2 = document.getElementById("btn2");
function handleClick() {
  alert("Clicked!");
}
btn2.addEventListener("click", handleClick);
*/
