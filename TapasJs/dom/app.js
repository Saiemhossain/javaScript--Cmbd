// const pElem = document.querySelectorAll('p.info');
// const button = document.getElementById('btn');


// function highlight() {
//   pElem.forEach((ele) => {
//     ele.style.backgroundColor = 'yellow';
//   })
// }

// button.addEventListener('click', highlight);





// function match() {

//   const listItems = document.querySelectorAll('ul#list li');
  
// const inputBox = document.getElementById('search');
//   const inputValue = inputBox.value;

//   listItems.forEach((item) => {
//     item.style.display = item.innerText.toLowerCase().includes(inputValue.toLowerCase()) ? 'block' : 'none';
//   })

// }

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskBtn = document.getElementById('taskBtn');
  
  const taskValue = taskInput.value;

  if (taskValue === '') return;

  const li = document.createElement('li');
  li.className = 'item-list';

  
  li.innerText = taskValue;

  const dltBtn = document.createElement('button');
  dltBtn.innerText = 'Delete';
  dltBtn.className = 'delete-btn';
  li.appendChild(dltBtn);

  dltBtn.onclick = function () {
    taskList.removeChild(li);
  }

  taskList.appendChild(li)



}

function filter() {
  const matchInput = document.getElementById('matchInput');

  const matchValue = matchInput.value;
  const listItems = document.querySelectorAll('.item-list');
  
  listItems.forEach((item) => {
    item.style.display = item.innerText.toLowerCase().includes(matchValue.toLowerCase()) ? 'block' : 'none'
  })

  


}






