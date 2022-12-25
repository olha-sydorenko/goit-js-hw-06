// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const boxes = document.querySelector('#boxes');
boxes.style = 'padding-top: 10px; display: flex; gap: 10px;';

const box = document.createElement('div');
box.classList.add('.box');
box.style = 'width: 30px; height: 30px; background-color: red;';

const controls = document.querySelector('#controls');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
let quantity;

createBtn.addEventListener('click', oncreateBtnClick);

controls.firstElementChild.addEventListener('input', event => {
  quantity = event.currentTarget.value;
});

function oncreateBtnClick(event) {
  for (let i = 0; i <= quantity; i += 1) {
    boxes.append(box);
    console.log(quantity);
  }
}
//console.log('hello');
