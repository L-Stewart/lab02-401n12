'use strict';

class Car {
  constructor(name){
    this.name=name;
    this.wheels=wheels;
  }

  drive() {
    return "Moving Forward";
  }

  stop() {
    return "Stopping";
  }
}

class Motorcycle extends Car {
  constructor(name){
    super(name)
  }
  wheelie() {
    return "Wheelie";
  }
  stop() {
    return "Stopping";
  }
}

module.exports = Motorcycle;
module.exports = Car;
