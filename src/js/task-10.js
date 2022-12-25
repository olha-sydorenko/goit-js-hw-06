function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');

const controls = document.querySelector('#controls');
let quantity;
controls.firstElementChild.addEventListener('input', event => {
  quantity = event.currentTarget.value;
});

const createBtn = document.querySelector('[data-create]');
createBtn.addEventListener('click', oncreateBtnClick);

function oncreateBtnClick(event) {
  let markup = '';
  for (let i = 1; i <= quantity; i += 1) {
    markup += `<div class="box"></div>`;
  }
  boxes.insertAdjacentHTML('beforeend', markup);
  styleBoxes();
}
function styleBoxes() {
  const arrayOfBoxes = document.querySelectorAll('.box');

  for (let i = 0; i < arrayOfBoxes.length; i += 1)
    arrayOfBoxes.forEach(box => {
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = '30px';
      box.style.height = '30px';
    });
}

const destroyBtn = document.querySelector('[data-destroy]');
destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
});
