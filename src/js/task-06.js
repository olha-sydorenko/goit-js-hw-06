const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', () => {
  if (textInput.value.length === parseInt(textInput.dataset.length)) {
    textInput.classList.add('valid');
    console.log(textInput.value.length);
    console.log(textInput.dataset.length);
  } else {
    textInput.classList.add('invalid');
  }
});
