//Closure : A closure is a function that remembers and has access to variables from its outer scope, even after the outer function has finished running.


//outher Inner

function outer() {
  let x = 10;

  return function inner() {
    console.log(x);
  }
 
}

const outerFn = outer();

outerFn() //10


//count closure

function outerCount() {
  let count = 0;

  return function innerCount() {
    count++;
    console.log(count);
  }
}

const countValue = outerCount();

countValue(); //1
countValue(); //2
countValue(); //3

//Real world example

function createBankAccount(innitialBalance) {
  let balance = innitialBalance;

  return {
    deposit: (ammount) => {
      balance = balance + ammount;
      console.log('Deposit:', ammount , 'Current Balance :', balance);
    },

    withdarw: (ammount) => {
      if (ammount > balance) {
        console.warn('Insufficient Balance');
      } else {
        balance = balance - ammount;
        console.log('withdrawn:', ammount, 'Current Balance :', balance);
      }
    },

    checkBalance : ()=> console.log('current balance', balance)
  }

}


const saimAcc = createBankAccount(1000);

saimAcc.deposit(500);
saimAcc.withdarw(200);
saimAcc.checkBalance();


function timer() {
  let secs = 0;

  return function () {
    secs++;
    console.log('elaspsed time', secs);
  }
}

const timerSecs = timer();

timerSecs()
timerSecs()


// closure in Event handler

function setupBtn() {
  let clickCount = 0;
  document.getElementById('clickBtn').addEventListener('click', () => {
    clickCount++;
    console.log(`Button clicked ${clickCount} times`);
  })
}

setupBtn(); 
