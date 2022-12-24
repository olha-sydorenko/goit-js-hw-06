const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


slider.addEventListener('change', event => {
  text.style.fontSize = event.currentTarget.value + 'px';
});
