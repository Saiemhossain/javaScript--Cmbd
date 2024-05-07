//01. Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)

let num1 = 20;
let num2 = 40;

let maxNum;

if (num1 > num2) {
  maxNum = num1;
} else {
  maxNum = num2;
}

console.log('Maximum number is:',maxNum);


//02. Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take a single variable and check using if else condition)

let number = 10;

if ( number >0) {
  console.log('Its positive number');
}else if (number < 0) {
    console.log('Its negative number');
} else {
  console.log('It is zero!');
}


//03. Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

let number1 = 50;

if (number1 % 10 === 0) {
  console.log('the number is divisible');
} else {
  console.log('the number is not divisible');
}

console.log('the divisibel number:', number1);


//04. Solve the problem with Javascript  to check whether a number is even or odd.

let value = 70;
if (value % 2 === 0) {
  console.log('It is an even number');
} else {
  console.log('It is an odd number');

}



//06.Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)

let temperature = 28;

if (temperature >= 30) {
  console.log('It is hot weather');

} else if (temperature <= 25) {
  console.log('It is cold weather');

} else {
  console.log('It is normal weather');
}

//07.Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

let point = 34;
let point1 = 25;
let point2 = 30;
let maxPoint;

if (point2 >= point && point2 >= point1) {
  maxPoint = point2;
} else if (point1 >= point && point1 >= point2) {
  maxPoint = point1;
} else {
maxPoint = point
}
console.log('max point value is:',maxPoint);



//08.Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

let valueOne = 63;

valueOne % 2 === 0 ? console.log('It is an even number') : console.log('It is an odd number');

//09.Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.

let numOne = 38;
let numTwo = 35;

if (numOne >=30 && numTwo >= 30) {
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