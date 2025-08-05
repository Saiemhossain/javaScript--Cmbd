// what is event in js?

//Event :  An event is just a signal that something happened to browser.


function handleClick(greeting){
  console.log(`button clicked with a ${greeting}`);
}

handleClick('hello');


const myBtn2 = document.getElementById('myBtn2');


// 1st way :

myBtn2.onclick = function () {
  console.log('button clicked again');
}



// 2nd way :

myBtn2.onclick = ()=> handleClick('hi saim');


//3rd way :

myBtn2.addEventListener('click', () => {
  console.log('button clicked again');
});




//remove listener

myBtn2.addEventListener('click', handleClick);

myBtn2.removeEventListener('click', handleClick);


let counter = 0;

const counterFn = function () {
  console.log(counter);
  counter++;
}

const greetMe = function () {
  console.log('Thank You');
}

myBtn2.addEventListener('click', counterFn)

myBtn2.addEventListener('click', greetMe);


// event object


const searchElm = document.getElementById('search-id');

function handleChange(event) {
  console.log(event);

  console.log('event type',event.type );
  console.log('Target name',event.target.name );
  console.log('Target value',event.target.value );
  console.log('Target',event.target );
  console.log('Current Target ', event.currentTarget);
  
  console.log(this); //always reffers to your input element
}

searchElm.addEventListener('change', handleChange)


// Event Bubbling :The even starts from the target element and bubbles up through its ancestors.

//The flow will be : child -> parent -> grandparent -> document


 document.getElementById('grandparent').addEventListener('click', () => {
   console.log('grandparent clicked');
 });

 document.getElementById('parent').addEventListener('click', () => {
   console.log('parent clicked');
 });
 document.getElementById('child').addEventListener('click', () => {
   console.log('child clicked');
 });


//capturing :
 
//In event capturing , the event flows flows from the outmost ancestors down to the target element.It happens before the actual target handles the event.

//Note :The capturing is by default disable but bubbling is  by default enable



document.getElementById('grandparent').addEventListener('click', () => {
  console.log('captured grandparent');
},
true);//capture phase

document.getElementById('parent').addEventListener('click', () => {
  console.log('captured parent');
},
 true); //capture phase

document.getElementById('child').addEventListener('click', () => {
  console.log('captured child ');
},
true);//capture phase


//Event Delegation : It is a technique where you add a single event listner to  a parent element , instead of adding individual event listners to all its children.

document.getElementById('itemList').addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(`You clicked on ${event.target.textContent}`);
  }
});



//event stop propagation



document.getElementById('father').addEventListener('click', () => {
  console.log('father clicked');
})


document.getElementById('son').addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('son clicked');
});



//event default

// event.preventDefault() is a method in JavaScript that prevents the default action that belongs to the event from occurring.


const myLink = document.getElementById('myLink');

myLink.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('event default');
})


const loginForm = document.getElementById('loginForm');


loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); //form er jonno submit
  console.log('from submitted prevented');
})


//custom event


// A Custom Event in JavaScript is an event that you create manually using the CustomEvent constructor, instead of using built-in events like click or submit.

// It allows you to define your own event name and pass custom data with it.


//step 1 : create a custom event

const newEvent = new CustomEvent('userLoggedIn', {
  detail: {
    userName: 'Tapascript',
    role :'admin'
  }
})

//step 2 : listen to the custom event

document.addEventListener('userLoggedIn', (e) => {
  console.log(`User login detected ${e.detail.userName}`);
});


//step 3 : Dispatch the custom event

document.dispatchEvent(newEvent);


