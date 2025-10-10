const element = document.querySelector(".msg");
console.log(element.textContent);
console.log(element.innerText);

const demo = document.getElementById("demo");

// innerText – শুধু লেখা পরিবর্তন
demo.innerText = "Updated using innerText";

// innerHTML – HTML tag সহ পরিবর্তন
demo.innerHTML = "<b>Updated using innerHTML</b>";

// textContent – hidden  raw টেক্সট সহ পরিবর্তন
demo.textContent = "Updated using textContent";

const input = document.getElementById("nameInput");
const output = document.getElementById("output");

input.addEventListener("input", () => {
    output.innerText = `Hello, ${input.value}!`;
})

const form = document.getElementById("myForm");
const show = document.getElementById("show");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = document.getElementById("userName").value;
    show.innerText = `Hello, ${userName}!`;
})


const title = document.querySelector("#title");
const colorInput = document.querySelector("#colorInput");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const color = colorInput.value;
  title.style.color = color;
  title.textContent = `Text color changed to ${color}!`;
});