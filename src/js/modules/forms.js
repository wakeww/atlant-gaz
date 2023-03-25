export const forms = () => {
  let formPopup = document.querySelector(".form-popup");

  if (formPopup) {
    formPopup.addEventListener("submit", function () {
      window.location.href = "message.html";
      console.log("123");
    });
  }
};
