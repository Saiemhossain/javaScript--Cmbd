// for loop : A for loop is best when we know exactly how many times we need to run a block of code.
 
// for (let count = 1; count <= 5; count++){
//  console.log('iteration/loop :', count);
// }


//Addition of event numbers between 1 to 10


let sum = 0;
for (let i = 1; i <= 100; i++){
  if (i % 2 === 0) {
    // console.log('even number', i);
    sum = sum + i;
}
}

console.log('Sum is', sum);


let language = "javascript";

for (i = 0; i <= language.length; i++){
  console.log(language.charAt(i));
}

//nested loop


for (i = 0; i <= 5; i++){
  for (j = 0; j <= 5; j++){
    // console.log('row',i ,'column',j);
  }
}

//Break and continue

//break for exiting from the loop, no more exicution and continue means skipping  a perticular iteration in a loop and go back to the next one

for (let i = 1; i <= 5; i++){
   
  if (i === 3) {
    break;
  }
  console.log(i);
  
}

//continue

for (let i = 1; i <= 5; i++){
  if(i ===3 ) continue
  console.log(i);
}


//multiple counters for single loop

for (i = 1, j = 10; i <= 10 && j >= 1; i++, j--){
  console.log(i,j);
}



//while loop:
 
// A while loop runs as long as a given condition is true. It is best when we don't know if advance how many iterations are needed


// let counter = 1;

// while (counter <=5) {
//   console.log(counter);
//   counter++;
// }


//do-while

//A do-while loop ensures that code executes at least once before checking the condition.

let num = 1;

do {
  console.log(num);
  num++;
} while (num <= 5);