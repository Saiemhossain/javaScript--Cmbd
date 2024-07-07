const fruites = ['mango', 'apple', 'banana', 'orange'];

// to add some items

fruites.push('pineapple');

// function use kore array te forEach Use korbo

function myFruites(fruit) {
  // console.log(fruit);
}

fruites.forEach(myFruites);

// abar forof use kore o arry access kora zay

for (const fruit of fruites) {
  // console.log(fruit);
}

const myCountry = {
  name: 'Bangladesh',
  city: 'Dhaka',
  population: '16cr',
};

// to add item on object

myCountry.district = 64;

for (const key in myCountry) {
  // console.log(myCountry[key]);
}

// arry er vitor object access korte hole

const stack = [
  
  {
    name: 'Front End',
    property: 'Html, Css, JavaScript',
    foundation: 'JavaScript',
    price: 6000,
  },
  {
    name: 'Back End',
    property: 'Html, Css, Javascript, vue',
    foundation: 'JavaScript',
    price: 5000,
  },
  {
    name: 'Marn Stack',
    property: 'Html, Css, Javascript, vue, nagular',
    foundation: 'PHP',
    price: 5000,
  },
];



stack.forEach(info => {
  // console.log(info.property)
  // console.log(info.name);
});


// map method

let numbers = [1, 2, 3, 4, 5, 6, 7];

let newNum = numbers.map(num => num + 5);
// console.log(newNum);

const allFruits = ['Mango', 'Apple', 'Banana', 'Orange'];

const capB = allFruits.filter(fruit => fruit.toLowerCase().includes('b'));

// console.log(capB);


// fiter method

const fruitLent5 = allFruits.filter(fruit => fruit.length > 5);

// console.log(fruitLent5);

const fruitWithG = allFruits.filter(fruit => fruit.toLowerCase().includes('g'));

// console.log(fruitWithG);

const forNums = [];

numbers.forEach(num => {
  if (num > 5) {
    forNums.push(num);
  }
})

// console.log(forNums);

let stackUser = stack.filter(sk => sk.foundation === 'JavaScript');


console.log(stackUser);

/*Reduce Method*/

const myTotal = numbers.reduce((acc, curValue) => {
 return acc + curValue
}, 0);

console.log(myTotal);


const coursePrice = stack.reduce((acc, course) => acc + course.price, 0);

// console.log(coursePrice);
