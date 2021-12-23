const upperArrowHours = document.querySelector(".upper-arrows-hours");
const upperArrowMinutes = document.querySelector(".upper-arrows-minutes");
const upperArrowSeconds = document.querySelector(".upper-arrows-seconds");

const lowerArrowHours = document.querySelector(".lower-arrows-hours");
const lowerArrowMinutes = document.querySelector(".lower-arrows-minutes");
const lowerArrowSeconds = document.querySelector(".lower-arrows-seconds");

const hoursCountNumber = document.querySelector(".numbers-hours-count");
const minutesCountNumber = document.querySelector(".numbers-minutes-count");
const secondsCountNumber = document.querySelector(".numbers-seconds-count");

let hoursCount = 0,
	minutesCount = 0,
	secondsCount = 0;

// Hours
upperArrowHours.addEventListener("click", () => {
	hoursCount++;

	if (hoursCount < 10) {
		hoursCountNumber.innerHTML = `0${hoursCount}`;
	} else if (hoursCount >= 10) {
		hoursCountNumber.innerHTML = `${hoursCount}`;
	}
});

lowerArrowHours.addEventListener("click", () => {
	hoursCount--;

	if (hoursCount >= 0 && hoursCount < 10) {
		hoursCountNumber.innerHTML = `0${hoursCount}`;
	} else if (hoursCount >= 10) {
		hoursCountNumber.innerHTML = `${hoursCount}`;
	} else if (hoursCount <= 0) {
		hoursCountNumber.innerHTML = `00`;
		hoursCount = 0;
	}
});

// Minutes
upperArrowMinutes.addEventListener("click", () => {
	minutesCount++;

	if (minutesCount < 10) {
		minutesCountNumber.innerHTML = `0${minutesCount}`;
	} else if (minutesCount >= 10) {
		minutesCountNumber.innerHTML = `${minutesCount}`;
	}
});

lowerArrowMinutes.addEventListener("click", () => {
	minutesCount--;

	if (minutesCount >= 0 && minutesCount < 10) {
		minutesCountNumber.innerHTML = `0${minutesCount}`;
	} else if (minutesCount >= 10) {
		minutesCountNumber.innerHTML = `${minutesCount}`;
	} else if (minutesCount <= 0) {
		minutesCountNumber.innerHTML = `00`;
		minutesCount = 0;
	}
});

// Seconds
upperArrowSeconds.addEventListener("click", () => {
	secondsCount++;

	if (secondsCount < 10) {
		secondsCountNumber.innerHTML = `0${secondsCount}`;
	} else if (secondsCount >= 10) {
		secondsCountNumber.innerHTML = `${secondsCount}`;
	}
});

lowerArrowSeconds.addEventListener("click", () => {
	secondsCount--;

	if (secondsCount >= 0 && secondsCount < 10) {
		secondsCountNumber.innerHTML = `0${secondsCount}`;
	} else if (secondsCount >= 10) {
		secondsCountNumber.innerHTML = `${secondsCount}`;
	} else if (secondsCount <= 0) {
		secondsCountNumber.innerHTML = `00`;
		secondsCount = 0;
	}
});
