const headerButton = document.querySelector(".header__button");
const headerNav = document.querySelector(".header__nav")

headerButton.addEventListener("click", function() {
  headerButton.classList.toggle("header__button--close");
  headerNav.classList.toggle("header__nav--close");
});

const callBackLink = document.querySelector(".about-me__button");
const callBack = document.querySelector(".callback");
const callBackClose = document.querySelector(".callback__close");
const nameIcon = document.querySelector(".callback__input--name");
const telIcon = document.querySelector(".callback__input--tel");
const callBackForm = document.querySelector(".callback__form");

callBackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    callBack.classList.add("callback--open");
});

callBackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    callBack.classList.remove("callback--open");
    telIcon.classList.remove("callback__input--error");
    nameIcon.classList.remove("callback__input--error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (callBack.classList.contains("callback--open")) {
        evt.preventDefault();
        callBack.classList.remove("callback--open");
        telIcon.classList.remove("callback__input--error");
        nameIcon.classList.remove("callback__input--error");
      }
    }
});

callBackForm.addEventListener("submit", function (evt) {
    if (!telIcon.value || !nameIcon.value) {
      evt.preventDefault();
      telIcon.classList.add("callback__input--error");
      nameIcon.classList.add("callback__input--error");
    }
});