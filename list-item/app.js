let form = document.querySelector('#form');
const submit = document.getElementById('submit');
const inputItem = document.getElementById('input');
const bazarList = document.querySelector('#bazar-list');
const list = document.getElementById('list');




form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!inputItem.value) {
    alert('Enter data');
    return;
  }


  const div = document.createElement('div');
 
  div.classList.add('list');
  
  const input = document.createElement('input');
  input.value = inputItem.value;
  input.classList.add('list-item');
  input.setAttribute('readonly', 'readonly');
  div.appendChild(input);

  bazarList.appendChild(div);


  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');
  deleteBtn.innerText = 'Delete';
  div.appendChild(deleteBtn);


    const edit = document.createElement('button');
    edit.classList.add('delete');
    edit.innerText = 'Edit';
  div.appendChild(edit);
  
  edit.addEventListener('click', (e) => {
    if (e.target.innerText === 'Edit') {
      input.removeAttribute('readonly');
      edit.innerText = 'Save';
      input.focus();
    } else {
      edit.innerHTML = 'Edit';
      input.setAttribute('readonly', 'readonly');
    }
  })

  deleteBtn.addEventListener('click', () => {
    bazarList.removeChild(div);
  })

  inputItem.value = '';


})


