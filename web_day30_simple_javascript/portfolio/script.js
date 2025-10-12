// Optional: custom scroll effect or more interactivity
console.log("Interactive Portfolio loaded!");

// Example: highlight active nav link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if(scrollY >= sectionTop - 60) current = section.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("text-yellow-400");
    if(link.getAttribute("href") === `#${current}`){
      link.classList.add("text-yellow-400");
    }
  });
});
