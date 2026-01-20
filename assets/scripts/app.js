document.querySelector(".nav__btn").addEventListener("click", openMenu);

function openMenu() {
  document.querySelector(".nav__list").classList.toggle("nav--active")
}