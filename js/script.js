// первый слайдер //
var promoSliderList = document.querySelector(".slider-list");

var removePromoSliderActive = function() {
	document.querySelector(".slider-control-button-current").classList.remove("slider-control-button-current");
	document.querySelector(".slide-current").classList.remove("slide-current");
}

document.querySelectorAll(".slider-control-button").forEach(function(button, i) {
	button.addEventListener("click", function(evt) {
		evt.preventDefault();

		removePromoSliderActive();
		button.classList.add("slider-control-button-current");
		promoSliderList.children[i].classList.add("slide-current");
	})
});

// второй слайдер //

var servicesSliderList = document.querySelector(".services-description");
var servicesSliderControl = document.querySelector(".services-buttons");

var removeServicesSliderActive = function() {
	servicesSliderControl.querySelector(".bottom-slider-button-active").classList.remove("bottom-slider-button-active");
	document.querySelector(".slide-bottom-current").classList.remove("slide-bottom-current");
}

servicesSliderControl.querySelectorAll(".bottom-slider-button").forEach(function(button, i) {
	button.addEventListener("click", function(evt) {
		evt.preventDefault();

		removeServicesSliderActive();
		button.classList.add("bottom-slider-button-active");
		servicesSliderList.children[i].classList.add("slide-bottom-current");
	})
});

// Форма письма //

var letterLink = document.querySelector(".letter-link");
var letterModal = document.querySelector(".modal-write-us");
var letterClose = letterModal.querySelector(".modal-close");
var letterForm = letterModal.querySelector(".modal-letter-form");
var userName = letterModal.querySelector(".modal-user-name");
var userEmail = letterModal.querySelector(".modal-user-email");

var isStorageSupport = true;
var storage = "";
var ESC_KEYCODE = 27;

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

letterLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	letterModal.classList.add("modal-show");
	if (storage) {
		userName.value = storage;
		userEmail.focus();
	} else {
		userName.focus();
	}
});

letterClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	letterModal.classList.remove("modal-show");
	letterModal.classList.remove("modal-error");
});

letterForm.addEventListener("submit", function(evt) {
	if (!userName.value || !userEmail.value) {
		evt.preventDefault();
		letterModal.classList.remove("modal-error");
		letterModal.offsetWidth = letterModal.offsetWidth;
		letterModal.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", userName.value);
		}
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (letterModal.classList.contains("modal-show")) {
			evt.preventDefault();
			letterModal.classList.remove("modal-show");
			letterModal.classList.remove("modal-error");
		}
	}
});

// Форма Карты //
var mapOpen = document.querySelector(".contacts-map-img");
var mapModal = document.querySelector(".modal.modal-map");
var mapClose = mapModal.querySelector(".modal-close");

mapOpen.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapModal.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (mapModal.classList.contains("modal-show")) {
			evt.preventDefault();
			mapModal.classList.remove("modal-show");
		}
	}
});