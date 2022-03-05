(() => {
  window.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("checkbox"),
      formOptionalBtn = document.querySelectorAll(".main-form-optional-inputs-btn"),
      closeBtn = document.getElementById("close-btn"),
      requestBtn = document.getElementById("request-password-change"),
      phoneNumber = document.getElementById("phone-number");

    let checked = false;

    //Request password change on forgot password page
    //  requestBtn.addEventListener("click", e => {
    //    e.preventDefault();

    //    location.href = "https://qkston.github.io/makets/Registration%20flow/change-password.html";
    //  });

    // Close button on success register page
    //  closeBtn.addEventListener("click", e => {
    //    e.preventDefault();

    //    location.href = "https://qkston.github.io/makets/Registration%20flow/log-in.html";
    //  });

    // Checkbox on log-in page
    //  checkbox.addEventListener("click", () => {
    //    if (!checked) {
    //      checkbox.style.backgroundImage = "url('img/log-in/checked.png')";
    //      checkbox.style.backgroundPosition = "center";
    //      checkbox.style.backgroundSize = "30px";
    //      checked = true;
    //    } else if (checked) {
    //      checkbox.style.backgroundImage = "none";
    //      checked = false;
    //    }
    //  });

    // For choosing in section number of employees on register pages
    formOptionalBtn.forEach(element => {
      element.addEventListener("click", e => {
        e.preventDefault();

        formOptionalBtn.forEach(element => {
          element.classList.remove("active");
        });

        element.classList.add("active");
      });
    });

    // Mask the numbers while typing phone number
    phoneNumber.addEventListener("input", e => {
      let x = e.target.value.replace(/\D/g, "").match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
      e.target.value = !x[2] ? x[1] : `${x[1]} ${x[2]} ${x[3]} ${x[4]}`;
    });
  });
})();
