const quoteElement = document.querySelector('#quote');
const button = document.querySelector('#btn');
const authorElement = document.querySelector('#author');


const urlAPI = 'https://api.api-ninjas.com/v1/quotes?category=food';

const keyAPI = 'ihQHGcE2RzWyErxaTqYF8w==dtWF4ooeYO9ojq1O';

const getQuote = () => {
  fetch(urlAPI, {
    headers: { 'X-Api-Key': keyAPI },
  }).then(data => data.json()).then(item => {
    console.log(item[0]);
    quoteElement.textContent = item[0].quote;
    authorElement.textContent = item[0].author
    
  }).catch(error => {
    console.log('Data fetching errors', error);
  });
};

button.addEventListener('click', getQuote)
