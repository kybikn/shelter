import pets from "./pets.js";

// ----------------------hg------------------------
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const modal = document.querySelectorAll(".modal-block");
const cardAll = document.querySelectorAll(".card");
const shadow = document.querySelector(".shadow");
const body = document.querySelector("body");
const carousel = document.querySelector(".carousel");
const cardsLeft = document.querySelector("#cards-left");
const cardsRight = document.querySelector("#cards-right");
const cardsActive = document.querySelector("#cards-active");
const petsArrowLeft = document.querySelector(".previous");
const petsArrowRight = document.querySelector(".next");

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
    event.target.classList.contains("header-nav") ||
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
  } else {
    let card = event.currentTarget.dataset.modal;
    let modal = document.querySelector(card);
    modal.classList.add("active-modal");
  }
}

// ==================================
// Carousel functions
function createCard(pet) {
  let card = `<div class="card card1">
  <img class="card-image" src="../../assets/images/${pet.img}" alt="${pet.name}">
  <h4 class="card-name">${pet.name}</h4>
  <button class="card-button card-link">Learn more</button>
  </div>`;
  return card;
}

function moveLeft() {
  carousel.classList.add("transition-left");
  petsArrowLeft.removeEventListener("click", moveLeft);
  petsArrowRight.removeEventListener("click", moveRight);
}

function moveRight() {
  carousel.classList.add("transition-right");
  petsArrowLeft.removeEventListener("click", moveLeft);
  petsArrowRight.removeEventListener("click", moveRight);
}

function animationEnd(animationEvent) {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    carousel.classList.remove("transition-left");
    changedItem = cardsLeft;
    cardsActive.innerHTML = cardsLeft.innerHTML;
  } else {
    carousel.classList.remove("transition-right");
    changedItem = cardsRight;
    cardsActive.innerHTML = cardsRight.innerHTML;
  }

  changedItem.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    let pet_number = Math.ceil(Math.random() * 8);
    let pet = pets.filter((element) => element.id === pet_number.toString())[0];
    let activeCardsList = cardsActive.querySelectorAll(".card-image");
    const card = createCard(pet);
    changedItem.insertAdjacentHTML("beforeend", card);
  }

  petsArrowLeft.addEventListener("click", moveLeft);
  petsArrowRight.addEventListener("click", moveRight);
}

// ========================

hamburger.addEventListener("click", toggleMenu);
nav.addEventListener("click", closeMenu);
shadow.addEventListener("click", closeMenu);
cardAll.forEach((element) => element.addEventListener("click", toggleModal));
petsArrowLeft.addEventListener("click", moveLeft);
petsArrowRight.addEventListener("click", moveRight);
carousel.addEventListener("animationend", animationEnd);
