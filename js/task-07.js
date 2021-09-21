const input = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

const rangeInputsetUp = (minRem = 1, maxRem = 5, step = 1) => {
  input.value = minRem
  textRef.style.fontSize = input.value + 'rem'
  input.min = minRem
  input.max = maxRem
  input.step = step
}

rangeInputsetUp()

input.addEventListener('change', onInputChange)

function onInputChange(e) {
  textRef.style.fontSize = e.target.value + 'rem'
}
