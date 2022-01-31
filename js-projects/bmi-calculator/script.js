window.addEventListener("DOMContentLoaded", () => {
	const explanationInput = document.querySelector(".explanation");

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
			inputBMI.value = "0.00";
		}
	});

	// Calculation and explanation output
	inputWeight.addEventListener("input", () => {
		inputBMI.value = calcBMI(inputHeight.value, inputWeight.value);
		checkResult(inputBMI);
	});
	inputHeight.addEventListener("input", () => {
		inputBMI.value = calcBMI(inputHeight.value, inputWeight.value);
		checkResult(inputBMI);
	});

	// Click-copy
	inputBMI.addEventListener("click", () => {
		inputBMI.focus();
		inputBMI.select();
		document.execCommand("copy");

		inputHeight.focus();
		inputBMI.classList.add("copy-done");

		setTimeout(() => {
			inputBMI.classList.remove("copy-done");
		}, 4000);
	});

	// Calculation
	function calcBMI(h, m) {
		return (m / Math.pow(h / 100, 2)).toFixed(2);
	}

	// Explanation output
	function checkResult(input) {
		if (input.value <= 18.5) {
			explanationInput.innerHTML = `
            Your BMI is ${input.value}, indicating your weight is in the <strong>Underweight</strong> category for adults of your height. <br/>
            For your height, a normal weight range would be from 56 to 75.4 kilograms. <br/>
            Talk with your healthcare provider to determine possible causes of underweight and if you need to gain weight.
         `;
		} else if (input.value > 18.5 && input.value <= 24.9) {
			explanationInput.innerHTML = `
            Your BMI is ${input.value}, indicating your weight is in the <strong>Normal</strong> category for adults of your height. <br/>
            For your height, a normal weight range would be from 56 to 75.4 kilograms. <br/>
            Maintaining a healthy weight may reduce the risk of chronic diseases associated with overweight and obesity.
         `;
		} else if (input.value > 25 && input.value <= 29.9) {
			explanationInput.innerHTML = `
            Your BMI is ${input.value}, indicating your weight is in the <strong>Overweight</strong> category for adults of your height. <br/>
            For your height, a normal weight range would be from 56 to 75.4 kilograms. <br/>
            People who have overweight or obesity are at higher risk for chronic conditions such as high blood pressure, diabetes, and high cholesterol.
         `;
		} else if (input.value > 30) {
			explanationInput.innerHTML = `
            Your BMI is ${input.value}, indicating your weight is in the <strong>Obese</strong> category for adults of your height. <br/>
            For your height, a normal weight range would be from 56 to 75.4 kilograms. <br/>
            People who are overweight or obese are at higher risk for chronic conditions such as high blood pressure, diabetes, and high cholesterol.
         `;
		}
	}
});
