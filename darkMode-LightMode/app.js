const btn = document.getElementById('btn');
const icon = document.getElementById('icon');

btn.addEventListener('click', () => {
  document.body.classList.toggle('light')
  document.body.classList.toggle('dark')

  icon.classList.toggle('fa-sun')
  icon.classList.toggle('fa-moon')
  
})



