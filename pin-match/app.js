const generateBtn = document.querySelector('.generate-btn');
const generatePin = document.querySelector('.generatedPin');
const showKeyValue = document.querySelector('.showValue');
const submitBtn = document.querySelector('.submit-btn');
const wrongPin = document.querySelector('.wrong-pin');
const correctPin = document.querySelector('.correct-pin');
const chanceOftryLeft = document.querySelector('#tryLeft');

function generatedPin() {
  let randomNumber = Math.floor(Math.random() * 9000+1000);
  generatePin.value = randomNumber;
  generateBtn.disabled = true;
  generateBtn.style.backgroundColor = "green";
}

function tryleft() {
  let chance = chanceOftryLeft.innerText;
  if (chance > 0) {
    chanceOftryLeft.innerHTML =--chance;
  } else {
     chanceOftryLeft.innerText = 'nothing';
  }

}



 
function showKeyPadInput(number) {
  if (generatePin.value === '') {
    alert('please enter a value');
  } else {
    showKeyValue.value += number;
  }

  if (number === 'C') {
    showKeyValue.value = '';
  }
  
}

function checkGeneratedPin() {
  let newPin = generatePin.value;
  let currentPin = showKeyValue.value;

  if (newPin === currentPin) {
   showCorrectNotifiction();
  } else {
    showWorngNotifiction(); 
    tryleft();
}
}

function showWorngNotifiction() {
  wrongPin.style.display = "block";
  correctPin.style.display = 'none';
  generateBtn.style.backgroundColor = "red";
  submitBtn.style.backgroundColor = 'red';
  showKeyValue.value = ""
}
function showCorrectNotifiction() {
  correctPin.style.display = "block"
  wrongPin.style.display = 'none';
  submitBtn.style.backgroundColor = "green"
}
function hideNotifiction() {
  wrongPin.style.display = "none";
  correctPin.style.display = "none";
}
hideNotifiction();
generateBtn.addEventListener('click', generatedPin);
submitBtn.addEventListener('click', checkGeneratedPin);








