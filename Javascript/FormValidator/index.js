const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
  let valid = true;

  // Name validation (required and at least 3 characters)
  if (nameInput.value.trim() === "" || nameInput.value.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation (required and valid email format)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Invalid email format.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation (required and at least 6 characters)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phoneError");

  phoneInput.addEventListener("input", function () {
    const phoneNumber = phoneInput.value;
    const phoneNumberPattern = /^0[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}$/;

    if (!phoneNumberPattern.test(phoneNumber)) {
      phoneError.textContent =
        "Geçerli bir telefon numarası girin (örn. 0xxx xxx xx xx).";
    } else {
      phoneError.textContent = "";
    }
  });

  if (!valid) {
    e.preventDefault();
  }
});
