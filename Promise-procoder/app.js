/*
* Promise function in Js
*/

let coffee = new Promise((res, rej) => {
  if (true) {
    return res(); //Resolved
  } else {
    return rej(); //Rejected
  }
}) 
  .then( ()=> {
  console.log('Resolved');
  })

  .catch(() => {
    console.log('Rejected');
  })



let mathAns = new Promise((res, rej) => {
  let n = Math.floor(Math.random() * 10);

  if (n < 5) {
    return res();
  } else {
    return rej();
  }
})
mathAns
  .then(() => {
    console.log('Bellow');
  })
  .catch(() => {
    console.log('Above');
  });


const step1 = new Promise((res, rej) => {
    setTimeout(() => {
      res('step one done')
    }, 2000 );
})
  
const step2 = new Promise((res, rej) => {
  setTimeout(() => {
    res('step two done')
  },3000)
})

step1.then((res) => {
  console.log(res);
})

step2.catch((rej) => {
  console.log(rej);
})

//  if want to both of them like array

Promise.all([step1, step2]).then(res => console.log(res));


//chaining in Promise

let Promise1 = new Promise((res, rej) => {
  return res('step one done');

})
let Promise2 = Promise1.then((data) => {
  console.log(data);
  return new Promise((res, rej) => {
    return res('step two done')
  })
})
Promise2.then((data) => {
  console.log(data);
})
  