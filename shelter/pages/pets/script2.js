const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
// const logo = document.querySelector(".logo-title");

hamburger.addEventListener("click", toggleMenu);
nav.addEventListener("click", closeMenu);
// logo.addEventListener("click", closeMenu);

function toggleMenu() {
  // logo.classList.toggle("navbar");
  nav.classList.toggle("navbar");
  hamburger.classList.toggle("change");
}

function closeMenu(event) {
  if (event.target.classList.contains("header-nav")) {
    nav.classList.remove("navbar");
    // logo.classList.remove("navbar");
    hamburger.classList.remove("change");
  }
}
