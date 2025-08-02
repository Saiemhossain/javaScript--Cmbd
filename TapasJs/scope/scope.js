//Blcok Scope: Block scope refers to variables that are accessible only within the block {} in which they are defined

// only let and const are block-scoped.

{
  let a = 10;
  const b = 20;
  console.log(a, b); // 10, 20
}

// console.log(a,b); Error : a, b is not defined


// Function Scope  : Function scope means a variable declared with var only accessible within the function where it is defined

function sum() {
   var  x= 5;
  console.log(x); // 5
}

sum(); 

// console.log(x); Error : x is not defined


// Lexical Scope : Lexical scope means that a function can access variables from the scope in which it was defined,not where it is called. This is the basis for closures in Javascript

function outer() {
  let name = 'Saim';

  function inner() {
    console.log(name); // Access variables from the outer  scope
  }

  inner();
}

outer();


//scope chain : Scope chain is the proccess of looking up variables from inner scope to outer scopes, including the global scope , until the variable is found or reference error is thrown


let a = 10;

function first() {
  let b = 20;

  function sceond() {
    let c = 30;
    console.log(a,b,c); // 10, 20 ,30
  }
  sceond();
}

first()

