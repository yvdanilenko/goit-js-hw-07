let counterValue = 0
const buttonIncrementEl = document.querySelector(
  '#counter button[data-action="increment"]',
)

const buttonDecrementEl = document.querySelector(
  '#counter button[data-action="decrement"]',
)
function setCounterValue() {
  document.getElementById('value').textContent = counterValue
}

function increment() {
  counterValue += 1
  setCounterValue()
}

function decrement() {
  counterValue -= 1
  setCounterValue()
}

buttonIncrementEl.addEventListener('click', increment)
buttonDecrementEl.addEventListener('click', decrement)
