var letterLink = document.querySelector(".letter-link");
var letterModal = document.querySelector(".modal-write-us");
var letterClose = letterModal.querySelector(".modal-close");
var letterForm = letterModal.querySelector(".modal-letter-form");
var letterUsername = letterModal.querySelector(".modal-user-name");
var letterUseremail = letterModal.querySelector(".modal-user-email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

letterLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    letterModal.classList.add("modal-show");

    if (storage) {
        letterUsername.value = storage;
        letterUseremail.focus();
    } else {
        letterUsername.focus();
    }
    
});

letterClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    letterModal.classList.remove("modal-show");
    letterModal.classList.remove("modal-error");
});

letterForm.addEventListener("submit", function (evt) {
    if (!letterUsername.value || !letterUseremail.value) {
        evt.preventDefault();
        letterModal.classList.add("modal-error");
        letterModal.offsetWidth = letterModal.offsetWidth;
        letterModal.classList.add("modal-error");
    } else {
        localStorage.setItem("name", letterUsername.value);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (letterModal.classList.contains("modal-show")) {
        evt.preventDefault();
        letterModal.classList.remove("modal-show");
        letterModal.classList.remove("modal-error");
      }
    }
});