// ----------------------hg------------------------
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const modal = document.querySelectorAll(".modal-block");
const cardAll = document.querySelectorAll(".card");
const shadow = document.querySelector(".shadow");
const body = document.querySelector("body");

function toggleMenu() {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  logo.classList.toggle("active");
  header.classList.toggle("active");
  shadow.classList.toggle("active");
  body.classList.toggle("active");
}

function closeMenu(event) {
  if (
    // event.target.classList.contains("header-nav") ||
    event.target.classList.contains("header-link") ||
    event.target.classList.contains("shadow")
  ) {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    logo.classList.remove("active");
    header.classList.remove("active");
    shadow.classList.remove("active");
    body.classList.remove("active");
  }
}

function toggleModal(event) {
  event.preventDefault();
  if (
    event.target.classList.contains("close") ||
    event.target.classList.contains("close-x") ||
    event.target.classList.contains("close-all")
  ) {
    let card = event.currentTarget.dataset.modal;
    let modal = document.querySelector(card);
    modal.classList.remove("active-modal");
    body.classList.remove("active");
  } else {
    let card = event.currentTarget.dataset.modal;
    let modal = document.querySelector(card);
    modal.classList.add("active-modal");
    body.classList.add("active");
  }
}

hamburger.addEventListener("click", toggleMenu);
nav.addEventListener("click", closeMenu);
shadow.addEventListener("click", closeMenu);
cardAll.forEach((element) => element.addEventListener("click", toggleModal));
