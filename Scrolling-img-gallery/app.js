let scrollContainer = document.querySelector('.gallery');
let backBtn = document.querySelector('#backBtn');
let nextBtn = document.querySelector('#nextBtn');


scrollContainer.addEventListener('wheel', (even) => {
  even.preventDefault();
  scrollContainer.scrollLeft += even.deltaY;
  scrollContainer.style.scrollBehavior = 'auto';
});

nextBtn.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900; //cause in the css gallery width 900px
})
backBtn.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft -= 900; //cause in the css gallery width 900px
})