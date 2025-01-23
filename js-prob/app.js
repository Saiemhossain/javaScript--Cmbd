

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

//Find the second largest word in an array

function secondLarge(arr) {
   arr.sort((a, b) => b - a);
  return arr[1];
}

console.log(secondLarge([1,2,3,4,5]));

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
