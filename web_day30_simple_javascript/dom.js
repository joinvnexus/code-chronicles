
document.getElementById("demo").innerText = "Welcome to JavaScript DOM!";

document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.fontSize = "30px";


const heading = document.getElementById("heading");
heading.innerText = "New Heading Updated by JS!";

const text = document.getElementById("text");
text.style.color = "green";
text.style.fontSize = "40px";
text.style.fontWeight = "bold";

const container = document.getElementById("container");

const newItem = document.createElement("p");
newItem.innerText = "I am added dynamically!";

container.appendChild(newItem);


const removeMe = document.getElementById("removeMe");
removeMe.remove();



const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const msg = document.getElementById("msg");
    msg.innerText = "You clicked the button!";
    msg.style.color = "green";
});


let count = 0;
const display = document.getElementById("count");

document.getElementById("inc").addEventListener("click", () => {
  count++;
  display.innerText = count;
});

document.getElementById("dec").addEventListener("click", () => {
  count--;
  display.innerText = count;
  if (count < 0) {
    display.style.color = "red";
    display.innerText = 0;
  } else {
    display.style.color = "black";
  }

});