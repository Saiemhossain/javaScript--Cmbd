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



