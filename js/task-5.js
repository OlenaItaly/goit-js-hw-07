function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const selectors = {
  btn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  span: document.querySelector(".color")
}
console.dir(selectors.body);

selectors.btn.addEventListener('click', onChangeColor);


function onChangeColor(evt) {
  const changeColor = getRandomHexColor();
  selectors.body.style = `background-color: ${changeColor}`;
  selectors.span.textContent = `${changeColor}`;

};