(() => {
  window.addEventListener("DOMContentLoaded", () => {
    const requiredInputs = document.querySelectorAll(".required-input"),
      errorMessages = document.querySelectorAll(".main-form-label-error"),
      labelForIncorrectPasswords = document.getElementById("error-passwords"),
      passwordInputs = document.querySelectorAll(".password-inputs"),
      checkboxInput = document.getElementById("default-checkbox"),
      termsText = document.getElementById("agree-terms"),
      registerBtn = document.getElementById("register-button");

    // Register button clicked
    registerBtn.addEventListener("click", e => {
      e.preventDefault();

      const isEmpty = Array.from(requiredInputs).some(element => element.value === "");
      const checkedPasswords = passwordInputs[0].value === passwordInputs[1].value;

      requiredInputs.forEach(() => {
        if (isEmpty) {
          requiredInputsIsEmpty();
        } else if (!checkedPasswords) {
          passwordsCorrect();
        } else if (!checkboxInput.checked) {
          checkboxChecked();
        } else {
          location.href = "https://qkston.github.io/makets/Registration%20flow/success-register.html";
        }
      });
    });

    // Checking of the cumulative fields for emptiness
    function requiredInputsIsEmpty() {
      requiredInputs.forEach((input, inputsIndex) => {
        errorMessages.forEach((element, messagesIndex) => {
          if (!input.value && inputsIndex == messagesIndex) {
            element.style.display = "inline-block";

            setTimeout(() => {
              element.style.display = "none";
            }, 3000);
          }
        });
      });
    }

    // Checking of the correct passwords
    function passwordsCorrect() {
      errorMessages.forEach(element => {
        element.style.display = "none";
      });

      labelForIncorrectPasswords.style.display = "inline-block";

      setTimeout(() => {
        labelForIncorrectPasswords.style.display = "none";
      }, 3000);
    }

    // Checking checkbox
    function checkboxChecked() {
      termsText.innerHTML = `You must agree to <a href="#">terms and conditions</a> to register.`;
      termsText.style.color = "red";
    }
  });
})();
