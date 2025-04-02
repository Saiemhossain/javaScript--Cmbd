//How to create an Array in js

const fruits = ['apple', 'mango', 'jackfruit', 'guava', 'pineapple'];

const newFruits = new Array(
  'apple',
  'mango',
  'jackfruit',
  'guava',
  'pineapple'
);

console.log(newFruits);

//How to get element  an Array in js

const element = fruits[2];

console.log(element);


//How to add element  an Array in js

const addFruit = fruits.push('orange');
console.log(addFruit);

console.log(fruits);


//How to remove element  an Array in js

const removeFruit = fruits.pop();

console.log(removeFruit);


//How to copy and copy   an Array in js

const fruitCopy = fruits.slice();

const isFullCopy = fruitCopy === fruits;

console.log(isFullCopy) //return false  ;

console.log(fruitCopy);


//How to determine if a element is an array in js

const determineElement = fruits.includes('jackfruit');

console.log(determineElement);

//How to determine if a value is an array in js


const determineValue = Array.isArray(fruits);

// How to array destructuring in js

// let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];

console.log(tomato, mushroom, carrot);

let veg = ['🍅', '🍄', '🥕'];

var tomato1 = veg[0];
var mushroom1 = veg[1]
var carrot1 = veg[2];


console.log(tomato1);


// How to array skip a value in js

let [tomato, mushroom, carrot] = ['🍅', '🍄',];

console.log(tomato);
console.log(mushroom);


// How to rest parameter in array in js

let [tomato, mushroom, carrot, ...rest] = ['🍅', '🍄', ' 🍆', '🥔', '🥕', '🥒', '🥜', '🍠'];

console.log(tomato);

console.log(rest);


// How to spread oparators in array in js

const salad = ['🍅', '🍄', ' 🍆', '🥔', '🥕', '🥒', '🥜', '🍠'];

const sladCloned = [...salad];

console.log(sladCloned);

//How to swap values with destructuring


let first = '😀';

let second = '😍';

[first, second] = [second, first];

console.log(first);

console.log(second);

//How to merge in array

const emotion = ['😀', '😍'];

const vegitables = ['🍅', '🍄', ' 🍆'];

const mergeVeg = [...emotion, ...vegitables];

console.log(mergeVeg);


//How to concat tow arrays

const first = [1, 2, 3];
const second = [4, 5, 6];

let concatArr = first.concat(second);
// console.log(concatArr);

//Join method

const emotion = ['😀', '😁', '😂', '🤣', '😍', '😎', '🤨', '😥']

const joined = emotion.join('<=>');

// console.log(joined);

//Fill method

const colors = ['red', 'pink', 'green'];

// colors.fill('pink');

colors.fill('pink' , 1,3);

// console.log(colors);


//Includes method   //always return true/ false

const names = ['Anamika', 'Aric', 'Athina', 'bob'];

// console.log(names.includes('bob'));

//indexOf method



const person = ['Anamika', 'Aric', 'Athina', 'bob'];
 
let index =  person.indexOf('Anamika');

// console.log(index);

let artists = [
  'John White Abbott',
  'Leonardo da vinci',
  'Charlse Aubre',
  'Barent Avercamp',
];

let sorted = artists.sort();

// console.log(sorted);

const names1 = ['tom', 'alex', 'bob'];

names1.splice(0,2, 'zack');


// console.log(names1);

const arr = [1, 2, 3, [4, 5]];

// console.log(arr.flat());

//copyWithin method

const arr2 = [1, 2, 3, 4, 5];

arr2.copyWithin(1, 3,4)

// console.log(arr2);


//toSorted method atar moto same toReversed()

const months = ['March', 'Jan', 'Feb', 'Dec'];
const sortedMonth = months.toSorted()

// console.log(sortedMonth); // retun reverse like 'Dec' , 'Feb', 'Jan''March',

// The Customer Array

let customers = [
  {
    id: 1,
    f_name: 'Abby',
    l_name: 'Thomas',
    gender: 'M',
    married: true,
    age: 32,
    expense: 500,
    purchased: ['shampoo', 'Toys', 'Book']
  },
  {
    id: 2,
    f_name: 'Jerry',
    l_name: 'Tom',
    gender: 'M',
    married: true,
    age: 64,
    expense: 100,
    purchased: ['Stick', 'Blade']
  },
  {
    id: 3,
    f_name: 'Dianna',
    l_name: 'Cherry',
    gender: 'F',
    married: true,
    age: 22,
    expense: 1500,
    purchased: ['Lipstick', 'Nail Polish', 'Bag', 'Book']
  },
  {
    id: 4,
    f_name: 'Dev',
    l_name: 'Currian',
    gender: 'M',
    married: true,
    age: 82,
    expense: 90,
    purchased: ['Book']
  },
  {
    id: 5,
    f_name: 'Anamika',
    l_name: 'Akter',
    gender: 'F',
    married: false,
    age: 10,
    expense: 300,
    purchased: ['Toys']
  },
];

//Build customer data for senior cityzens

let seniorCityzens = customers.filter((customer) => {
  return customer.age > 58;
});

console.log(seniorCityzens);

//Build customer data with a tittle and fullName

let fullName = customers.map((customer) => {
  return customer.f_name.concat(' ' ,customer.l_name);
});

console.log(fullName);

//Build customer data with a title

let title = customers.map((customer) => {
  let title = '';
  if (customer.gender === "M") {
    title = 'Mr'
  } else if (customer.gender === 'F' && customer.married) {
    title = "Mrs"
  } else {
    title = "Miss"
  }

  return title + ' ' + customer.f_name + ' ' + customer.l_name;
})

console.log(title);

// Get the avg age who purchased books

let bookBuyers = customers.filter((customer) => customer.purchased.includes('Book'));

console.log(bookBuyers);

let bookBuyersAge = bookBuyers.map((customers) => customers.age);

console.log(bookBuyersAge);

let totalAgeOfBookBuyers = bookBuyersAge.reduce((acc, total) => acc + total, 0);

console.log(totalAgeOfBookBuyers);

let avgAge = totalAgeOfBookBuyers / bookBuyersAge.length;

console.log(avgAge);


//Has any Young Customers?

let hasYoungCustomers = customers.some(customer => customer.age < 30);

if (hasYoungCustomers) {
  console.log('There are young customers.');
} else {
  console.log('There are no young customers.');
}

console.log();

//print young customer data .Young customer age should be under 18 years

let dataOfYoungCustomers = customers.filter((customer) => customer.age < 12)
  .map((customer) => customer.f_name + ' ' + customer.l_name);

  console.log(dataOfYoungCustomers);

//Find out the avg cost of married customers

let marriedCustomersCost = customers.filter((customer) => customer.married)
  .map((customer) => customer.expense)
  .reduce((acc, total) => acc + total, 0);

console.log(marriedCustomersCost);

let numOfMarriedCustomer = customers.filter((customer) => customer.married);

console.log(numOfMarriedCustomer);

let avgAgeOfMarriedCustomer = marriedCustomersCost / numOfMarriedCustomer.length;

console.log(avgAgeOfMarriedCustomer);

// create an array of 5 elements using the rray contructor

const arrayLiteral = new Array(1, 2, 3, 4, 5);

console.log(arrayLiteral);


// create an array of 3 empty slots

const emptySlot = new Array(3);

console.log(emptySlot);


// create an array of 6 elements using the array literals and access  the fourth element in the array using its length property

const myArray = [10, 20, 30, 40, 50, 60];

const fourthElem = myArray[3];

console.log(fourthElem);

// How to get elements from an array in js

let arr = [10, 20, 30, 40];
console.log(arr[0]);
console.log(arr[2]); 

//how to remove element from an array?

arr.pop()
console.log(arr);

//how to add element from an array?

arr.push(66)
console.log(arr);


//how to copy and clone element from an array?
let originalArr = ['apple', 'mango', 'pineapple'];

let copiedArr = [...originalArr];

console.log(copiedArr);

//How to determine if a value is in array in js?

let fruits = ['apple', 'mango', 'pineapple'];

let ifHaveFruit = fruits.includes('apple');

console.log(ifHaveFruit);

//or you can use

 ifHaveFruit = fruits.some((fruit) => fruit === 'apple');

console.log(ifHaveFruit);

//array desturcturing in js

let fruits1 = ['apple', 'mango', 'banana'];

let [first, second, third] = fruits1;

console.log(first);
console.log(second);
console.log(third);

//how to assign default value in array

let values = [undefined, 20];

let [a = 5, b = 10, c = 15] = values;

console.log(a);  
console.log(b); 
console.log(c); 


//how to skip a value from an array

let numbers = [10, 20, 30];

let [first, ,third ] = numbers;

console.log(first);  

//how to assign Default Value in Nested Array

let nestedArray = [10, [undefined, 30]];

let [x = 5, [y = 15, z = 25]] = nestedArray;

console.log(x);
console.log(y); 
console.log(z); 

//Spread (...spread): একটি অ্যারে বা অবজেক্টকে আলাদা মানে বিভক্ত করে।

let fruits = ['apple', 'mango', 'banana'];

let spreadFruits = [...fruits];

console.log(spreadFruits);



//Rest (...rest): বাকি সব মান সংগ্রহ করে একটি অ্যারেতে রাখে।


let numbers = [10, 20, 30, 40, 50];


let [first, second, ...rest] = numbers;

console.log(first);  
console.log(second); 
console.log(rest);  


// how to  create and update an access in array in js

//👉 1️⃣ Creating an Array


let fruits1 = ['apple', 'mango', 'banana'];

console.log(fruits1);

//👉 2️⃣ Accessing Elements in an Array

let someFruits = ['apple', 'mango', 'banana'];

console.log(someFruits[0]);
console.log(someFruits[1]);
console.log(someFruits[2]);

//👉 3️⃣ Updating an Element in an Array

let person = ['anamika', 'aric', 'athina'];

person[3] = 'abir';

console.log(person);

// fromAsync method

const ret = Array.fromAsync({
  0: Promise.resolve('Saim'),
  1: Promise.resolve('Google'),
  2: Promise.resolve('Mac Mini'),
  length:3,
}).then((value) => console.log(value))




// with method --> it replace the number based on index

const numbers = [1, 2, 3, 4, 5, 7];

const newNum = numbers.with(5, 6);



// Grouping with forEach (more appropiate way)

console.log(newNum);

const employees = [
  { name: 'Bob', dept: 'Eng', salary: 6000 },
  { name: 'Alex', dept: 'HR', salary: 4000 },
  { name: 'Samina', dept: 'Sales', salary: 7000 },
  { name: 'John', dept: 'Eng', salary: 5500 },
  { name: 'Fahim', dept: 'Eng', salary: 4700 },
];

const groupOfDep = {};


employees.forEach(employee => {
  const dept = employee.dept; 
  if (!groupOfDep[dept]) {
    groupOfDep[dept] = []; 
  }

  groupOfDep[dept].push(employee); 
});


console.log(groupOfDep);

 
//finding salary 

employees.forEach((emp) => {
  let Empsalary = emp.salary;
  // console.log(Empsalary);
  
  if (Empsalary >= 5000) {
    console.log(`${emp.name} more than 5k`);
  } else {
    console.log(`${emp.name} less than 5k`);
  }
 
  
});

console.log(groupOfDep);
