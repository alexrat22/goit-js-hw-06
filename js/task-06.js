const inputForm = document.querySelector("input");

inputForm.addEventListener("blur", onInputFormBlur);

function onInputFormBlur(event) {
  if (
    Number(event.currentTarget.value.length) ===
    Number(inputForm.dataset.length)
  ) {
    inputForm.classList.add("valid");
    inputForm.classList.remove("invalid");
  } else {
    inputForm.classList.add("invalid");
    inputForm.classList.remove("valid");
  }
}
