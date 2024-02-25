function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const selectors = {
  divControl: document.querySelector("#controls"),
  divBoxes: document.querySelector("#boxes"),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  input: document.querySelector('#controls input')
  
};
const { divControl, divBoxes, btnCreate, btnDestroy, input } = selectors;

btnCreate.addEventListener('click', onCreateBox);
btnDestroy.addEventListener('click', onDestroy);


function onCreateBox(evt) {
  const amount = Number(input.value);
  console.log(amount);
  if (amount > 1 && amount < 100) {
    createBoxes(amount);
  } 
}

function createBoxes(amount){
   let elementsDiv = [];
  for (let i = 1; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = 30 + 10 * i + 'px';
    div.style.height = 30 + 10 * i + 'px';
    div.style.background = getRandomHexColor();
    elementsDiv.push(div);
  }

  console.log(elementsDiv);
  divBoxes.append(...elementsDiv);
}
function onDestroy() {
  destroyBoxes();
}


function destroyBoxes() {
  divBoxes.innerHTML = '';
  input.value = '';
}

