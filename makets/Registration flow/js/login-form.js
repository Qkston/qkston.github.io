(() => {
  window.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("checkbox"),
      loginBtn = document.querySelector(".log-in-main-form-lower-button"),
      companyNameInput = document.querySelector(".company-name"),
      passwordInput = document.querySelector(".password");

    let checked = false;

    loginBtn.addEventListener("click", e => {
      e.preventDefault();

      if (!companyNameInput.value) {
        emptyInput(companyNameInput);
      }
      if (!passwordInput.value) {
        emptyInput(passwordInput);
      }
      if (companyNameInput.value && passwordInput.value) {
        console.log("true");
      }
    });

    // Checkbox on log-in page
    checkbox.addEventListener("click", () => {
      if (!checked) {
        checkbox.style.cssText = `
            background-image: url('img/log-in/checked.png');
            background-position: center;
            background-size: 30px;
            `;

        checked = true;
      } else if (checked) {
        checkbox.style.backgroundImage = "none";
        checked = false;
      }
    });

    function emptyInput(input) {
      input.style.border = "1px solid red";
      input.style.marginTop = "1px";

      setTimeout(() => {
        input.style.border = "";
        input.style.marginTop = "";
      }, 3000);
    }
  });
})();
