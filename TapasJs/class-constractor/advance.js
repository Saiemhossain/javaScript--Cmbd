//class constructor

class Car {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }

  aboutCar() {
    return `this car name is ${this.name} and it's brand name is ${this.brand}`;
  }

  //static method

  static staticMethod() {
    return `you could not return this method instantiate`;
  }
  //get method

  get getMethod() {
    return `this is get method`;
  }

  //set method

  set rename(value) {
    this.name = value;
  }
}

const Bmw = new Car('BMW', 'E866');

// console.log(Bmw);
// console.log(Bmw.aboutCar());
// console.log(Car.staticMethod());

Bmw.rename = 'Bmw E360';

console.log(Bmw.name);
