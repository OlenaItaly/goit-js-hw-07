// const refs = {
//     input: document.querySelector("#name-input"),
//     span: document.querySelector("#name-output")
// };
// refs.input.addEventListener('input', onInput);
//  let result = [];
// function onInput(event) {
//     console.log(event);
//     result.push(event.currentTarget.value);
//     console.log(result);
// }
const nameInputEl = document.querySelector('#name-input')
console.dir(nameInputEl)
const nameOutputEl = document.querySelector('#name-output')
nameInputEl.addEventListener('input', onOutput)
function onOutput(event) {
    if (!event.currentTarget.value.includes("  ")) {
      nameOutputEl.textContent= event.currentTarget.value 
    } else {
       nameOutputEl.textContent = "anonimus" 
    }
}