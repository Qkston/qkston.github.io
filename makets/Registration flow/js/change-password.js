(() => {
  window.addEventListener("DOMContentLoaded", () => {
    const newPasswordInput = document.querySelector(".new-password"),
      confirmPasswordInput = document.querySelector(".confirm-password"),
      button = document.querySelector(".change-password-button");

    newPasswordInput.addEventListener("input", () => {
      if (newPasswordInput.value.length <= 0) {
        showQuality(0, "");
      } else if (newPasswordInput.value.match(/^[A-Za-z]{0,6}$/)) {
        showQuality(4, "#ff3030");
      } else if (newPasswordInput.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/)) {
        showQuality(8, "#f3c652");
      } else if (newPasswordInput.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/)) {
        showQuality(12, "#60ff30");
      }
    });

    button.addEventListener("click", () => {
      if (!newPasswordInput.value) {
        styleErrorInputs([newPasswordInput], button, "red");
      } else if (!confirmPasswordInput.value) {
        styleErrorInputs([confirmPasswordInput], button, "red");
      } else if (newPasswordInput.value !== confirmPasswordInput.value) {
        styleErrorInputs([confirmPasswordInput], button, "red");
      } else if (newPasswordInput.value.length < 6) {
        styleErrorInputs([newPasswordInput], button, "red");
      } else {
        styleErrorInputs([newPasswordInput, confirmPasswordInput], button, "#60ff30");
      }
    });

    function showQuality(count, color) {
      const qualityBlock = document.querySelectorAll(".password-quality-block");

      qualityBlock.forEach(element => {
        element.innerHTML = "";
      });

      if (count > 0) {
        for (let i = 0; i < count; i++) {
          qualityBlock[i].innerHTML += `<span class='password-quality-block-full' style='background: ${color}'></span>`;
        }
      }
    }

    function styleErrorInputs(inputSelector, buttonSelector, color) {
      inputSelector.forEach(element => (element.style.border = `1px solid ${color}`));
      buttonSelector.style.backgroundColor = color;

      setTimeout(() => {
        inputSelector.forEach(element => (element.style.border = ""));
        buttonSelector.style.backgroundColor = "";
      }, 1500);
    }
  });
})();
