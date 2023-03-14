let counterValue = 0;

const valueEl = document.querySelector("#value");

function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener("click", decrement);

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener("click", increment);
