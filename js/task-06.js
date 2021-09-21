const validationInputRef = document.getElementById('validation-input')

function cheksTheLength() {
  const curentTarget = event.currentTarget
  const dataLengthAttribut = Number(curentTarget.getAttribute('data-length'))
  curentTarget.classList.remove('invalid')
  curentTarget.classList.remove('valid')
  curentTarget.value.length === dataLengthAttribut
    ? curentTarget.classList.add('valid')
    : curentTarget.classList.add('invalid')
}

validationInputRef.addEventListener('blur', takeClassByLength)
