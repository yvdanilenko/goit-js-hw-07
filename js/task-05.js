// Напиши скрипт который, при наборе текста в инпуте
// input#name-input (событие input), подставляет
// его текущее значение в span#name-output. Если инпут пустой,
//  в спане должна отображаться строка 'незнакомец'.

const input = document.querySelector('#name-input')
console.log(input)

const output = document.querySelector('#name-output')
console.log(output)

input.addEventListener('focus', onInputFocus)
function onInputFocus() {
  console.log('input on focus')
}

function onInputChange(event) {
  console.log('input change', event.currentTarget.value)
  output.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : 'кот'
}

input.addEventListener('input', onInputChange)
