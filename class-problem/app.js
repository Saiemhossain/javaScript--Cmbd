//14Create a while loop which prints values from 10 to 50
let value = 10;
while (value <= 50) {
  console.log(value);
  value++;
}

//01.Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)

let num1 = 40;
let num2 = 60;

if (num2 > num1) {
  console.log(`${num2} is the maximum between them`);
} else {
    console.log(`${num1} is the maximum between them`);
}

//02.Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take single variable and check using if esle condition)

let number = 10;

if (number > 0) {
  console.log(`${number} is  positive `);
} else if (number < 0) {
   console.log(`${number} is negative `);
} else {
     console.log(`${number} is zero `);
}

//03.Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

let value1 = 100;

if (value1 % 10 === 0) {
  console.log('It is divisiable');
} else {
    console.log('It is not divisiable');
}

//21.Solve the problem with Javascript  to check whether a number is even or odd.

function evenNumber(number) {
  let arr = [2, 3, 5, 6, 8, 7, 15, 18, 20, 22];

  let evenNum = arr.filter((number) => number % 2 === 0);
  return evenNum;
}

console.log(evenNumber());

//05.Solve the problem with Javascript  to check whether a character is in the alphabet or not.

function isAlphabet(character) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let isTrue = alphabet.includes(character);

  return isTrue;
}

console.log(isAlphabet('a'));
console.log(isAlphabet('B'));




//07.Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

let point = 41;
let point1 = 25;
let point2 = 30;
let maxPoint;

if (point2 >= point && point2 >= point1) {
  maxPoint = point2;
} else if (point1 >= point && point1 >= point2) {
  maxPoint = point1;
} else {
  maxPoint = point;
}
console.log('max point value is:', maxPoint);


//08.Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

let valueOne = 63;

valueOne % 2 === 0
  ? console.log('It is an even number')
  : console.log('It is an odd number');

//09.Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.
  

let numOne = 38;
let numTwo = 35;

if (numOne >= 30 && numTwo >= 30) {
  console.log('Both numbers are greater than 30');
} else {
  console.log('Both numbers are less than 30');
}

//10.Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)

let personAge = 16;

if (personAge >= 13 && personAge <= 19) {
  console.log('Teenager');
} else {
  console.log('Not a teenager');
}

//12.Given 3 subjects Math, English and Physics find the total marks and average of 3 subjects.
// Find out if the average grade:
// If Percentage >= 90% then print “Grade A”
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

let Math = 80;
let English = 85;
let Physics = 70;

let total = Math + English + Physics;

let average = total / 3;


let percentage = average;

if (percentage >= 90) {
  console.log('Grade A');
} else if (percentage >= 80) {
  console.log('Grade B');
} else if (percentage >= 70) {
  console.log('Grade C');
} else if (percentage >= 60) {
   console.log('Grade D');
} else if (percentage >= 40) {
   console.log('Grade E');
} else {
  console.log('Grade F');
}


//20.Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)

function weatherCondition(tem) {
  if (tem >= 30) {
    return 'hot'
  } else if (tem <= 25) {
    return 'cold';
  } else {
    return 'normal'
  }
}
console.log(weatherCondition(31));

//Create a function of adding two numbers.

function add(num1,num2) {
  return num1 + num2;
}

console.log(add(24, 44));

//19.Create a function which return whether the year is leap year or not

function isLeapYear(year) {
  if (year % 4 === 0) {
    return 'LeapYear'
  } else {
    return 'Not LeapYear'
  }
}
console.log(isLeapYear(2012));

//22.Splice and an given array - remove two items and adding two new elements

let animals = ['tiger', 'snake', 'dog', 'cat'];

let splice = animals.splice(2, 4, 'wolf', 'frog');

console.log(animals);

//23.Reverse and sort an array where arr = [2,45,4,55,12,42,34,78]

let arr = [2, 45, 4, 55, 12, 42, 34, 78];

console.log(arr.reverse((a, b) => b - a));

//25Reverse an given string. Where, - let text = “I love coding” - after reverse a string output will be - ‘gnidoc evol i’

let text = 'I love coding';

let reverseString = text.split('').reverse().join('');

console.log(reverseString);

//24. Create a object with car and add two function in there (called methods as well) and print out the the result calling two functions using this keyword as well

let student = {
  studenName: 'Onamika',
  age: 24,
  dob: '1998 2nd nov',
  isCollegeStudent: true,
  university: 'none',
  isAddmitted: function () {
    console.log(`${this.studenName} is addmitted in the college`)
  },
  highestMark: function () {
    console.log(`${this.studenName} highest mark : 80`)
  }
}

console.log(student.studenName);
student.isAddmitted();
student.highestMark();

//16 Create a for loop which prints values from 20 to 60

for (let i = 20; i <= 60; i++){
  console.log(i);
}