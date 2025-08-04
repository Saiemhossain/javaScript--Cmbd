"use strict";

//Window Object :  The window object is the global object in JavaScript when you’re working in a browser environment.

//Global

// this keyword and window object

console.log('This at the global:', this); // window object

//object and function

// inside of an Object - Implicit Binding


//Implicit binding :  Implicit binding happens when you call a function using dot notation, and JavaScript automatically binds this to the object on the left of the dot.

const employee = {
  id: 1,
  firstName: 'Saim',
  lastName: 'Hossain',

  returThis: function () {
    return this;
  },

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }

}

console.log(employee.id); //1
console.log(employee.firstName); //Saim

console.log(employee.returThis()); // reffering the same object


console.log(employee.getFullName());


const tom = {
  name: 'Tom',
  age : 7,
}

const jerry = {
  name: 'Jerry',
  age : 3,
}

function greetMe(obj) {
  obj.logMessage = function() {
    console.log(`${this.name} is ${this.age} years old`);
  }

  console.log(obj);
}

greetMe(tom);
greetMe(jerry)

tom.logMessage();
jerry.logMessage();

//Inside Function

function sayName() {
  console.log("this inside a function", this);
}

sayName() // reffering window object means indicating global scope


//Nested Function

function outer(a) {
  console.log('this is an outer function', this);
  
  return function inner(b) {
     console.log('this is an inner function', this);
  }


}

const outerResult = outer(5); 

outerResult(3); // using strict mode nested function this  result will be undefined



// Inside the Arrow function

const getFood = () => {
  console.log(this);
}

getFood() // reffering window object


const food = {
  name: 'mango',
  color: 'yellow',
  
  getDesc: () => `${this.name} is ${this.color}`

  // getDesc: function () {
  //   return `${this.name} is ${this.color}`;
  // }
}

console.log(food.getDesc()); // Arrow function নিজের this বানায় না — সে তার বাইরের (parent scope) this নেয়। so result will be undifined but normal function er jonno result will be mango is yellow



//explicit binding - call, apply, bind

//the call method

function greeting() {
  console.log(`Hello , ${this.name} belongs to ${this.address}`);
}



const user = {
  name: 'TapaScript',
  address : 'Bangalore',
}

greeting.call(user);


const likes = function (hobby1, hobby2) {
  console.log(this.name   + ' ' + 'likes'  + ' ' + hobby1 + ' ' + hobby2);
}


const person  = {
   name : 'Saim',
}

likes.call(person, "learning", 'coading');


//the apply method


const hobbisToApply = ['cricket', 'tennis'];


likes.apply(person, hobbisToApply);



//the bind method

const newHobbies = function (hobby1, hobby2) {
  console.log(this.name + ' ' + 'likes' + ' ' + hobby1 + ' ' + hobby2);
};


const officer = {
  name: 'Bob',
};

const newFn = newHobbies.bind(officer, 'dancing' , 'singing');

newFn();


var Cartoon = function (name, animal) {
  this.name = name;
  this.animal = animal;

  log = function () {
    console.log(this.name + 'is a ' + this.animal);
  }
}

const Tom = new Cartoon('Tom', 'cat');

Tom.log();



