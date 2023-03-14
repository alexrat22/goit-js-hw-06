const inputForm = document.querySelector("input");
inputForm.addEventListener("blur", onInputFormBlur);

function onInputFormBlur(event) {
  if (
    Number(event.currentTarget.value.length) ===
    Number(inputForm.dataset.length)
  ) {
    inputForm.id = "validation-input.valid";
  } else {
    inputForm.id = "validation-input.invalid";
  }
}
