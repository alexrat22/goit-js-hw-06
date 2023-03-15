const inputForm = document.querySelector("input");
const text = document.querySelector("#text");

inputForm.addEventListener("input", onChangeFontSize);

function onChangeFontSize(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}
