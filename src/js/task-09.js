function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const color = document.querySelector('.color');

changeColorBtn.addEventListener('click', changeBodyColor);

function changeBodyColor(event) {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}
