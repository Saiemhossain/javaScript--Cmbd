const imgContainer = document.querySelector('#image-container');

const urlAPI = 'https://randomuser.me/api/?results=50';


const getUser = () => {
  fetch(urlAPI)
    .then(user => user.json())
    .then(data => {
      console.log(data);
      const newUser = data.results;
      newUser.forEach((pic) => {
        const newContainer = document.createElement('div');
        newContainer.classList.add('image-container-item');
        const newImg = document.createElement('img')
        newImg.src = pic.picture.large;
        newContainer.appendChild(newImg);
        const newAuthor = document.createElement('p');
        newAuthor.textContent = pic.name.first;
        newContainer.appendChild(newAuthor)

        imgContainer.appendChild(newContainer)

      })
      
  })
}

getUser();
