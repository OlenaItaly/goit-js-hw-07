function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const selectors = {
  divControl: document.querySelector("#controls"),
  divBoxes: document.querySelector("#boxes"),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]')
};

console.dir(selectors.divControl);
console.dir(selectors.divControl.children[0].value);
const buttonCreate = selectors.btnCreate.addEventListener('click', onCreateBox);

function onCreateBox(evt) {
  
}