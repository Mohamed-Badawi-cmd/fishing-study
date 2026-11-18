const passwordInput = document.getElementById("password");
const eyeIcon = document.getElementById("eye-icon");

eyeIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "hide.webp";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "visible.webp";
  }
});