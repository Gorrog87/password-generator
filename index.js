function randomPassword() {
  let displayPassword = document.getElementById("display-password");
  let passwordLength = document.getElementById("password-length").value;
  let error = document.getElementById("error-info");
  let password = "";
  let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]:;?><,./-='";

  // If user has not selected a length
  parseInt(passwordLength);
  if (passwordLength == 0) {
    error.innerHTML = "Please select password length";
    error.style.padding = "10px 15px";
    setTimeout(() => {
      error.style.visibility = "hidden";
      window.location.reload();
    }, 2000);
  }

  // Random password generate
  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  displayPassword.value = password;
}
