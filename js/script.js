/* Task 1
Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Task 2

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

//Task (1 - 2)
document.querySelector(".promo__adv").innerHTML = "";
document.querySelector(".promo__genre").textContent = "Драма";
document.querySelector(".promo__bg").style.background = "url('./img/bg.jpg')";

function drawList() {
  document.querySelector(".promo__interactive-list").innerHTML = "";
  movieDB.movies.sort().forEach((movie, i) => {
    document.querySelector(".promo__interactive-list").innerHTML += `
      <li class="promo__interactive-item">
          ${++i}: ${movie.length > 21 ? movie.slice(0, 21) + "..." : movie}
          <div class="delete"></div>
      </li>`;
  });
  deleteMovie();
}
drawList();
//Task 2
const buttonEl = document.querySelector(".add button");
const checkBoxEl = document.querySelector('.add input[type="checkbox"]');
const inputEl = document.querySelector(".adding__input");

buttonEl.addEventListener("click", function addFilm(event) {
  let inputValue = inputEl.value;
  movieDB.movies.unshift(`${inputValue}`);
  checkBoxEl.checked ? console.log("Добавляем любимый фильм") : null;
  event.preventDefault();
  drawList();
});

function deleteMovie() {
  let deleteEl = document.querySelectorAll(".delete");
  deleteEl.forEach((item) => {
    item.addEventListener("click", function (event) {
      let movieName = event.target.previousSibling.textContent.trim().slice(3);
      let index = movieDB.movies.indexOf(movieName);
      movieDB.movies.splice(index, 1);
      drawList();
    });
  });
}
