const list = document.querySelector('#list');

list.addEventListener('click', (e) => {
  console.dir(e.target);
  if (e.target.matches('li')) {
    if (e.target.innerText === 'Javascript') {
      e.target.style.backgroundColor = 'red';
    } else if (e.target.innerText === 'Python') {
       e.target.style.backgroundColor = 'blue';
    } else if (e.target.innerText === 'Java') {
      e.target.style.backgroundColor = 'green'
    } else if (e.target.innerText === 'Python') {
        e.target.style.backgroundColor = 'gray';
    } else {
      e.target.style.backgroundColor = 'yellowGreen';

    }
   
    
  } 
})

function addMore() {
  const li = document.createElement('li');
  li.textContent = 'Node Js'
  list.appendChild(li);
}
