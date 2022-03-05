(() => {
  window.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("checkbox");
    let checked = false;
    // closeBtn = document.getElementById("close-btn"),
    // requestBtn = document.getElementById("request-password-change");

    //  // Request password change on forgot password page
    //  requestBtn.addEventListener("click", e => {
    //    e.preventDefault();

    //    location.href = "https://qkston.github.io/makets/Registration%20flow/change-password.html";
    //  });

    //  // Close button on success register page
    //  closeBtn.addEventListener("click", e => {
    //    e.preventDefault();

    //    location.href = "https://qkston.github.io/makets/Registration%20flow/log-in.html";
    //  });

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
  });
})();
