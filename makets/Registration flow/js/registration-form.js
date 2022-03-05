(() => {
  window.addEventListener("DOMContentLoaded", () => {
    const formOptionalBtn = document.querySelectorAll(".main-form-optional-inputs-btn"),
      phoneNumber = document.getElementById("phone-number");

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
