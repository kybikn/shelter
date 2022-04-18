// ----------------------hg------------------------
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const ourFriends = document.querySelector(".our-friends");
const modal = document.querySelectorAll(".modal-block");
const cardAll = document.querySelectorAll(".card");
const shadow = document.querySelector(".shadow");
// const body = document.querySelector("body");
// const cardButton = document.querySelectorAll(".card-button");

function toggleMenu() {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  logo.classList.toggle("active");
  header.classList.toggle("active");
  ourFriends.classList.toggle("active");
  shadow.classList.toggle("active");
  // body.classList.toggle("active");
}

function closeMenu(event) {
  if (
    event.target.classList.contains("header-nav") ||
    event.target.classList.contains("header-link") ||
    event.target.classList.contains("shadow")
  ) {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    logo.classList.remove("active");
    header.classList.remove("active");
    ourFriends.classList.remove("active");
    shadow.classList.remove("active");
    // body.classList.remove("active");
  }
}

function openModal(event) {
  let card = event.currentTarget.dataset.modal;
  if (modal) {
    location.href = card;
  }
}

hamburger.addEventListener("click", toggleMenu);
nav.addEventListener("click", closeMenu);
shadow.addEventListener("click", closeMenu);
cardAll.forEach((element) => element.addEventListener("click", openModal));
// cardButton.forEach((element) => element.addEventListener("click", open));
// cardAll.forEach((element) => element.addEventListener("click", open));
// modal.forEach((element) => element.addEventListener("click", close));

// function open(event) {
//   body.classList.add("active");
// }

// function close(event) {
//   if (
//     event.target.classList.contains("close-all") ||
//     event.target.classList.contains("close-x") ||
//     event.target.classList.contains("close")
//   ) {
//     body.classList.remove("active");
//   }
// }
