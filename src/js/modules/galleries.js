export const galleries = () => {
  const galleryRow = document.querySelector(".gallery-choice__row");
  const choiceOptions = document.querySelectorAll(".gallery-choice__option");
  const choiceImage = document.querySelector(".gallery-choice__image img");

  if (choiceOptions.length > 0) {
    choiceOptions.forEach((choiceOption) => {
      let imagePath = choiceOption.href;
      if (imagePath) {
        choiceOption.addEventListener("click", function (event) {
          choiceImage.src = imagePath;

          let activeOption = galleryRow.querySelector(".gallery-choice__option.active");
          if (activeOption != choiceOption) {
            activeOption.classList.remove("active");
            choiceOption.classList.add("active");
          }

          event.preventDefault();
        });
      }
    });
  }
};
