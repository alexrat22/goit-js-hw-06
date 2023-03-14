const counter = {
  counterValue: 0,
  decrement() {
    this.counterValue -= 1;
  },

  increment() {
    this.counterValue += 1;
  },
};

const valueEl = document.querySelector("#value");

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener("click", function () {
  counter.decrement();
  valueEl.textContent = counter.counterValue;
});

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener("click", function () {
  counter.increment();
  valueEl.textContent = counter.counterValue;
});
