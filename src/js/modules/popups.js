export const popups = () => {
  "use script";
  const popupLinks = document.querySelectorAll(".popup-link");
  const body = document.querySelector("body");
  const lockPadding = document.querySelectorAll(".lock-padding");

  let unlock = true;

  const timeout = 500;

  if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
      const popupLink = popupLinks[i];
      popupLink.addEventListener("click", function (event) {
        const popupName = popupLink.getAttribute("href").replace("#", "");
        const currentPopup = document.getElementById(popupName);
        openPopup(currentPopup);

        event.preventDefault();
      });
    }
  }

  const popupCloseIcons = document.querySelectorAll(".close-popup");
  if (popupCloseIcons.length > 0) {
    for (let i = 0; i < popupCloseIcons.length; i++) {
      const popupCloseIcon = popupCloseIcons[i];
      popupCloseIcon.addEventListener("click", function (event) {
        closePopup(popupCloseIcon.closest(".popup"));
        event.preventDefault();
      });
    }
  }

  function openPopup(currentPopup) {
    if (currentPopup && unlock) {
      const activePopup = document.querySelector(".popup.open");
      if (activePopup) {
        closePopup(activePopup, false);
      } else {
        bodyLock();
      }
      currentPopup.classList.add("open");
      currentPopup.addEventListener("click", function (event) {
        if (!event.target.closest(".popup__content")) {
          closePopup(event.target.closest(".popup"));
        }
      });
    }
  }

  function closePopup(activePopup, doUnlock = true) {
    if (unlock && activePopup) {
      activePopup.classList.remove("open");
      if (doUnlock) {
        bodyUnlock();
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth;

    for (let i = 0; i < lockPadding.length; i++) {
      const element = lockPadding[i];
      element.style.paddingRight = lockPaddingValue + "px";
    }

    body.style.paddingRight = lockPaddingValue + "px";
    body.classList.add("lock");

    unlock = false;
    setTimeout(() => (unlock = true), timeout);
  }

  function bodyUnlock() {
    setTimeout(function () {
      for (let i = 0; i < lockPadding.length; i++) {
        const element = lockPadding[i];
        element.style.paddingRight = "0px";
      }
      body.style.paddingRight = "0px";
      body.classList.remove("lock");
    }, timeout);

    unlock = false;
    setTimeout(() => (unlock = true), timeout);
  }

  document.addEventListener("keydown", function (event) {
    if (event.which == "27") {
      closePopup(document.querySelector(".popup.open"));
    }
  });

  (function () {
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector;
    }
  })();

  (function () {
    if (!Element.prototype.closest) {
      Element.prototype.closest = function (s) {
        var el = this;

        do {
          if (el.matches(s)) return el;
          el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);

        return null;
      };
    }
  })();
};
