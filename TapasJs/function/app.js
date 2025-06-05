console.log('funtion understanding');

//function as an expression

let printMe = function () {
  console.log('print me');
}

printMe();

//parameter & arguments

function add(a, b) {
  //here a , b are parameters
  const result = a + b;
  return result;
}

console.log(add(10, 15));



function total(p, q) {
  return p + q;
}

let result = total(10, 20);


function double(x) {
  return x * 2;
}

console.log(double(result));

//arrow function

let greet = () => {
  console.log('hello saim');
}

greet();


// Nested function

function outer() {
  console.log('Outer function');

  function inner() {
    console.log('Inner function');
  }

  inner();
}

outer();

//another way:

function outer() {
  console.log('I am outer function');

  function inner() {
    console.log('I am inner function');
  }

  inner();
}

let nestedInner = outer;

console.log(nestedInner());


//understanding return

function fetchWater(count) {
  console.log('fetching water for ', count);

  if (count === 0) {
    console.log('no water to fetch');
    return;
  }
  fetchWater(count-1)
}


fetchWater(5);

//rest parameter

function calc(x, y, ...rest) {
  console.log(x, y, rest);
}

// calc(10,20,30,40,50,60)



//callback function

const toCallbuzz = true;

function foo(func) {
  console.log('foo function called');

  if (toCallbuzz) {
    func();  //refering to buz function
  }
}

function buz() {
  console.log('buz function called');
}

foo(buz)



//pure function

let greetName = 'Hello' 

let greetuser = function (name) {
  return greetName + name;
}

console.log(greetuser(' saim'));

greetName = 'Hi';  // ressigning the let variable

console.log(greetuser(' saim'));

// A higher order function is a function that takes another function as an argument or returns a function as its result.


function myName(name) {
  return `Hello , ${name}`;
}





// here callback is a parameter that accepts a function to execute higher order function 

function higerOrder(callback, name) {
  console.log('Higher order function called');


  const result = callback(name);

  console.log(result);
  
}

higerOrder(myName, 'Saim')


