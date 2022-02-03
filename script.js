window.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector(".form-main");
	const formInputs = document.querySelectorAll(".form-inputs");
	const formInputsArr = Array.from(formInputs);

	const sendFormBtn = document.getElementById("send-form-button");

	let hideModalTimeout;

	// Form
	sendFormBtn.addEventListener("click", (element) => {
		element.preventDefault();
		const requiredInputs = formInputsArr.some((element) => element.value === "");

		if (requiredInputs) {
			formInputsArr.forEach((element) => {
				if (element.value === "") {
					element.classList.add("error");
					element.classList.remove("no-border");
				}

				setTimeout(() => {
					element.classList.add("no-border");
					element.classList.remove("error");
				}, 3000);
			});
		} else {
			showModal();
			hideModalTimeout = setTimeout(() => {
				closeModal();
			}, 5000);
		}
	});

	// Modal
	const modalWindow = document.querySelector(".modal-window"),
		modalWindowBtn = document.querySelector(".modal-window-main-btn");

	modalWindowBtn.addEventListener("click", (element) => {
		element.preventDefault();
		closeModal();
	});

	document.addEventListener("keydown", (event) => {
		if (event.code === "Escape" && modalWindow.classList.contains("show")) {
			closeModal();
		}
	});

	function showModal() {
		modalWindow.classList.add("show");
		modalWindow.classList.remove("hide");

		document.body.style.overflow = "hidden";
		form.reset();
	}

	function closeModal() {
		modalWindow.classList.add("hide");
		modalWindow.classList.remove("show");

		clearTimeout(hideModalTimeout);
		document.body.style.overflow = "";
	}

	// Language switcher
	const icon = document.querySelector(".language-switcher-icon"),
		languageBlock = document.querySelector(".language-switcher-block"),
		languages = languageBlock.querySelectorAll(".language-switcher-block-element");

	icon.addEventListener("click", () => {
		languageBlock.classList.toggle("show");
	});

	languages.forEach((item) => {
		item.addEventListener("click", (e) => {
			if (e.target.textContent === "Английский" || e.target.textContent === "English") {
				if (location.href !== "https://qkston.github.io/english.html") {
					location.href = "https://qkston.github.io/english.html";
				}
			} else if (e.target.textContent === "Русский" || e.target.textContent === "Russian") {
				if (location.href !== "https://qkston.github.io/") {
					location.href = "https://qkston.github.io/";
				}
			}
		});
	});
});
