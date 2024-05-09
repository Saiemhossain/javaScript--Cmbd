//selecting input & result element

const inputOne = document.querySelector('#inputOne');
const inputTwo = document.querySelector('#inputTwo');
const result = document.querySelector('#result');

function add() {
  if (inputOne.value && inputTwo) {
     let addition = parseInt(inputOne.value) + parseInt(inputTwo.value);
    result.innerHTML = addition;
    clearInput();
  } else {
    alert('Enter a value');
  }
 
}
add();

function substract() {
  if (inputOne.value && inputTwo) {
    let subtract = parseInt(inputOne.value) - parseInt(inputTwo.value);
    result.innerHTML = subtract;
    clearInput();
  } else {
    alert('Enter a value');
  }
}
substract();
function multiply() {
  if (inputOne.value && inputTwo) {
    let multiply = parseInt(inputOne.value) * parseInt(inputTwo.value);
    result.innerHTML = multiply;
    clearInput();
  } else {
    alert('Enter a value');
  }
}
multiply();

function division() {
  if (inputOne.value && inputTwo) {
    let division = parseInt(inputOne.value) / parseInt(inputTwo.value);
    result.innerHTML = division;
    clearInput();
  } else {
    alert('Enter a value');
  }
}
division();

function clearInput() {
  inputOne.value = '';
  inputTwo.value = '';
}
clearInput();


