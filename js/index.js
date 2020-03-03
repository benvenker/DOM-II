// Your code goes here
const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseover", e => {
  logoHeading.style.color = "lightgray";
});

const body = document.querySelector("body");
body.addEventListener("keydown", e => {
  if (e.keyCode === 72) {
    alert("How can we help you?");
  }
});

window.addEventListener("beforeprint", () => {
  alert("are you sure you want to print this page?");
});

window.addEventListener("afterprint", () => {
  body.style.backgroundColor = "blue";
});

window.addEventListener("resize", () => {
  body.style.backgroundColor = "lavender";
});

const hero = document.querySelector(".intro img");
hero.addEventListener("dblclick", () => {
  hero.style.border = "2px solid blue";
});

hero.addEventListener("mouseleave", () => {
  hero.style.border = "none";
});

const letsGoImg = document.querySelector(".img-content img");
letsGoImg.addEventListener("load", () => {
  letsGoImg.classList.add("change");
});

const adventureImg = document.querySelector(".inverse-content img");
adventureImg.addEventListener("mousedown", () => {
  adventureImg.classList.add("slide");
});

const destination = document.querySelectorAll(".destination h4");
destination.forEach(dest => {
  dest.addEventListener("click", () => {
    console.log("clicked");
    dest.style.color = "red";
  });
});
