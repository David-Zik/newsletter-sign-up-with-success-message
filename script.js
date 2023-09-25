"use strict";
const container = document.querySelector(".container");
const subscribeBtn = document.querySelector(".subscribe-btn");
const inputEmail = document.getElementById("email");
const invalidNotice = document.querySelector(".invalid-notice");
const successMessage = document.querySelector(".success-message");
const displayEmail = document.querySelector(".display-email");
const dismissBtn = document.querySelector(".dismiss-message");

subscribeBtn.addEventListener("click", function () {
  const validateEmail = function (email) {
    // Regular expression for valid email format
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Test the input email against the regular expression
    return regex.test(email);
  };
  const valueEmail = inputEmail.value;
  //   console.log(valueEmail);

  validateEmail(valueEmail);
  if (validateEmail(valueEmail)) {
    successMessage.classList.toggle("hidden");
    container.classList.toggle("hidden");
    displayEmail.textContent = valueEmail;
  } else {
    invalidNotice.classList.toggle("hidden");
    inputEmail.classList.toggle("error");
    inputEmail.style.borderColor = "hsl(4, 100%, 67%)";
  }
});

inputEmail.addEventListener("click", function () {
  invalidNotice.classList.add("hidden");
  inputEmail.classList.remove("error");
  inputEmail.style.borderColor = "hsl(234, 29%, 20%)";
});

dismissBtn.addEventListener("click", function () {
  successMessage.classList.toggle("hidden");
  container.classList.toggle("hidden");
  inputEmail.value = "";
});
