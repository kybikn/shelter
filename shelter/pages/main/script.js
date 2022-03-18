//  <div id="popup" class="modal-block">
// <a href="#close" class="close-all"></a>
// <div class="modal-content">
//     <h2 class="modal-title">Woody</h2>
// </div>
// </div>

// Получить модальный
var modal = document.getElementById("modal-content");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function () {
  modal.style.display = "block";
};

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function () {
  modal.style.display = "none";
};

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// ======================================
let btn = document.getElementById("our-friends-button");
btn.onclick = function () {
  modal.style.display = "block";
};
