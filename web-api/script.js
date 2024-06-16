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


// Flag Api showing

const FLAG_API = 'https://restcountries.com/v3.1/all?fields=name,flags';
 
function fetchApi(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => display(data));
}
fetchApi(FLAG_API);

function display(flags) {
  let totalFlag = flags.slice(0, 30);
  totalFlag.forEach(flag => {
    postDiv.innerHTML += `
   
   <div class="box">
  <img src= ${flag.flags.png} alt="">
  <h4> ${flag.name.common} </h4>
  <h2> ${flag.name.official} </h2>
 </div>
   
   
    `;
 })
}

// Quiet Api showing

const QUIET_API = 'https://api.kanye.rest';

function fetchApi(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => displayQuote(data));
}

fetchApi(QUIET_API);

function displayQuote(quotes) {
  heading.innerHTML = quotes.quote;
}
generateBtn.addEventListener('click', () => fetchApi(QUIET_API));


// Food Api showing

const FOOD_API = 'https://www.themealdb.com/api/json/v1/1/random.php';

function fetchApi(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => displayFoods(data));
}
fetchApi(FOOD_API);

function displayFoods(foods) {
  let itemFoods = foods.meals[0];
  postDiv.innerHTML = `
   <div class="box">
  <img src="" alt="">
  <h4>  ${itemFoods.idMeal} </h4>
  <h2> ${itemFoods.strMeal}  </h2>
 </div>
  
  
  `;
}




