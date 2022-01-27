window.addEventListener("DOMContentLoaded", () => {
	let inputAge, inputHeight, inputWeight, inputBMI;

	document.querySelectorAll(".form-inputs").forEach((input) => {
		if (input.classList.contains("age")) {
			inputAge = input;
		} else if (input.classList.contains("height")) {
			inputHeight = input;
		} else if (input.classList.contains("weight")) {
			inputWeight = input;
		} else if (input.classList.contains("bmi")) {
			inputBMI = input;
		}
	});

	inputWeight.addEventListener("input", () => {
		inputBMI.value = calcBMI(inputHeight.value, inputWeight.value);
	});

	function calcBMI(h, m) {
		return (m / Math.pow(h / 100, 2)).toFixed(2);
	}
});
