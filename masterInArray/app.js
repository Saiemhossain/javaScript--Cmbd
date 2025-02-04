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
