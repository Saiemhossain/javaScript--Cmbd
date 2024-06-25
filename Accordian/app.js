
  const btn = document.getElementById('btn');
const modal = document.getElementById('modal');
  console.log(modal)


  btn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  
  
modal.addEventListener('click', () => {
  modal.style.display = 'none'
})

  

