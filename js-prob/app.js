

// 01 Even or Odd Num

function isEvenNum(num) {
  return num % 2 === 0 ? 'Even Number' : 'Odd Number';
}

console.log(isEvenNum(7));

//02 Find Out Max num in array
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([4, 3, 5, 7, 2, 1]));

//03 Checkout Palindrome

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');

  return str === reversed;
}
console.log(isPalindrome('Hello'));
console.log(isPalindrome('madam'));

//3 Checkout FizBUZZ

for (i = 1; i <= 10; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log('buzz');
  }
}

//04 একটি স্ট্রিংয়ের দৈর্ঘ্য গণনা করুন

function getLength(str) {
  return str.length;
}

console.log(getLength('Bangladesh is a  beautiful country'));

//05 একটি স্ট্রিংকে উল্টো করে প্রিন্ট করুন।

function strReversed(str) {
  return str.split('').reverse().join('');
}

console.log(strReversed('Bangladesh is a  beautiful country'));

//6 অ্যারেতে একটি নির্দিষ্ট মান আছে কি না, তা চেক করুন।

function checkValueInArray(arr, value) {
  return arr.includes(value);
}

console.log(checkValueInArray([1, 2, 3, 4, 5, 6, 7], 7));


//07একটি সংখ্যাকে একটি অ্যারেতে কনভার্ট করুন (যেমন: 1234 => [1, 2, 3, 4])।

function numberToArray(num) {
  return num.toString().split('').map(Number);
}

console.log(numberToArray(1234));

//08 একটি স্ট্রিংয়ের প্রথম অক্ষর বড় হাতের অক্ষরে করুন।

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter('beautiful country'));

//09একটি অ্যারেকে ছোট থেকে বড় ক্রমানুসারে সাজান।

function sortArrayAscending(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortArrayAscending([5, 2, 3, 7, 9, 12, 25]));

//11 একটি অ্যারেতে কতটি ইভেন এবং কতটি অড্ড সংখ্যা আছে তা বের করুন।

function countEvenOdd(arr) {
  let eventCount = 0;
  let oddCount = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      console.log('eventCount');
    } else {
      console.log('oddCount');
    }
  }
}
countEvenOdd([1, 2, 3, 4, 5, 6]);

//12একটি অ্যারেতে সর্বনিম্ন সংখ্যা বের করুন।

function findMinNum(arr) {
  return Math.min(...arr);
}
console.log(findMinNum([1, 2, 3, 4, 6, 8]));

//13 দুটি অ্যারের মিলিত আইটেমগুলো বের করুন।

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 7, 8, 5, 10];

function getCommonItems(array1, array2) {
  return array1.filter(item => array2.includes(item));
}

// console.log(getCommonItems(array1,array2));

// 14 একটি স্ট্রিংয়ের সব অক্ষরকে ছোট হাতের অক্ষরে রূপান্তর করুন।

function getLowerCase(str) {
  return str.toLowerCase();
}
console.log(getLowerCase('BEAUTIFUL COUNTRY'));

//15একটি অ্যারেতে সংখ্যা গুলোর যোগফল বের করুন।

const numbers = [1, 2, 3, 4, 5];
function getTotal(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// console.log(getTotal(numbers));


//একটি স্ট্রিংয়ের প্রতিটি শব্দের প্রথম অক্ষর বড় হাতের অক্ষরে করুন।

function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const input = 'Bangladesh is a land of rivers';

// console.log(capitalizeWords(input));

//অ্যারেতে সবগুলো ডুপ্লিকেট সংখ্যা মুছে ফেলুন।

function removeDuplicate(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// console.log(removeDuplicate([1,2,3,2,4,6,5,6]));


//or

const arr = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicate(arr) {
  return [...new Set(arr)];
}

// console.log(removeDuplicate(arr));




//অ্যারেতে সংখ্যাগুলোর গড় মান বের করুন।

function getAvgNum(arr) {
  const total = arr.reduce((pre, curr) => pre + curr, 0);

  const average = total / arr.length;

  return average;
}

// console.log(getAvgNum([10,20]));

//একটি শব্দের প্রতিটি অক্ষরকে আলাদা আলাদা রাখুন (যেমন: "hello" => "h e l l o")

function getSeparate(word) {
  return word.split('').join(' ');
}

console.log(getSeparate('hello'));

//একটি অ্যারে থেকে সব null বা undefined মান মুছে ফেলুন

function removeNull(arr) {
  return arr.filter((item) => item !== null && item !== undefined)
}

const array = [1, null, 2, undefined, 3, null, 4, undefined];

console.log(removeNull(array));


//একটি নাম্বারকে বাইনারি তে কনভার্ট করুন

function toConvertBinary(num) {
  return num.toString(2)
}

// console.log(toConvertBinary(10));

//একটি স্ট্রিংয়ে কতবার নির্দিষ্ট একটি অক্ষর আছে তা বের করুন।

function countChar(str, char) {
  return str.split(char).length - 1;
}

console.log(countChar('Bangladesh is a land of river', 'a'));


//Hard level

//একটি নাম্বারের ডিজিটগুলোকে উল্টো করুন (যেমন: 1234 => 4321)।

function reverseDigits(num) {
  return Number(num.toString().split('').reverse().join(''));
}

// console.log(reverseDigits(4567));

//একটি অ্যারেতে কতগুলো প্যালিনড্রোম শব্দ আছে তা বের করুন।

function countPalindrome(arr) {
  return arr.filter((word) =>word === word.split('').reverse().join('')).length;
}

console.log(
  countPalindrome(['madam', 'hello', 'level', 'world', 'radar', 'java'])
);

//remove falsy value from an array

function falsyValue(arr) {
  return arr.filter(Boolean)
}

console.log(falsyValue([1, 2, 'hello world', null, undefined]));

//Calculate the sum of digits in a number.

function sumOfDigit(num) {
  return num.toString().split('').map(Number).reduce((pre,curr) => pre +curr ,0)
}

console.log(sumOfDigit(1234));

//Convert a string to title case.

function titleCase(str) {
  return str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() ).join(' ')
}

console.log(titleCase('Hello World, this is a test'));

//Check if two strings are anagrams.

function anagrams(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(anagrams('listen', 'silent'));
console.log(anagrams('teacher','student'));

//Flatten a nested array.

function flattenArr(arr) {
  return arr.flat(Infinity)
}

console.log(flattenArr([1, [2, [3, 4, [5, 6]]]]));

//second largest element /word in an array

function secLargeWord(arr) {
  if (arr.length < 2) {
    return 'array length must be two words or more';
  }


  let uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b.length - a.length);

  return uniqueArr[1]
}

console.log(secLargeWord(['banana', 'mango', 'apple', 'jackfruit', 'kiwi']));

//second largest number in an array

function seLargeNum(arr) {
  if (arr.length < 2) {
    return 'number length must be two or more';
  }

  let uniqeArr = [...new Set(arr)];

  uniqeArr.sort((a, b) => b-a)

return uniqeArr[1]
}

console.log(seLargeNum([1, 2, 3, 4, 5, 6, 7]));


//Find the intersection of two arrays.

function interSection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item) )
}

console.log(interSection([1, 2, 3, 4], [3, 4, 5, 6]));

//Find first letter from string
function findFirstLetter(str) {
  let letter = str.split('').join('')
  return First = letter.charAt(0)

}

console.log(findFirstLetter('Radar'));

//Check if a string starts and ends with the same character.
function startsAndEndsSame(str) {
  return str.charAt(0).toLowerCase() === str.charAt(str.length - 1).toLowerCase();
}

console.log(startsAndEndsSame('radar'));

//Count vowels in a string.

function countVowels(str) {
  return str.split("").filter((item) => 'aeiouAEIOU'.includes(item) ).length
}

console.log(countVowels("bangladesh"));

//Filter out numbers greater than a target value from an array

function filterNum(arr, target) {
 return arr.filter((num) => num <= target )
}

const numbers = [15, 20, 25, 30, 35];
const target = 25;

console.log(filterNum(numbers,target));


// Find the largest word in a string.

function largestWord(str) {
  return str.split(' ').sort((a,b)=> b.length - a.length)[0]
}

console.log(largestWord('bangladesh is a beautiful country'));

//Merge two arrays without duplicates

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3,4,5,6]

function mergeArr(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];

}

console.log(mergeArr(arr1, arr2));

// Find the largest word in a string.

function findSecondLarge(str){
  return str.split(' ').sort((a,b)=> b.length - a.length)[1]
}

console.log(findSecondLarge('bangladesh is a beautiful country'));

// Count occurrences of a character in a string.

function occurrences(str, char) {
  return str.split(char).length - 1
}
console.log(occurrences('hello world', 'o'));

function CountWord(str, word) {
  return str.split(' ').filter((w)=> w === word).length
}

console.log(CountWord('hello word hello', 'hello'));

// Generate a random number between 1 and 10.

function randomNum(num) {
  return Math.floor(Math.random(num) * 10) + 1;
}

console.log(randomNum());

// Check the number is prime or not

function isPrime(num) {
  if (num <= 1) {
    return false
  }
  for (let i = 2; i <  num; i++){
    if (num % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(7));

//fat arrow function

var javascript = {
  name: 'javaScript',
  lib: ['Angular', 'React', 'Vue'],
  myLib: function () {
    this.lib.forEach((a)=> console.log(`${this.name} has ${a}`))
  }
}

javascript.myLib();

//  truthy or falsy value কোনটা ?

// null , undefined, blank, false, 0, Nan এইগুলো  falsy value

 
//closure :Closure হলো একটি ফাংশন যা নিজের scope-এ থাকা ভ্যারিয়েবল বা parent function-এর ভ্যারিয়েবলগুলোর অ্যাক্সেস ধরে রাখে, এমনকি parent function execution শেষ হওয়ার পরেও।

function father() {
  var name = 'Anamika';
  function daughter() {
   
    console.log(name);
  }
  return daughter
}

const myDaughter = father()

myDaughter()


function outer() {
  var variable = 'i am outer variable';
   function inner() {
    console.log(variable);
  };

 return inner;
}

const mainOuter = outer();

mainOuter()

function greet() {
  var message = 'Hello Saim!'

  return function () {
    console.log(message);
  }
}

const myGreet = greet();

myGreet()



//Javascript inheritance : JavaScript-এ prototype inheritance হলো একটি প্রক্রিয়া যার মাধ্যমে একটি অবজেক্ট আরেকটি অবজেক্টের প্রোপার্টি এবং মেথড অ্যাক্সেস করতে পারে।


function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(`my name is ${this.name} and my age is ${this.age}`);
}

function Student(name, age, grade) {
  Person.call(this, name, age)
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);

const Student1 = new Student('saim', 25, '12th grade')

console.log(Student1);

//example without higher order function

let numbers = [1, 2, 3];
var result = [];


for (let i = 0; i < numbers.length; i++){
  result.push(numbers[i] * 2);
}

console.log(result);

//example-1 with higher order function


let numOfNumber = [1, 2, 3];

let ans = numOfNumber.map((number) => {
  return number * 2;
})

// console.log(ans);

//example-2 with higher order function

var players = [
  {
    name: 'Shakib',
    avg: 38.23,
  },
  {
    name: 'Tamim',
    avg: 40.23,
  },
  {
    name: 'Mushfiq',
    avg: 41.23,
  },
];


//example-2 without higher order function

var updatedPlayers = [];


for (let i = 0; i < players.length; i++){
  if (players[i].avg > 39) {
    updatedPlayers.push(players[i])
  }
}

console.log(updatedPlayers);

//example with higher order function


var updatedPlayers = players.filter((player) => {
  return player.avg > 38.0;
})

console.log(updatedPlayers);




//call method


var printName = function () {
    console.log(this.name);
  }

var person = {
  name: 'Saiem',
  age: 28,

}

// printName.call(person)

//apply method

var printName = function (city, country) {
  console.log(`${this.name} lives at ${city} in ${country}`);
}

person = {
  name: 'Shakib',
  age : 35,
}

printName.apply(person, ['New York', 'Usa']);

//example-3 arry.map 

const language = ['javascript', 'python', 'php', 'c'];

const newLan = language.map((lan) => {
  return lan.length ;
})

console.log(newLan);


const takeOrder = (customer) => {
  console.log(`taking order for ${customer}`);
}

const processingOrder = (customer) => {
  console.log('cooking completed');

  setTimeout(() => {
    console.log(`processing order for ${customer}`);
  }, 3000);
}

takeOrder('saim'); 
processingOrder('saim'); 

const hasMeeting = false;

// Js Promise

const meeting = new Promise((resolve, reject) => {
  if (hasMeeting) {
    resolve([
      {
        name: 'Google Technical Meeting',
        location: 'Google Meet',
        time: '10pm'
      }
    ])
  } else {
    reject('meeting already scheduled!')
  }
});

meeting.then((res) => {
  console.log(res);
})

.catch((err) => {
  console.log(err);
})

//Example of Immutable Array & Object (cannot change ) :


const arr1 = [1, 2, 3];

const arr2 = [...arr1 , 4];

console.log(arr1);
console.log(arr2);

const obj1 = {
  name: 'John',
  age : 35,
}

const obj2 = { ...obj1, age: 32 };

console.log(obj1);

console.log(obj2);


//Example of mutable Array & Object  (can change )  :

const arr1 = [1, 2, 3, 4];

arr1.push(5);

console.log(arr1);

let person = {
  name: 'saim',
  age: 28,
}

person.age = 32;

console.log(person);



//Get  XMLHttpRequest


function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText))
      } else {
        reject(new  Error('something went wrong with status', xhr.status) )
      }
    }

    xhr.onerror = function () {
      reject(new Error('network failed'))
    }

    xhr.send()

  })
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')
  .then((data) => console.log(data))
.catch((err)=> console.log(err))

//Post XMLHttpReq

function postData(url, data){
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText))
      } else {
        reject(new Error('something went worng with the status', xhr.status))
      }
    }
    xhr.onerror = function () {
      reject(new Error('something went wrong'))
    }

    xhr.send(JSON.stringify(data))
  })
}

postData('https://jsonplaceholder.typicode.com/posts', {
  title: 'New Post',
  body: 'This is a new post',
  userId : 1,
})
  .then((data) => console.log(data))
.catch((error) => console.log(error))

