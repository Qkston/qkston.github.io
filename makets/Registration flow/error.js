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

      let emailInput, emailIndex;
      requiredInputs.forEach((element, index) => {
        if (element.name === "work-email") {
          emailInput = element;
          emailIndex = index;
        }
      });

      const isEmpty = Array.from(requiredInputs).some(element => element.value === "");
      const checkedPasswords = passwordInputs[0].value === passwordInputs[1].value;
      const regexEmail = emailInput.value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

      requiredInputs.forEach(() => {
        if (isEmpty) {
          requiredInputsIsEmpty();
          return;
        }

        if (!regexEmail) {
          correctEmail(emailIndex);
          return;
        }

        if (!checkedPasswords) {
          passwordsCorrect();
          return;
        }

        if (!checkboxInput.checked) {
          checkboxChecked();
          return;
        }

        location.href = "https://qkston.github.io/makets/Registration%20flow/success-register.html";
      });
    });

    function correctEmail(index) {
      errorMessages.forEach((element, messagesIndex) => {
        if (index === messagesIndex) {
          element.style.cssText = `
            display: inline-block;
            margin-left: 25px;
          `;
          element.textContent = "Correct your email";

          setTimeout(() => {
            element.style.cssText = `
               display: none;
               margin-left: 0px;
            `;
            element.textContent = "Please fill out this field";
          }, 3000);
        }
      });
    }

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
