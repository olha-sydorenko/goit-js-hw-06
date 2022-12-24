let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

decrementBtn.addEventListener('click', onDecrementClick);
function onDecrementClick(event) {
  counterValue -= 1;
  value.textContent = counterValue;
}

incrementBtn.addEventListener('click', onIncrementClick);
function onIncrementClick(event) {
  counterValue += 1;
  value.textContent = counterValue;
}
