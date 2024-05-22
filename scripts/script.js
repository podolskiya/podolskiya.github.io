// const burger = document.querySelector(".header__burger");
// const menu = document.querySelector(".header__menu");
// const menuLinks = document.querySelectorAll(".header__link");

// burger.addEventListener("click", () => {
//   menu.classList.toggle("active");
//   burger.classList.toggle("active");
// });

// menuLinks.forEach((link) =>
//   link.addEventListener("click", () => {
//     menu.classList.remove("active");
//     burger.classList.remove("active");
//   })
// );

// loadHeader.js
document.addEventListener("DOMContentLoaded", function() {
  fetch("/elements/header.html")
      .then(response => response.text())
      .then(data => {
          document.querySelector("header").innerHTML = data;
          initializeBurgerMenu();
      });
});

function initializeBurgerMenu() {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu");
  const menuLinks = document.querySelectorAll(".header__list-item a");

  burger.addEventListener("click", () => {
      menu.classList.toggle("active");
      burger.classList.toggle("active");
  });

  menuLinks.forEach((link) =>
      link.addEventListener("click", () => {
          menu.classList.remove("active");
          burger.classList.remove("active");
      })
  );
}
