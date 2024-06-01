//write a function called reseveString that takes a string as an argument and return the string reverse

function reseveString(string) {
  let arr = string.split(' ').reverse().join(' ');
  return arr;
}

console.log(reseveString('JavaScript is the most language'));


//Showing array item to dom

let list = document.getElementById('list');

users = [
  { name: 'saim', id: 2, age: 26 },
  { name: 'jakir', id: 3, age: 25 },
  { name: 'rupa', id: 4, age: 21 },
];

users.forEach((user) => {
  list.innerHTML += `<h2> ${user.name} </h2> <p> ${user.age} </p> <h4> ${user.id} </h4>`;
});

//create a function called extractDomain takes an email address as string  and returns only domain part

function extractDomain(email) {
  let domain = email.indexOf('@');

  return email.substring(domain + 1);
}

console.log(extractDomain('smsaimhossin@gmail.com'));


//write a function called wordExit that takes two string : a sentence and a word .The function should true if the the word is exit in the sentence otherwise false

function wordExit(sentence, word) {
  let findSentence = sentence.toLowerCase();

  let findWord = word.toLowerCase();

  if (findSentence.includes(findWord)) {
    return `${word} present in the sentence`;
  } else {
    return `${word} not found`;
  }
}

console.log(wordExit('JavaScript is the most language', 'am'));


//another example

function evenNumber(num) {
  let arr = [2, 5, 6, 7, 10, 13, 14];

  let evenNum = arr.filter((num) => num % 2 === 0);
  return evenNum;
}

console.log(evenNumber());


//Create a function callded removeCharcter takes  a string and a chracter  to remove .The function should return the string with all occurance of the specified character removed

mySentence = 'A fox is jumping over the river';

function removeCharcter(string, charcter) {
  return string.toLowerCase().split(charcter.toLowerCase()).join(' ');
}

console.log(removeCharcter(mySentence, "r"));

let fruits = [
  'banana',
  'apple',
  'orange',
  'banana',
  'apple',
];

let removeDuplicate = fruits.filter((item, index) => fruits.indexOf(item) === index);

console.log(removeDuplicate);

