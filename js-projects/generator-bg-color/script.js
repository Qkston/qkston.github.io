window.addEventListener("DOMContentLoaded", () => {
	const bgColor = document.querySelector(".bg-color"),
		generateBtn = document.querySelector(".generate-btn"),
		inputForHash = document.querySelector(".hash-color");

	generateColor();
	bgColor.style.backgroundColor = inputForHash.value;

	generateBtn.addEventListener("click", () => {
		generateColor();
		bgColor.style.backgroundColor = inputForHash.value;
	});

	inputForHash.oninput = function (event) {
		bgColor.style.backgroundColor = event.target.value;
	};

	function generateColor() {
		let result = "";
		const characters = "0123456789abcdef";

		for (let i = 0; i < 6; i++) {
			result += characters.charAt(Math.floor(Math.random() * characters.length));
		}

		inputForHash.value = `#${result}`;
		return result;
	}
});
