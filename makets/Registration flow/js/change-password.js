(() => {
  window.addEventListener("DOMContentLoaded", () => {
    const newPasswordInput = document.querySelector(".new-password"),
      confirmPasswordInput = document.querySelector(".confirm-password");

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

    confirmPasswordInput.addEventListener("blur", () => {
      if (newPasswordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.style.border = "1px solid red";
      } else {
        confirmPasswordInput.style.border = "";
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
  });
})();
