const modalWindow = document.querySelector(".modal-window");

const formInputs = document.querySelectorAll(".form-inputs");
const formInputsArr = Array.from(formInputs);

const sendFormBtn = document.getElementById("send-form-button");

sendFormBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const requiredInputs = formInputsArr.some((element) => element.value === "");

	if (requiredInputs) {
		console.log("bad");

		formInputsArr.forEach((element) => {
			if (element.value === "") {
				element.style.border = "1px solid red";
			}
		});

		setTimeout(() => {
			formInputsArr.forEach((element) => {
				if (element.value === "") {
					element.style.border = "none";
				}
			});
		}, 3000);
	} else {
		console.log("good");
		modalWindow.style.display = "flex";

		setTimeout(() => {
			modalWindow.style.display = "none";
		}, 6000);
	}
});
