var menuBlock = document.querySelector(".page-header__menu");
var btnToggle = document.querySelector(".page-header__mobile-menu-close");

menuBlock.classList.remove("page-header__menu--opened");
menuBlock.classList.add("page-header__menu--closed");

btnToggle.addEventListener("click", function(event) {
  event.preventDefault();
  if (menuBlock.classList.contains("page-header__menu--closed")) {
    menuBlock.classList.remove("page-header__menu--closed");
    menuBlock.classList.add("page-header__menu--opened");
  }
  else {
    menuBlock.classList.remove("page-header__menu--opened");
    menuBlock.classList.add("page-header__menu--closed");
  }
});
