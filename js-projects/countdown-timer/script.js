// Upper buttons
const upperArrowHours = document.querySelector(".upper-arrows-hours"),
  upperArrowMinutes = document.querySelector(".upper-arrows-minutes"),
  upperArrowSeconds = document.querySelector(".upper-arrows-seconds"),
  // Lower buttons
  lowerArrowHours = document.querySelector(".lower-arrows-hours"),
  lowerArrowMinutes = document.querySelector(".lower-arrows-minutes"),
  lowerArrowSeconds = document.querySelector(".lower-arrows-seconds"),
  // Number
  hoursCountNumber = document.querySelector(".numbers-hours-count"),
  minutesCountNumber = document.querySelector(".numbers-minutes-count"),
  secondsCountNumber = document.querySelector(".numbers-seconds-count"),
  // Buttons for controls
  buttons = document.querySelectorAll(".button-for-controls"),
  startBtn = buttons[0],
  stopBtn = buttons[1],
  pauseBtn = buttons[2],
  // Block for buttons
  blockStartBtn = document.querySelector(".start-button"),
  blockStopPauseBtn = document.querySelector(".stop-pause-buttons");

let hoursCount = 0,
  minutesCount = 0,
  secondsCount = 0,
  timer,
  stopped = false;

// #region Buttons
// Start button
startBtn.addEventListener("click", () => {
  if (secondsCount <= 0) {
    document.querySelector(".error-message").textContent = "You need to choose a time";
    setTimeout(() => {
      document.querySelector(".error-message").textContent = "";
    }, 3000);
  } else {
    disableArrows(true);
    showPauseStopButtons(true);
    timer = setInterval(() => {
      secondsDown();
      if (hoursCount <= 0 && minutesCount <= 0 && secondsCount <= 0) {
        if (!stopped) {
          notification();
          checkActivePage();
        }
        disableArrows(false);
        showPauseStopButtons(false);
        clearInterval(timer);
      }
    }, 1000);
  }
});
// Stop button
stopBtn.addEventListener("click", () => {
  stopped = true;
  hoursCount = minutesCount = secondsCount = 0;
  hoursDown();
  minutesDown();
  secondsDown();
});
// Pause button
pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  disableArrows(false);
  showPauseStopButtons(false);
});
// #endregion

// #region Hours
// Top button
upperArrowHours.addEventListener("click", () => {
  hoursCount = hoursUp();
});
// Bottom button
lowerArrowHours.addEventListener("click", () => {
  hoursCount = hoursDown();
});
// #endregion

// #region Minutes
// Top button
upperArrowMinutes.addEventListener("click", () => {
  minutesCount = minutesUp();
});
// Bottom button
lowerArrowMinutes.addEventListener("click", () => {
  minutesCount = minutesDown();
});
// #endregion

// #region Seconds
// Top button
upperArrowSeconds.addEventListener("click", () => {
  secondsCount = secondsUp();
});
// Bottom button
lowerArrowSeconds.addEventListener("click", () => {
  secondsCount = secondsDown();
});
// #endregion

// #region Function of the hours
function hoursUp() {
  hoursCount++;

  if (hoursCount < 10) {
    hoursCountNumber.innerHTML = `0${hoursCount}`;
  } else if (hoursCount >= 10 && hoursCount < 23) {
    hoursCountNumber.innerHTML = `${hoursCount}`;
  } else if (hoursCount >= 23) {
    hoursCountNumber.innerHTML = `23`;
    hoursCount = 23;
  }

  return hoursCount;
}

function hoursDown() {
  hoursCount--;

  if (hoursCount >= 0 && hoursCount < 10) {
    hoursCountNumber.innerHTML = `0${hoursCount}`;
  } else if (hoursCount >= 10) {
    hoursCountNumber.innerHTML = `${hoursCount}`;
  } else if (hoursCount <= 0) {
    hoursCountNumber.innerHTML = `00`;
    hoursCount = 0;
  }

  return hoursCount;
}
// #endregion

// #region Function of the minutes
function minutesUp() {
  minutesCount++;

  if (minutesCount < 10) {
    minutesCountNumber.innerHTML = `0${minutesCount}`;
  } else if (minutesCount >= 10 && minutesCount < 60) {
    minutesCountNumber.innerHTML = `${minutesCount}`;
  } else if (minutesCount === 60) {
    hoursUp();
    minutesCount = 0;
    minutesCountNumber.innerHTML = `00`;
  }

  return minutesCount;
}

function minutesDown() {
  minutesCount--;

  if (minutesCount >= 0 && minutesCount < 10) {
    minutesCountNumber.innerHTML = `0${minutesCount}`;
  } else if (minutesCount >= 10) {
    minutesCountNumber.innerHTML = `${minutesCount}`;
  } else if (minutesCount <= 0) {
    if (hoursCount <= 0) {
      minutesCountNumber.innerHTML = `00`;
      minutesCount = 0;
    } else {
      hoursDown();
      minutesCount = 59;
      minutesCountNumber.innerHTML = `${minutesCount}`;
    }
  }

  return minutesCount;
}
// #endregion

// #region Functions of the seconds
function secondsUp() {
  secondsCount++;

  if (secondsCount < 10) {
    secondsCountNumber.innerHTML = `0${secondsCount}`;
  } else if (secondsCount >= 10 && secondsCount < 60) {
    secondsCountNumber.innerHTML = `${secondsCount}`;
  } else if (secondsCount === 60) {
    minutesUp();
    secondsCount = 0;
    secondsCountNumber.innerHTML = `00`;
  }

  return secondsCount;
}

function secondsDown() {
  secondsCount--;

  if (secondsCount >= 0 && secondsCount < 10) {
    secondsCountNumber.innerHTML = `0${secondsCount}`;
  } else if (secondsCount >= 10) {
    secondsCountNumber.innerHTML = `${secondsCount}`;
  } else if (secondsCount <= 0) {
    if (minutesCount > 0) {
      minutesDown();
      secondsCount = 59;
      secondsCountNumber.innerHTML = `${secondsCount}`;
    } else if (hoursCount > 0 && minutesCount <= 0) {
      hoursDown();
      minutesDown();
      secondsCount = 59;
      minutesCount = 59;
      secondsCountNumber.innerHTML = `${secondsCount}`;
      minutesCountNumber.innerHTML = `${minutesCount}`;
    } else {
      secondsCountNumber.innerHTML = `00`;
      secondsCount = 0;
    }
  }

  return secondsCount;
}
// #endregion

// #region Other functions
// Change title
function changeTitle(activeWindow) {
  document.head.childNodes.forEach(item => {
    if (item.nodeName === "TITLE") {
      if (activeWindow) {
        item.innerHTML = "Countdown timer";
      } else if (!activeWindow) {
        setInterval(() => {
          switch (item.innerHTML) {
            case "Countdown timer":
              item.innerHTML = "Timer is end";
              break;
            case "Timer is end":
              item.innerHTML = "Countdown timer";
              break;
          }
        }, 1000);
      }
    }
  });
}

// Check when page is active
function checkActivePage() {
  let isActive;

  if (document.visibilityState === "visible") {
    isActive = true;
  } else if (document.visibilityState === "hidden") {
    isActive = false;
  }

  changeTitle(isActive);
}

// Notification
function notification() {
  new Audio("notification/notification.mp3").play();
}

// Disabling the arrows that control the timer
function disableArrows(bool) {
  upperArrowHours.disabled = upperArrowMinutes.disabled = upperArrowSeconds.disabled = bool;
  lowerArrowHours.disabled = lowerArrowMinutes.disabled = lowerArrowSeconds.disabled = bool;
}

// Switching the display of the pause, stop and start buttons
function showPauseStopButtons(bool) {
  if (bool) {
    blockStartBtn.style.display = "none";
    blockStopPauseBtn.style.display = "flex";
  } else if (!bool) {
    blockStartBtn.style.display = "flex";
    blockStopPauseBtn.style.display = "none";
  }
}
// #endregion
