//post Api showing

const POST_API = 'https://jsonplaceholder.typicode.com/posts';
const postDiv = document.querySelector('.posts');

function fetchApi(url) {
  fetch(url)
    .then(response => response.json())
    .then(post => displayPost(post));
}

function displayPost(posts) {
  let newPost = posts.slice(0, 25);
  newPost.forEach(post => {
    postDiv.innerHTML += `
    <div class="box">
  
  <h4> ${post.id} </h4>
  <h2> ${post.title} </h2>
  <h1> ${post.body} </h1>
  
 </div>
    
    
    `;
  })
}

fetchApi(POST_API);


//Comment Api showing

const COMMENT_API = 'https://jsonplaceholder.typicode.com/comments';

function fetchApi(url) {
  fetch(url)
    .then(response => response.json())
    .then(comment => dispayComment(comment));
}

fetchApi(COMMENT_API);

function dispayComment(posts) {
  let newComment = posts.slice(0, 30);

  newComment.forEach(post => {
    postDiv.innerHTML += `
     <div class="box">
  
  <h4> ${post.id} </h4>
  <h2> ${post.name} </h2>
  <h4> ${post.email} </h4>
  
 </div>
    
    
    `;
  })
}

//Photos Api showing

const PHOTO_API = 'https://jsonplaceholder.typicode.com/photos';

function fetchApi(url) {
  fetch(url)
    .then(response => response.json())
    .then(photo => displayPic(photo));
}

function displayPic(photos) {
  let newPic = photos.slice(0, 30);
  newPic.forEach(photo => {
    postDiv.innerHTML += `
     <div class="box">
  <img src= ${photo.url} alt= ${photo.title}>
  <h4> ${photo.id} </h4>
  
 </div>
    
    `;
  })
}

fetchApi(PHOTO_API);


//user api showing
const USER_API = 'https://randomuser.me/api/?results=50';

function fetchApi(url) {
  fetch(url)
    .then(response => response.json())
    .then(user => userDisplay(user));
}

function userDisplay(users) {
  let newUser = users.results;

  newUser.forEach(user => {
    postDiv.innerHTML += `
    <div class="box">
  <img src= ${user.picture.medium} alt=>
  <h4>  ${user.email}</h4>
  <h2> ${user.name.first}  ${user.name.last}  </h2>
  
 </div>
    
    `;
  })
}

fetchApi(USER_API);


const generateBtn = document.querySelector('#generate');

const heading = document.querySelector('.advice');



const ADVICE_API = 'https://api.adviceslip.com/advice';

function fetchApi(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => displayAdvice(data));
}

function displayAdvice(data) {
  // console.log(data.slip.advice);
  heading.innerHTML = data.slip.advice;
}
 fetchApi(ADVICE_API);

generateBtn.addEventListener('click', ()=> fetchApi(ADVICE_API));




