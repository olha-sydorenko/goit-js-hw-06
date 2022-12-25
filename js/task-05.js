const textInput = document.querySelector('#name-input');
textInput.addEventListener('input', event => {
  document.querySelector('#name-output').textContent = event.currentTarget.value;
});
