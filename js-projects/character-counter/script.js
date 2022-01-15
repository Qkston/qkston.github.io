const count = document.querySelector(".count-number"),
	btn = document.querySelector(".btn-copy"),
	textarea = document.querySelector(".textarea");

textarea.oninput = function (event) {
	count.innerHTML = event.target.value.length;
};
