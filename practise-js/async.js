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


