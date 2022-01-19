window.addEventListener("DOMContentLoaded", () => {
	const bgColor = document.querySelector(".bg-color"),
		generateBtn = document.querySelector(".generate-btn");

	bgColor.style.backgroundColor = `#${generateColor()}`;

	generateBtn.addEventListener("click", () => {
		bgColor.style.backgroundColor = `#${generateColor()}`;
	});

	function generateColor() {
		const rndNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

		return rndNumber;
	}
});
