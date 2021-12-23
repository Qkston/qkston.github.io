const upperArrowHours = document.querySelector(".upper-arrows-hours");
const upperArrowMinutes = document.querySelector(".upper-arrows-minutes");
const upperArrowSeconds = document.querySelector(".upper-arrows-seconds");

const lowerArrowHours = document.querySelector(".lower-arrows-hours");
const lowerArrowMinutes = document.querySelector(".lower-arrows-minutes");
const lowerArrowSeconds = document.querySelector(".lower-arrows-seconds");

const hoursCount = document.querySelector(".numbers-hours-count");
const minutesCount = document.querySelector(".numbers-minutes-count");
const secondsCount = document.querySelector(".numbers-seconds-count");

console.dir(upperArrowHours);
let count = 0;

upperArrowHours.addEventListener("click", () => {
	count++;

	if (count < 10) {
		hoursCount.innerHTML = `0${count}`;
	} else if (count >= 10) {
		hoursCount.innerHTML = `${count}`;
	}
});

lowerArrowHours.addEventListener("click", () => {
	count--;

	if (count >= 0 && count < 10) {
		hoursCount.innerHTML = `0${count}`;
	} else if (count >= 10) {
		hoursCount.innerHTML = `${count}`;
	} else if (count <= 0) {
		hoursCount.innerHTML = `00`;
		count = 0;
	}
});
