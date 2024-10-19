const randomQuotes = [
  {
    quote: 'Quality is not an act , it is a habit',
    author: 'Aristotle'
  },
  {
    quote: 'Believe in yourself! have faith in your abilities !without humble but reasonable confidence in your own powers you can not be successful or happy. ',
    author: 'Normal Vincent Peale',
  },
 
  {
    quote: 'Life is 10% what happens to ou and 90% how you react to it',
    author: 'Charles R. Swindoll',
 },
  {
    quote: 'If you are going through hell,keep going.',
    author: 'Winston Churchill',
  },
  {
    quote: 'Ever tried, Ever failed, No matter .Try again .Fail again.Fail better',
    author: 'Eleanor Roosevelt'  
  },
  {
    quote: 'With the new day comes new strength and new thought',
    author: 'Jk Franklin'
  },
 
];



const quoteElement = document.querySelector('#quote');
const button = document.querySelector('#btn');
const authorElement = document.querySelector('#author');



function autoQuote() {
  const randomQuoteNum = Math.floor(Math.random() * randomQuotes. length);

  quoteElement.textContent = randomQuotes[randomQuoteNum].quote;
  authorElement.textContent = randomQuotes[randomQuoteNum].author;
}

button.addEventListener('click', autoQuote)
