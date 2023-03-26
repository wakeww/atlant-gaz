export const forms = () => {
  let formPopup = document.querySelector(".form-popup");
  if (formPopup) {
    formPopup.onsubmit = function () {
      window.location.href = "message.html";
    };
  }
};
