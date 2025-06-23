//Learning Objects

let user = {
  name: 'saim',
  age: 24,
  "is admin" : true
}

user.isSeniorCityzen = false;

user['movie lover'] = true;

console.log(user.name);
console.log(user.age);

console.log(user['is admin']); //important


console.log(user['movie lover']);
console.log(user);


//to resign and delete

user.age = 34;

delete user.age;

delete user['movie lover']



console.log(user);


//dynamically  usecase

const somekey = 'age';

console.log(user[somekey]);

let car = prompt('which is your fav car?')

let favCar = {

// to access value dynamically
  [car]: 5
}
console.log(favCar);


//constructure function


function Car(name, model) {
  this.name = name;
  this.model = model
}

const bmwCar = new Car('BMW', 5);
const aduiCar = new Car('Audi', 'x1');

console.log(bmwCar);
console.log(aduiCar);

// Another way to define 

const person = new Object();

person.name = 'Saim',
  person.age = 24

console.log(person);


//factory
function createUser(name, age) {
  return {
    name,
    age,
    greet() { 
      console.log(this.name);
    }
  };
}

const user1 = createUser('Abir', 34);

console.log(user1);



user1.greet(); // Output: Abir




let profile = {
  name: 'Tapas',
  company: 'Wasa',
  salary:undefined,
  message: function () {
    console.log(`${this.name} works ${this.company}`);
  },

  address: {
    city: 'Bangalore',
    zip: 2547,
    state: 'Karnataka',
    
    greet: function () {
      console.log('welcome back to india');
    },
  },
};

console.log(profile.salary);




console.log(profile.name);
console.log(profile.message());

console.log(profile.address);

console.log(profile.address.greet());

console.log('salary' in profile) //corrected way to check;


//for..in

for (let  key in profile) {
  console.log(key);

  //to access value dynamically

  console.log(profile[key]);
}

console.log(Object.keys(profile));

//object reference

const fruits = {
  name:'mango'
}

const moreFruit = {
  name:'mango'
}


console.log(fruits === moreFruit);


//static method

const target = {
  p: 1,
  a:2,
}

const source = {
  a: 3,
  b:3,
}

const returnObj = Object.assign(target, source)
console.log(returnObj);


const obj1 = { name: 'Tapas' };

const obj2 = Object.assign({}, obj1);

console.log(obj2);


//converting object into array

const myObj = {
  a: 'tapas',
  b:32
}

const myArr = Object.entries(myObj)

console.log(myArr);


//converting arry into object


const entries = new Map([
  ['foo', 'far'],
  ['baz', 42],
])

const myObject = Object.fromEntries(entries);

console.log(myObject);

//freeze method that you can not change value

const emp = {
  sal:100,
}

Object.freeze(emp);

emp.sal = 250;
 
console.log(emp);


//checking name property is in or not

const dep = {
  name: 'finance',
}

console.log(Object.hasOwn(dep, 'name'));
console.log(Object.hasOwn(dep, 'address'));


//object destructuring

const student = {
  name: 'Anamika',
  age: 12,
  std: 3,
  subjects: ['Bangla', 'Math', 'English'],
  parent: {
    father: 'Abdul Malek',
    mother: 'Samiya Akter',
    email : 'outdoor@gmail.com'
  },
  address: {
    street: '1 no daroga road',
    city: 'Dhaka',
    zip: 1204,
  },
}; 

const { name, meal="bread" } = student;


// instead of doing this


// const meal  = student.meal ? student.meal : 'bread'


console.log(name, meal);

const { subjects , numberOfSub = subjects.length } = student;

console.log(numberOfSub);


const { std } = student;


console.log(std);

const { address: { zip } } = student;

console.log(zip);


function sendEmail({parent : {email}}) {
  console.log(`sent email to ${email}`);
}

sendEmail(student)


// Array of object  destructuring

const persons = [
  {
    name: 'Saim',
    grade: 'B'
  },
  {
    name: 'Abir',
    grade: 'A'
  },
  {
    name: 'Aiman',
    grade: 'A+'
  }
];

for ( let { name, grade } of persons) {
  console.log(name, grade);
}


//optional chaining

const employee = {
  salary: {
    bonus : 300
  }
}

console.log(employee.salary);


function details(firstName, lastName) {
  const greet = 'hi';
  const tittle = "hello";
  console.log(`${greet} ${tittle} ${firstName} ${lastName}`);
}

details('saim', 'Hossain');


function details(firstName, lastName, {greet='hi'}= {}) {
  console.log(`${greet}  ${firstName} ${lastName}`);
}

details('saim', 'hossain')


//charter count of a string


function countChar(str) {
  const count = {};

  for (let char of str) {
    if (char === ' ') continue
    
    count[char] = (count[char] || 0) +1
  }

  console.log(count);
}

countChar('saim hossain' )



// if arr1 value square in arr2 then true otherwise false

function double(arr1, arr2) {
  let sqr = arr1.map((x) => x * x);

  return sqr.toString() === arr2.toString();
}

console.log(double([2,4,6], [4,16,36]));
console.log(double([2,4,6], [4,1,36]));



 //finding maxValue and minValue of an array also ingnore  string 

let temp = [20, 30, 42, 48, 'hello', 11, 6];


function minOrMax() {
  let numbersOnly = temp.filter(item => typeof item  === 'number')
  

  let maxVal = Math.max(...numbersOnly);
  let minVal = Math.min(...numbersOnly);

  return {maxVal, minVal}

}

console.log(minOrMax());
