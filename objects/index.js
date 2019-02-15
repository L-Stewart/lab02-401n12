'use strict';


// const Vehicle = require('./vehicle-constructor.js');
// const Vehicle = require('./vehicle-class.js');
const CarFactory = require('./vehicle-factory.js');
const MotorcycleFactory = require('./vehicle-factory')

// Implement a car and motorcycle
const mazda = new CarFactory('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new MotorcycleFactory('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

