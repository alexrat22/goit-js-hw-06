const formInput = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

formInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    outputName.textContent = "Anonymous";
  } else outputName.textContent = event.currentTarget.value;
}
