function logInUser(username) {
  const customEvent = new CustomEvent('userLoggedIn', {
    detail: {
      name: { username },
    },
  });

  document.dispatchEvent(customEvent);


}

document.addEventListener('userLoggedIn', (e) => {
  const user = e.detail.name.username;
  document.getElementById('welcome').textContent = `welcome ${user}`
});