// ----------------------hg------------------------
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
const logo = document.querySelector(".logo");

hamburger.addEventListener("click", toggleMenu);
nav.addEventListener("click", closeMenu);
// nav1.addEventListener("click", closeMenu);
// logo.addEventListener("click", closeMenu);

// function start() {
//   logo.classList.add("change");
//   toggleMenu();
// }

function toggleMenu() {
  logo.classList.toggle("active");
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
}

function closeMenu(event) {
  if (event.target.classList.contains("header-nav")) {
    nav.classList.remove("active");
    logo.classList.remove("active");
    hamburger.classList.remove("active");
  }
}
