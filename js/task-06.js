const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', event => {
  if (textInput.value.length === parseInt(textInput.dataset.length)) {
    event.target.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.add('invalid');
  }
});
