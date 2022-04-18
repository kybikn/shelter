// ----------------------hg------------------------
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const notOnly = document.querySelector(".not-only");
const body = document.querySelector("body");
// const scrollA = document.querySelector(".scroll");

hamburger.addEventListener("click", toggleMenu);
nav.addEventListener("click", closeMenu);
// scrollA.addEventListener("click", scroll);

function toggleMenu() {
  // container.classList.toggle("active");
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  logo.classList.toggle("active");
  header.classList.toggle("active");
  notOnly.classList.toggle("active");
  body.classList.toggle("active");
  // bodyScroll.classList.toggle("scroll");
}

function closeMenu(event) {
  if (
    event.target.classList.contains("header-nav") ||
    event.target.classList.contains("header-link")
  ) {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    logo.classList.remove("active");
    header.classList.remove("active");
    notOnly.classList.remove("active");
    body.classList.remove("active");
    // body.classList.toggle("target");
    // bodyScroll.classList.remove("scroll");
    // document.querySelector(".body").classList.remove("open");
  }
}

// function scroll(event) {
//   if (event.target.classList.contains("scroll")) {
//     hamburger.classList.remove("active");
//     notOnly.classList.remove("active");
//     nav.classList.remove("active");
//     logo.classList.remove("active");
//     header.classList.remove("active");
//     body.classList.remove("active");
//   }
// }
