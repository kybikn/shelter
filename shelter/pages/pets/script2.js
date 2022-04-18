// ----------------------hg------------------------
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const ourFriends = document.querySelector(".our-friends");

hamburger.addEventListener("click", toggleMenu);
nav.addEventListener("click", closeMenu);

function toggleMenu() {
  ourFriends.classList.toggle("active");
  header.classList.toggle("active");
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
