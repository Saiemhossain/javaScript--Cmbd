const hamburger = document.getElementById('hamburger');

const mobileMenu = document.querySelector('.mobile-menu');
const menuOpen = document.querySelector('.open');
const menuClose = document.querySelector('.close');


menuOpen.addEventListener('click', () => {
  mobileMenu.style.left = '0';
  menuOpen.style.display = 'none';
  menuClose.style.display = 'block';
});

menuClose.addEventListener('click', () => {
  mobileMenu.style.left = '-100%';
  menuOpen.style.display = 'block';
  menuClose.style.display = 'none';
});