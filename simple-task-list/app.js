const taskInput = document.querySelector('#taskInput');
const btn = document.querySelector('#addButton');
const taskList = document.querySelector('#taskList');

btn.addEventListener('click', () => {
  let newInput = taskInput.value.trim();
  let newTaskList = document.createElement('li');
  newTaskList.textContent = newInput;
  taskList.appendChild(newTaskList)

const removeBtn = document.createElement('button');
removeBtn.textContent = 'remove';
removeBtn.classList.add('remove-btn');
removeBtn.addEventListener('click', () => {
  newTaskList.remove();
 
});
 newTaskList.appendChild(removeBtn);
})



