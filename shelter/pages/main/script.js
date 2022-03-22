//  <div id="popup" class="modal-block">
// <a href="#close" class="close-all"></a>
// <div class="modal-content">
//     <h2 class="modal-title">Woody</h2>
// </div>
// </div>

// Получить модальный
// var modal = document.getElementById("modal-content");

// Получить кнопку, которая открывает модальный
// var btn = document.getElementById("card-button");

// Получить элемент <span>, который закрывает модальный
// var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// Когда пользователь нажимает на <span> (x), закройте модальное окно
// span.onclick = function () {
//   modal.style.display = "none";
// };

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
// =====================================

const btnPrev = document.querySelector(".previous");
const btnNext = document.querySelector(".next");
let modal = document.querySelector(".no");
let modal2 = document.querySelector(".yes");

// btnPrev.addEventListener("click", prevSlide);
// btnNext.addEventListener("click", nextSlide);

btnNext.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal.style.display = "none";
  }
};
//   modal2.style.display = "none";
