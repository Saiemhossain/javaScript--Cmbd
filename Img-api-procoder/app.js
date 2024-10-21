const imgContainer = document.querySelector('#image-container');

const urlAPI = 'https://picsum.photos/v2/list';

const getPic = () => {
  fetch(urlAPI)
    .then(data => data.json())
    .then(items => {
    console.log(items);
    items.forEach((photoObj) => {
      const newContainer = document.createElement('div');
      newContainer.classList.add('image-container-item');

      const newImg = document.createElement('img');
      newImg.src = photoObj.download_url;
        newContainer.appendChild(newImg)

      const newAuthor = document.createElement('p');
      newAuthor.textContent = photoObj.author;

      newContainer.appendChild(newAuthor)
      imgContainer.appendChild(newContainer)
      
    })
  })
}

getPic();