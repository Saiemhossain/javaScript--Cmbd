const randomQuote = [
  'Quality is not an act , it is a habit',
  'Believe in yourself! have faith in your abilities !without humble but reasonable confidence in your own powers you can not be successful or happy. ',
  'Life is 10% what happens to ou and 90% how you react to it',
  'If you are going through hell,keep going.',
  'Ever tried, Ever failed, No matter .Try again .Fail again.Fail better',
  'With the new day comes new strength and new thought',
];

const quoteElement = document.querySelector('#quote');
const button = document.querySelector('#btn');
const authorElement = document.querySelector('#author');

function autoQuote() {
  const randomQuoteNum = Math.floor(Math.random() * randomQuote.length);

  console.log(randomQuoteNum);

  quoteElement.textContent = randomQuote[randomQuoteNum];

}

button.addEventListener('click',autoQuote)

