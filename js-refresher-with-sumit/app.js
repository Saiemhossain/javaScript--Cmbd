//01 regular function

function hello() {
  console.log("hello world");
}
hello();



//02 function expression

let helloSaim = function () {
  console.log("hello world");
}
helloSaim();


//03. named function

const msg = function hello() {
  console.log("hello world")
}
msg();

//04. arrow function

const helloUser = () => {
  return {
    a: 5,
    b:6
  }
}
console.log(helloUser())

//04. anonymous function

function hello() {

  return function () {
    
   console.log('Hello World')
 }
}
hello()();

//0.5 event handler

const button = document.querySelector('#btn');

function Hi() {
  console.log('you clicked me');
}

button.addEventListener('click', Hi);

//06.array method

let fruits = ['Mango', 'Pineapple', 'Banana', 'Lichi', 'Lemon'];

// const result = fruits.findIndex((f) => f === "Pineapple");

// const result1 = fruits.find((f) => f === "Pineapple");

// console.log(result);
// console.log(result1);

// let result = fruits.filter((f) => f === "Mango" || f === "Lichi");

// console.log(result);

// const result2 = fruits.splice(2, 2, 'Jackfruit');

// const resultCon = fruits.concat("Jackfruit")

// let result = fruits.map((f) => {
//   if (f === 'Mango') {
//     return 'Mango'
//   } else {
//     return 'N/A'
//   }
// });

// console.log(result2);

const res = [];

for (i = 0; i <= fruits.length; i++){
  if (fruits[i] === 'Mango') {
    res.push('Mango');
  } else {
    res.push('N/A');
  }
}

console.log(res);


//07.reduce method in array

let numbers = [1, 2, 3, 4, 5,6];

let result = numbers.reduce((total, currValue) => total + currValue, 0)

console.log(result)

//08.for in loop for Object

let person = {
  name: 'Saim',
  age: 28,
  country: 'Bangladesh'
}

for (key in person) {
  console.log(person[key])
}

//08.for of loop for an array

let users = ['Jamal', ' Kamal', 'Rahim', 'Karim'];

for (x of users) {
  console.log(x);
}

//09 Object

let language = {
  name: 'Javascript',
  year: 1995,
  creator : 'Bnandon Aich'
}

language.popularity = '100%';
console.log(language)

console.log(Object.keys(language));
console.log(Object.values(language));
console.log(Object.entries(language));

//10 spread  oparator in array

const student = ['Abir', 'Saim'];

const stuInfo = [...student]; //copy hoise

stuInfo.push('Sadia'); 

console.log(stuInfo);
console.log(student);

//11 spread  oparator in Object

let languages = {
  name: 'Javascript',
  year: 1995,
  creator: 'Bnandon Aich',
};

const resust = {
  ...languages,
}
console.log(languages);


//11 rest  oparator

function sum(...rest) {

  return rest.reduce((total, currrValue) => total + currrValue, 0);

}

console.log(sum(4, 6, 8, 6, 7));

//12ternary Oparator

const a = 6;

const checkResult = a % 2 === 0 ? 'Even' : 'Odd';

console.log(checkResult);
 
//distructuring object

const user = {
  name: 'Sumit',
  id: 2,
  age: 40,
  education: {
    degree: 'Graduate',
  },
};

const { name, age,  } = user;

console.log(name, age)

const {
  education : { degree }
} = user;

console.log(degree)

