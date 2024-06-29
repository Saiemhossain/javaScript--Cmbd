const postDiv = document.querySelector('.posts');
const errorDiv = document.querySelector('.error');
const loader = document.getElementById('loader');


function showLoder() {
  loader.style.display = 'block';
}

function hideLoder() {
  loader.style.display = 'none';
}



async function fetchApi() {
  try {
    showLoder();
    const response = await fetch('https://fakestoreapi.com/products?limit=25');
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const data = await response.json();


    hideLoder();
    display(data);


  } catch (error) {
    errorDiv.innerHTML = `<h2> ${error} </h2>`
  }
}

function display(products) {
  products.forEach(product => {
    postDiv.innerHTML += `
    <div class="box">
      <img src=${product.image} alt="">
      <h4> ${product.title} </h4>
      <h2> ${product.price} </h2>
    </div> 
    
    
    
    `; 
  })
}

fetchApi(); 


//photos Api showing
async function fetchApi() {
  try {
     showLoder();
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const data = await response.json();
    console.log(data);
    hideLoder()
    display(data)
    
  } catch (error) {
    errorDiv.innerHTML = `<h4> ${error} </h4>`
  }
}

function display(photos) {
  let newPhotos = photos.slice(0, 30);
  newPhotos.forEach(photo => {
    postDiv.innerHTML += `
    
  <div class="box">
      <img src=${photo.url} alt="">
      <h4>${photo.title} </h4>
      <h2> ${photo.id} </h2>
    </div>
    
    
    `;
  })
}
fetchApi();



//flag Api showing

async function fetchApi() {
  try {
    showLoder();
    const response = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,flags'
    );
    if (!response.ok) {
      throw new Error('Something went worng');
    }
    const data = await response.json();
 
    console.log(data);
    hideLoder();
  display(data)
  }
  catch (error)  {
errorDiv.innerHTML = `<h3> ${error} </h3>`
  }
}
function display(flags) {
  let newFlags = flags.slice(0, 30);
  newFlags.forEach(flag => {
    postDiv.innerHTML += `
    
    <div class="box">
      <img src= ${flag.flags.png} alt="">
      <h4> ${flag.name.common} </h4>
      <h4> ${flag.name.official} </h4>
      <h2>  </h2>
    </div>
    
    
    `;
  })
}

fetchApi();

//quote Api showing

async function fetchApi() {
  try {
    showLoder();
    const response = await fetch('https://api.kanye.rest');
    if (!response) {
      throw new Error('something went wrong')
    }
    const data = await response.json();
    // console.log(data);
    hideLoder();
    display(data)
  }
  catch (error) {
    errorDiv.innerHTML = `<h2> ${error} </h2>`
  }
}

function display(quote) {
  postDiv.innerHTML = `
  <div class="box">
      
      <h4> ${quote.quote} </h4>
     
    </div>
  
  `;
}
fetchApi();

//comments api showing

async function fetchApi() {
  try {
    showLoder();
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const data = await response.json();
    // console.log(data)
    hideLoder();
    display(data)
  } catch (error) {
    errorDiv.innerHTML = `<h4> ${error} </h4>`
}
}

function display(comments) {
  let newComments = comments.slice(0, 40);
  newComments.forEach(comment => {
    postDiv.innerHTML += `
    <div class="box">
      
      <h4> ${comment.name} </h4>
      <h2>  ${comment.email} </h2>
      <h2>  ${comment.body} </h2>
    </div>
    
    
    `;
  })
}

fetchApi();


//foods api showing
async function fetchApi() {
  try {
     showLoder();
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const data = await response.json();
    console.log(data);

  hideLoder();
    display(data)
  } catch {
    
  }
}

function display(foods) {
  postDiv.innerHTML = `
  <div class="box">
      <img src=${foods.meals[0].strMealThumb} alt="">
      <h4> ${foods.meals[0].strArea}  </h4>
      <h2></h2>
    </div>
  
  `;
}

fetchApi()

//users api showing
async function fetchApi() {
  try {
    showLoder();
    const response = await fetch('https://randomuser.me/api/?results=50');
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const data = await response.json();
    // console.log(data)
    hideLoder();
    display(data)
  } catch (error) {
    errorDiv.innerHTML = `<h4> ${error} </h4>`
  }
}

function display(users) {
  let newUser = users.results;
  newUser.forEach(user => {
    postDiv.innerHTML += `
  <div class="box">
      <img src=${user.picture.medium} alt="">
      <h4> ${user.email} </h4>
      <h2></h2>
    </div>
  
    `;


 })
}


fetchApi();

//advice api showing
async function fetchApi() {
  try {
    showLoder();
    const response = await fetch('https://api.adviceslip.com/advice');  
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const data = await response.json();
    // console.log(data);
    hideLoder();
    display(data)
  } catch (error) {
    errorDiv.innerHTML =` <h4> ${error} </h4> `
  }
}
function display(advice) {
  postDiv.innerHTML = `
  <div class="box">
      <img src="" alt="">
      <h4> ${advice.slip.id} </h4>
      <h2>${advice.slip.advice}</h2>
    </div>
  
  
  `;
}
fetchApi();


let fruits = ['apple', 'banana', 'lichi', 'mango', 'pineapple','orange'];

//appling forEach Method
fruits.forEach(fruit => {
  console.log(fruit);
});


//appling filter Method
let filterFruits = fruits.filter(function (fruit) {
  return fruit.length < 8;
});

// console.log(filterFruits);

//appling forloop Method
for (let fruit = 0; fruit < fruits.length; fruit++){
  console.log(fruits[fruit]);
}

//appling function on forloop 
function loopAnimal(animals) {
  for (let animal = 0; animal < animals.length; animal++){
    console.log(animals[animal])
  }
}

loopAnimal(animals = ['cat', 'dog', 'elephant', 'bear', 'fox']);


