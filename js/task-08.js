const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const inputEmail = event.currentTarget.elements.email.value;
  const inputPassword = event.currentTarget.elements.password.value;

  if (inputEmail === "" || inputPassword === "") {
    alert("Всі поля повинні бути заповнені!!!");
  } else {
    const userData = {
      email: inputEmail,
      password: inputPassword,
    };
    console.log(userData);
    form.reset();
  }
}
