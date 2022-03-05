(() => {
  window.addEventListener("DOMContentLoaded", () => {
    const requestBtn = document.getElementById("request-password-change"),
      emailInput = document.querySelector(".forgot-password-main-form-input");

    // Request password change on forgot password page
    requestBtn.addEventListener("click", e => {
      e.preventDefault();

      const regexEmail = emailInput.value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

      if (!regexEmail) {
        emailInput.style.border = "1px solid red";
        setTimeout(() => {
          emailInput.style.border = "";
        }, 3000);
      } else {
        location.href = "https://qkston.github.io/makets/Registration%20flow/change-password.html";
      }
    });
  });
})();
