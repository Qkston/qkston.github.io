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
		let array = [];

		for (let i = 0; i < 6; i++) {
			array.push(Math.floor(Math.random() * 10));
		}

		const rndColor = array.join("");

		inputForHash.value = `#${rndColor}`;

		return rndColor;
	}
});
