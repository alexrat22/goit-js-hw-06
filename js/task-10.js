function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputNumber: document.querySelector("input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  mainDiv: document.querySelector("#boxes"),
};

refs.inputNumber.addEventListener("blur", createBoxes);
refs.btnCreate.addEventListener("click", onCreateButtonClick);
refs.btnDestroy.addEventListener("click", destroyBoxes);

const arrayOFDivs = [];

function createBoxes(amount) {
  let startSizes = 30;
  for (let i = 0; i < amount.currentTarget.value; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = startSizes + "px";
    newDiv.style.height = startSizes + "px";
    startSizes += 10;
    newDiv.style.backgroundColor = getRandomHexColor();
    arrayOFDivs.push(newDiv);
  }
  amount.currentTarget.value = "";
}

function onCreateButtonClick(event) {
  refs.mainDiv.append(...arrayOFDivs);
}

function destroyBoxes(event) {
  refs.mainDiv.innerHTML = "";
  arrayOFDivs.splice(0, arrayOFDivs.length);
}
