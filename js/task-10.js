function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

const controls = document.querySelector('#controls');
const createBtn = document.querySelector('[data-create]');
const box = document.querySelector('.box');

createBtn.addEventListener('click', createBoxes);

function createBoxes(amount){
    amount = controls.firstElementChild.value;
    const arrOfBoxes = [];
    let width = 20;
    let height = 20;
    
      for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');
    box.style.width = (width+=10) + 'px';
    box.style.height = (height+=10) + 'px';
    box.style.backgroundColor = getRandomHexColor();
    arrOfBoxes.push(box);
      }  
  boxes.append(...arrOfBoxes);
  console.log(arrOfBoxes.length);
    }

    const destroyBtn = document.querySelector('[data-destroy]');
    function destroyBoxes () {
      boxes.innerHTML = '';
      controls.firstElementChild.value = '';
    }
    
    destroyBtn.addEventListener('click', destroyBoxes)

// function createBoxes(amount){
//   amount = controls.firstElementChild.value;
//   let markup = '';
// 
//     for (let i = 1; i <= amount; i += 1) {
//       markup += `<div style="color:blue; width:30px; width:30px;"></div>`;
//     }
    
// boxes.insertAdjacentHTML('beforeend', markup);
//   }




