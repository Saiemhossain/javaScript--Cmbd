const inputs = document.querySelectorAll('#inputs input');
console.log(inputs);
const main = document.querySelector('#main');

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const card = document.createElement('div');
  card.classList.add('card');
  const img = document.createElement('img');
  img.classList.add('image');
  img.setAttribute('src', inputs[0].value);

  let h3 = document.createElement('h3');
  h3.textContent = inputs[1].value;
  let h4 = document.createElement('h4');
  h4.textContent = inputs[2].value;

  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(h4);

  main.appendChild(card);

 // to apply input form blank

 form.reset()

});

// console.log(form);
