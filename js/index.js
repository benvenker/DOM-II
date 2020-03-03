// Your code goes here
const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseover", e => {
  logoHeading.style.color = "lightgray";
});

const body = document.querySelector("body");
body.addEventListener("keydown", () => {
  alert("How can we help you?");
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
