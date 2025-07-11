
//executor

// function(resolve, reject) {
//   resolve()
//   reject()
// }


//handling promise

let loading = false;

let promise = new Promise((resolve, reject) => {
  loading = true;

  resolve("I am done so far");

  reject('I am not done so far ');
})

promise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
}).finally(() => {
  loading = false;
});


// promise chaining

// Rule no 1 : every promise give you a .then() handler method . every promise provides you a . catch() handler.


// Rule no 2 : you can  do mainly there valuable things from the .then() method.you can return another promise(for async operation) .you can return value from synchonous operation . lastly you can throw an error .


// return a promise .then() handler


//creating a promise & chaining


let getUser = new Promise((resolve, reject) => {
  const user = {
    name: 'Saim Hossain',
    email: 'smsaim@yahoo.com',
    pass: '12546',
    permission: ["db", "hr", "dev"]
  };
  resolve(user)

});


getUser.then((result) => {
  console.log(result.name)
  console.log(result.email)
  console.log(result.pass)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Dhaka')
    },2000)
  })

})

  .then((result) => {
  console.log(result);
  })

//throw an error from .then() handler
  

getUser.then((user) => {
  console.log(`User's name is ${user.name}`);

  if (!user.permission.includes("hr")) {
    throw new Error('You are not allowed to access this')
  }

  return user.email
}).then((user) => {
  console.log(user);
})
  
  .catch((error) => {
  console.log(error);
  }).finally(() => {
    console.log('running finally');
})


//handle multiple promises


//promise.all() -> takes an array of promises collection

const BASAUR_POKEMON = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';

console.log(BASAUR_POKEMON);
 






