const requestLink = document.querySelector(".button-location");
const requestPopup = document.querySelector(".modal-request");
const requestClose = requestPopup.querySelector(".modal-close");

requestLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  requestPopup.classList.add("modal-show");
});

requestClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  requestPopup.classList.remove("modal-show");
});
