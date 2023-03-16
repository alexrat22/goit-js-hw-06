function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const mainDiv = document.querySelector("#boxes");

inputNumber.addEventListener("blur", createBoxes);
btnCreate.addEventListener("click", onCreateButtonClick);
btnDestroy.addEventListener("click", destroyBoxes);

const arrayOFDivs = [];

function createBoxes(amount) {
  let startWidth = 30;
  let startHeight = 30;
  for (let i = 0; i < amount.currentTarget.value; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = startWidth + "px";
    startWidth += 10;
    newDiv.style.height = startHeight + "px";
    startHeight += 10;
    newDiv.style.backgroundColor = getRandomHexColor();
    arrayOFDivs.push(newDiv);
  }
  amount.currentTarget.value = "";
}

function onCreateButtonClick(event) {
  mainDiv.append(...arrayOFDivs);
}

function destroyBoxes(event) {
  mainDiv.innerHTML = "";
  arrayOFDivs.splice(0, arrayOFDivs.length);
}
