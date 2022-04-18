// ----------------------hg------------------------
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const ourFriends = document.querySelector(".our-friends");
const body = document.querySelector("body");

hamburger.addEventListener("click", toggleMenu);
nav.addEventListener("click", closeMenu);

function toggleMenu() {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  logo.classList.toggle("active");
  header.classList.toggle("active");
  ourFriends.classList.toggle("active");
  body.classList.toggle("active");
}

function closeMenu(event) {
  if (event.target.classList.contains("header-nav")) {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    logo.classList.remove("active");
    header.classList.remove("active");
    ourFriends.classList.remove("active");
    body.classList.remove("active");
  }
}
