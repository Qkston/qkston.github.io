let arrowUp = document.getElementById("arrow-up"); // Right lower block to lift up

window.addEventListener("scroll", checkScroll); // Check scroll for show right lower block to lift up
arrowUp.addEventListener("click", liftUp); // Click for lift up

// Function for check scroll
function checkScroll() {
	let scroll = this.scrollY;
	// FIXME: Click exeption
	if (scroll >= 200) {
		arrowUp.classList.add("show");
		arrowUp.classList.remove("not-show");
	} else {
		arrowUp.classList.remove("show");
		arrowUp.classList.add("not-show");
	}
}

// Function for lift up
function liftUp() {
	if (window.pageYOffset > 0) {
		// FIXME: To the full top of the page
		window.scrollBy(0, -300);
		setTimeout(liftUp, 100);
	}
}
