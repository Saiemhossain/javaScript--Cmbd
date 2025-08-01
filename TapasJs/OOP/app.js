//syntax 

class AClass {
  constructor() {
    
  }
    method1(){}
    method2(){}
    method3(){}
    method4(){}
}

const a = new AClass();
const b = new AClass();

// console.log(a === b);  // always return false


// initialize the object

class Car{
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  printThis() {
    console.log(this); //printThis() এর ভিতরের this হলো সেই অবজেক্ট, যেটা দিয়ে মেথডটা কল করা হচ্ছে।
  }

  printModel() {
    console.log(`this car name is ${this.name} and it's model is ${this.model}`);
  }
}

const bmw = new Car('BMW', 'bd846');
const audiCar = new Car('Audi Car', 'jn124');


bmw.printThis(); 
audiCar.printThis();

console.log(bmw);

bmw.printModel();


console.log(typeof Car); // function  (interview ques)

// class as an Expression


const Employee = class {
  welcome() {
    console.log('welcome to employee');
  }
}

const emp = new Employee();

emp.welcome();



//Named Class

const Dept = class Department {
  welcome() {
    console.log('welcome to department');
  }
};

const dep = new Dept('hr')

dep.welcome();


//class fields

class Phone{
  brand = "Apple";

  make() {
    console.log(this.brand); // this is reffer to make method 
  }
}

const phn = new Phone('Sumsung');

phn.make();



//Getter & Setters method

class Animal{
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  
  set name(value) {
    // doing some validation
    
    if (!value) {
      console.warn('A name is mandatory!!'); 
      return;
    }

    if (value.length <=2) {
      console.warn('The name must be at least more than 2 charcters!!');
      return;
    }
    this._name = value;
  }


}


const myAnimal = new Animal('Cat');

console.log(myAnimal._name);


//static prooperties

class MyClass {
  static method() {
    console.log('this is static method');
  }
}

MyClass.method(); // static method e new diye intiate kora lage na remember this


// more example

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  greet() {
    console.log(`I am ${this.name} and my email is ${this.email}`);
  }


  // static utility method

   static isValid(email) {
    return email.includes("@") && email.includes(".")
  }


  static createGuest() {
    return new User("Guest", "guest@gmail.com")
  }


}

const user = new User('Tapas', 'Tapas@gmail.com');


user.greet()

console.log(User.isValid('')); // static method er jonno new  diye initialize kora lagbe


console.log(User.createGuest());



//private && public

//Public: These fields and methods are accessible from anywhere

//Private : this fields and methods are not accessible from anywhere but only accessible from the inside of the class.



class WashingMachine {
  // Public field
  brand;

  // Private fields
  #powerStatus = false;
  #currentCycle = null;

  constructor(brand) {
    this.brand = brand;
  }

  start(cycle) {
    if (!this.#powerStatus) {
      this.#turnOn(); 
    }

    

    console.log(`Starting a ${cycle} cycle...`);

    this.#spin();
    this.#drain();

    this.stop();
  }

  stop() {
    console.log('Machine turned off.');
    this.#turnOff();
  }

  // Private methods
  #turnOn() {
    this.#powerStatus = true;
    console.log('Power On');
  }

  #turnOff() {
    this.#powerStatus = false;
    console.log('Power Off');
  }

  #spin() {
    console.log('Spinning...');
  }

  #drain() {
    console.log('Draining...');
  }
}


const lgWasher = new WashingMachine('LG');

console.log(lgWasher);

lgWasher.start('Quick Wash');

console.log(lgWasher.brand);


//Extending

class Human{
  species = "Homo Sapiens" // public field

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'am ${this.name} and I am ${this.age} years old`);
  }

  sleep() {
    console.log(`${this.name} is sleeping..`);
  }

}


class Student extends Human{

  constructor(name, age, grade) {
    super(name, age)  // inherit name & age from Human
    this.grade = grade;
  }

  //overwritting from parent 
  
  introduce() {
    console.log(`Hi, I'am ${this.name}, and I am ${this.age} years old also I study in ${this.grade}`);
  }

  study() {
    console.log(`${this.name} is studying...`);
  }
}


class Teacher extends Human {
  constructor(name, age, subject) {
    super(name, age); // inherit name & age from Human
    this.subject = subject;
  }

  introduce() {
    console.log(`Hi, I'am ${this.name} and I am ${this.age} years old &  i am teaching ${this.subject}`);
  }
}


const anamika = new Student('Anamika Akter', 12, '5th');

const saim = new Teacher('Saim Hossaim', 26, 'English');

console.log(anamika);
console.log(saim);

// saim.sleep()
// anamika.sleep()



//OPP with classes

//Abstruction : hiding internal details and showing only essential features

class MyCar {
  startEngine() {
    this.#injectFuel();
    this.#ignite();
    console.log('Engine Started');
  }

  #injectFuel() {
    console.log('Fuel injected');
  }

  #ignite() {
    console.log('Spark injected');
  }
}

const car = new MyCar();

car.startEngine();



class CoffeeMachine{
  starMachine() {
    this.#boilWater();
    this.#brewWater();
    console.log('Coffee is ready');
  }

  #boilWater() {
    console.log('boiling water...');
  }
  #brewWater() {
    console.log('brewing water...');
  }
}

const myCoffee = new CoffeeMachine();

console.log(myCoffee.starMachine());


// Encapsulation: Group related properties and methods , and restrict direct access to internal data

class NewCar {
  #speed = 0;

  accelerate() {
    this.#speed += 10;
  }

  getSpeed() {
    return this.#speed;
  }
}

const ourCar = new NewCar();

ourCar.accelerate();

console.log(ourCar.getSpeed());

class BankAccount{
  #balane = 0;

  constructor(owner) {
    this.owner = owner;
  }
  

  deposit(ammount) {
    if (ammount > 0) {
      this.#balane += ammount
    }
  }

  withdraw(ammount) {
    if (ammount > 0 && ammount <= this.#balane) {
      this.#balane  -=  ammount
    }
  }


  getbalance() {
    return this.#balane;
  }

}

const myAccount = new BankAccount('Saim');

myAccount.deposit(1000);
myAccount.withdraw(400);

console.log(myAccount.getbalance());


//inheritance : child classes inherit behavior from a parent class.


class Cng {
  constructor(make, model) {
    this.make = make;
    this.model = model
  }
  drive() {
    console.log('driving on fuel');
  }
}

class ElectricCng extends Cng {
  constructor(make, model, batterylevel) {
    super(make, model)
    this.batterylevel = batterylevel;
  }

  charge() {
    console.log('Charging battery..');
  }
}

const myCng = new ElectricCng('2014', 'B125', 100)

myCng.charge();
myCng.drive()



//polymorphism :method behave differently based on object type

class MotorByke{
  drive() {
    console.log('driving on oil..');
  }
}

class ElectricByke extends MotorByke {
  drive() {
    console.log('driving on electricity..');
  }
}

const myByke = [new MotorByke(), new ElectricByke()];

for (let bike of myByke) {
  bike.drive()
}


class GeneralAnimal {
  makeSound() {
    console.log('Some generic animal sound');
  }
}

class Dog extends GeneralAnimal {
  makeSound() {
    console.log('Woof! Woof!');
  }
}

class Cat extends GeneralAnimal {
  makeSound() {
    console.log('Meow! Meow!');
  }
}

class Cow extends GeneralAnimal {
  makeSound() {
    console.log('Moo! Moo!');
  }
}

// Polymorphic behavior


const animals = [new Dog(), new Cat(), new Cow()];

for (let animal of animals) {
  animal.makeSound(); 
}



