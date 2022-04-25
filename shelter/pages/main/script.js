import pets from "./pets.js";

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const modal = document.querySelectorAll(".modal-block");
const cardsAll = document.querySelectorAll(".card");
const shadow = document.querySelector(".shadow");
const body = document.querySelector("body");
const carousel = document.querySelector(".carousel");
const petsArrowLeft = document.querySelector(".previous");
const petsArrowRight = document.querySelector(".next");
const petsArrowLeftSmall = document.querySelector(".previous-320");
const petsArrowRightSmall = document.querySelector(".next-320");
const cardsLeft = document.querySelector("#cards-left");
const cardsRight = document.querySelector("#cards-right");
const cardsActive = document.querySelector("#cards-active");

// ----------------------hg------------------------

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

// ----------------------modal------------------------
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

// ----------------------carousel------------------------

function createCard(pet) {
  let card0 = `<div class="card card${pet.id}" data-pet-id="${pet.id}">
  <img class="card-image" src="../../assets/images/${pet.img}" alt="${pet.name}">
  <h4 class="card-name">${pet.name}</h4>
  <button class="card-button card-link">Learn more</button>
  </div>`;
  let card = `<div class="card card${pet.id}" data-modal="#openModal${pet.id}" data-pet-id="${pet.id}">
<img src="../../assets/images/${pet.img}" class="card-image"
    alt="${pet.name}">
<h4 class="card-name">${pet.name}</h4>
<button class="card-button card-link">Learn
    more</button>
<div id="openModal${pet.id}" class="modal-block">
    <a href="" class="close-all"></a>
    <div class="modal-content">
        <form>
            <button class="close" title="Закрыть"><img
                    src="../../assets/icons/modal-close.svg" class="close-x"
                    alt=""></button>
        </form>
        <img src="../../assets/images/${pet.img}" class="modal-image"
            alt="${pet.name}">
        <div class="modal-box">
            <h2 class="modal-title">${pet.name}</h2>
            <p class="modal-subtitle">${pet.breed}</p>
            <p class="modal-text">${pet.description}
            </p>
            <ul class="modal-ul">
                <li class="modal-li"><span class="modal-span1">Age:</span>
                    <span class="modal-span2"> ${pet.age}</span>
                </li>
                <li class="modal-li"><span
                        class="modal-span1">Inoculations:</span>
                    <span class="modal-span2"> ${pet.inoculatuins}</span>
                </li>
                <li class="modal-li"><span class="modal-span1">Diseases:</span>
                    <span class="modal-span2"> ${pet.diseases}</span>
                </li>
                <li class="modal-li"><span class="modal-span1">Parasites:</span>
                    <span class="modal-span2"> ${pet.parasites}</span>
                </li>
            </ul>
        </div>
    </div>
</div>
</div>`;
  return card;
}

function moveLeft() {
  carousel.classList.add("transition-left");
  petsArrowLeft.removeEventListener("click", moveLeft);
  petsArrowRight.removeEventListener("click", moveRight);
  petsArrowLeftSmall.removeEventListener("click", moveLeft);
  petsArrowRightSmall.removeEventListener("click", moveRight);
}

function moveRight() {
  carousel.classList.add("transition-right");
  petsArrowLeft.removeEventListener("click", moveLeft);
  petsArrowRight.removeEventListener("click", moveRight);
  petsArrowLeftSmall.removeEventListener("click", moveLeft);
  petsArrowRightSmall.removeEventListener("click", moveRight);
}

function start() {
  let blocks = ["cards-left", "cards-active", "cards-right"];
  let petsIdArray = pets.map((element) => element.id);
  for (let block of blocks) {
    let available = [...petsIdArray];
    for (let item = 0; item < 3; item++) {
      const random = Math.floor(Math.random() * available.length - 1);
      let petId = available.splice(random, 1)[0];
      let pet = pets.filter((element) => element.id === petId)[0];
      const card = createCard(pet);
      const bl = document.querySelector(`#${block}`);
      bl.insertAdjacentHTML("beforeend", card);
    }
  }
  document
    .querySelectorAll(".card")
    .forEach((element) => element.addEventListener("click", toggleModal));
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

  let currentCardsArray = Array.from(cardsActive.querySelectorAll(".card")).map(
    (elem) => elem.dataset.petId
  );
  let newCardsArray = [];

  for (let i = 0; i < 3; i++) {
    //Генерируем случайный номер животного
    let newPet;
    while (!newPet) {
      let randomPet = Math.ceil(Math.random() * 8).toString();
      if (
        currentCardsArray.includes(randomPet) ||
        newCardsArray.includes(randomPet)
      ) {
        continue;
      } else {
        newCardsArray.push(randomPet);
        newPet = randomPet;
      }
    }

    // Берем данные животного из файла с животными по id
    let pet = pets.filter((element) => element.id === newPet)[0];
    const card = createCard(pet);
    changedItem.insertAdjacentHTML("beforeend", card);
  }

  petsArrowLeft.addEventListener("click", moveLeft);
  petsArrowRight.addEventListener("click", moveRight);
  petsArrowLeftSmall.addEventListener("click", moveLeft);
  petsArrowRightSmall.addEventListener("click", moveRight);
  document
    .querySelectorAll(".card")
    .forEach((element) => element.addEventListener("click", toggleModal));
}

// ----------------------------------------------

hamburger.addEventListener("click", toggleMenu);
nav.addEventListener("click", closeMenu);
shadow.addEventListener("click", closeMenu);
cardsAll.forEach((element) => element.addEventListener("click", toggleModal));
petsArrowLeft.addEventListener("click", moveLeft);
petsArrowRight.addEventListener("click", moveRight);
petsArrowLeftSmall.addEventListener("click", moveLeft);
petsArrowRightSmall.addEventListener("click", moveRight);
carousel.addEventListener("animationend", animationEnd);
window.addEventListener("DOMContentLoaded", start());
