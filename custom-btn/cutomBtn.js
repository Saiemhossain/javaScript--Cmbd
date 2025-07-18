const btn = document.querySelector('#btn');

const inpfile = document.querySelector('#inpfile');


btn.addEventListener("click", () => {
  inpfile.click();
  
})


inpfile.addEventListener('change', (e) => {
  btn.textContent = (e.target.files[0].name);
  
  let file = e.target.files[0];

  if (file) {
    btn.textContent = file.name
  }
  
})