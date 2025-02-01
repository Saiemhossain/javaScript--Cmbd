const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');
const tabNames = ['html', 'css', 'javascript']; // Names of the content sections


contents[0].classList.add('active');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
   
    contents.forEach(content => content.classList.remove('active'));

    const target = [...contents].filter(
      content => content.id === tabNames[index]
    )[0];
    target.classList.add('active');
  });
});
