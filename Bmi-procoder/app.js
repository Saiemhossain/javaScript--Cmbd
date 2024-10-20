const heightElement = document.querySelector('#height');

const weightElement = document.querySelector('#weight');

const button = document.querySelector('#btn');

const scoreElement = document.querySelector('#score');


function getBMI() {
  const BmiIndex = (weightElement.value) / (heightElement.value * heightElement.value)
 
  scoreElement.textContent = BmiIndex.toFixed(2);
}

button.addEventListener('click', getBMI)


