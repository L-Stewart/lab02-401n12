'use strict';
//---------------------------------------------------------------
// The traditional constructor is needed for a factory
const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};

Vehicle.prototype.wheelie = () => {
  return 'Wheee!'
};

//----------------------------------------------------------------
function CarFactory(name) {
  // This 'should' have the same interface as Vehicle but it should add "color"
  const newCar = Object.assign(
    new Vehicle(name) // Creates the inheritance pattern
  );
  return Object.freeze(newCar);
}

function MotorcycleFactory(name) {
  const newMotorcycle = Object.assign(
    new Vehicle(name)
  );
  return Object.freeze(newMotorcycle)
}

module.exports = MotorcycleFactory;
module.exports = CarFactory;

