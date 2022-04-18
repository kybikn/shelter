// ----------------------hg------------------------
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const notOnly = document.querySelector(".not-only");
// const container = document.querySelector(".container");

hamburger.addEventListener("click", toggleMenu);
nav.addEventListener("click", closeMenu);
// nav1.addEventListener("click", closeMenu);
// logo.addEventListener("click", closeMenu);

// function start() {
//   logo.classList.add("change");
//   toggleMenu();
// }

function toggleMenu() {
  // container.classList.toggle("active");
  header.classList.toggle("active");
  notOnly.classList.toggle("active");
  logo.classList.toggle("active");
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
}

function closeMenu(event) {
  if (event.target.classList.contains("header-nav")) {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
  }
}
