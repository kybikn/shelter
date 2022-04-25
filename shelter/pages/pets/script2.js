import pets from "../main/pets.js";
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

// -------------------modal----------------------
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

// --------------------pagination----------------------

const firstPageButton = document.querySelector(".first-page-button");
const previousPageButton = document.querySelector(".previous-page-button");
const nextPageButton = document.querySelector(".next-page-button");
const lastPageButton = document.querySelector(".last-page-button");

// функция при изменении размера
let size = getSize();
function resizeListener(event) {
  let newSize = getSize();
  if (newSize !== size) {
    start();
    rewriteButtons;
    size = newSize;
  }
}

// переменные для использования в пагинации
let pagesStructure;
let pageNumber = 0;

// создает карточку животного на основе объекта с животным
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

function getSize() {
  if (window.innerWidth > 1279) return "large";
  else if (window.innerWidth >= 768 && window.innerWidth <= 1279)
    return "medium";
  if (window.innerWidth <= 767) return "small";
}

//перерисовывает страницу с животными - создает карточки для определенного номера страницы и вставляет в страницу
function rewritePage(pageNumber) {
  const paginatorContainer = document.querySelector(".our-friends-catalog");
  paginatorContainer.innerHTML = "";
  for (let cardId of pagesStructure[pageNumber]) {
    const pet = pets.find((pet) => pet.id === cardId);
    const card = createCard(pet);
    paginatorContainer.insertAdjacentHTML("beforeend", card);
  }
  document
    .querySelectorAll(".card")
    .forEach((element) => element.addEventListener("click", toggleModal));
}

// назначает правильные стили кнопкам пагинации
function rewriteButtons(pageNumber, maxPages) {
  document.querySelector(".one").innerHTML = pageNumber + 1;
  if (pageNumber === 0) {
    firstPageButton.classList.remove("switch");
    previousPageButton.classList.remove("switch");
    nextPageButton.classList.add("switch");
    lastPageButton.classList.add("switch");
  }
  if ((pageNumber > 0) & (pageNumber < maxPages)) {
    firstPageButton.classList.add("switch");
    previousPageButton.classList.add("switch");
    nextPageButton.classList.add("switch");
    lastPageButton.classList.add("switch");
  }
  if (pageNumber === maxPages) {
    firstPageButton.classList.add("switch");
    previousPageButton.classList.add("switch");
    nextPageButton.classList.remove("switch");
    lastPageButton.classList.remove("switch");
  }
}

// служебная функция для помощи функции generatePagesStructure, фактически создает массив определенного размера
function createRandomArray(perPage, pages, petsIdArray) {
  let result = [];
  let n = petsIdArray.length;
  for (let page = 0; page < pages; page++) {
    let pageArray = [];
    let available = [...petsIdArray];
    for (let item = 0; item < perPage; item++) {
      const random = Math.floor(Math.random() * available.length - 1);
      pageArray.push(available.splice(random, 1)[0]);
    }
    result.push(pageArray);
  }
  return result;
}

// список идентификаторов доступных животных на основе файла с данными животных
let petsIdArray = pets.map((element) => element.id);

// создает структуру страниц
const generatePagesStructure = () => {
  let size = getSize();
  if (size === "large") {
    pagesStructure = createRandomArray(8, 6, petsIdArray);
  } else if (size === "medium") {
    pagesStructure = createRandomArray(6, 8, petsIdArray);
  } else if (size === "small") {
    pagesStructure = createRandomArray(3, 16, petsIdArray);
  }
  return pagesStructure;
};

// функция исполняемая после загрузки страницы
function start() {
  generatePagesStructure();
  pageNumber = 0;
  let maxPages = pagesStructure.length - 1;
  rewritePage(pageNumber);
  rewriteButtons(pageNumber, maxPages);
}

function switchPage(event) {
  let maxPages = pagesStructure.length - 1;
  if (event.currentTarget.classList.contains("first-page-button")) {
    if (pageNumber > 0) {
      pageNumber = 0;
    }
  }
  if (event.currentTarget.classList.contains("previous-page-button")) {
    if (pageNumber > 0) {
      pageNumber -= 1;
    }
  }
  if (event.currentTarget.classList.contains("next-page-button")) {
    if (pageNumber <= maxPages - 1) {
      pageNumber += 1;
    }
  }

  if (event.currentTarget.classList.contains("last-page-button")) {
    if (pageNumber <= maxPages - 1) {
      pageNumber = maxPages;
    }
  }
  rewritePage(pageNumber);
  rewriteButtons(pageNumber, maxPages);
}

window.addEventListener("resize", resizeListener);
window.addEventListener("DOMContentLoaded", start());
firstPageButton.addEventListener("click", switchPage);
previousPageButton.addEventListener("click", switchPage);
nextPageButton.addEventListener("click", switchPage);
lastPageButton.addEventListener("click", switchPage);
