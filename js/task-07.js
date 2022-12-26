const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = slider.value + 'px';

slider.addEventListener('input', () => {
  text.style.fontSize = slider.value + 'px';
});
