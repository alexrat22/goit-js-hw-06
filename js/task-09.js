function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundArea = document.querySelector("body");
const colorName = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");
changeColorButton.addEventListener("click", onChangeColorButtonClick);

function onChangeColorButtonClick(event) {
  colorName.textContent = getRandomHexColor();
  backgroundArea.style.backgroundColor = colorName.textContent;
}
