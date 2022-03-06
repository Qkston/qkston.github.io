(() => {
  window.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("close-btn");

    // Close button on success register page
    closeBtn.addEventListener("click", e => {
      e.preventDefault();

      location.href = "https://qkston.github.io/makets/Registration%20flow/log-in.html";
    });
  });
})();
