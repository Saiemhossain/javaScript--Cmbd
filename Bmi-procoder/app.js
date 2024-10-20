const heightElement = document.querySelector('#height');

const weightElement = document.querySelector('#weight');

const button = document.querySelector('#btn');

const scoreElement = document.querySelector('#score');


function getBMI() {
  const BmiIndex = parseFloat((weightElement.value)) / parseFloat((heightElement.value * heightElement.value))
 
  scoreElement.textContent = BmiIndex.toFixed(2);
}

button.addEventListener('click', getBMI);

