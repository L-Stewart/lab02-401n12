'use strict';
//---------------------------------------------------------------
// The traditional constructor is needed for a factory

const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
  this.drive = () => {
    return 'Moving Forward';
  };
  this.stop = () => {
    return 'Stopping';
  };
};

//----------------------------------------------------------------
function Car(name) {
  // This 'should' have the same interface as Vehicle but it should add "color"
  const newCar = Object.assign(
    // {},
    new Vehicle(name, 4) // Creates the inheritance pattern
  );
  return Object.freeze(newCar);
}

function Motorcycle(name) {
  const newMotorcycle = Object.assign(
    // {},
    {wheelie},
    new Vehicle(name, 2),
    );
  function wheelie() {
    return 'Wheee!'
  }
  return Object.freeze(newMotorcycle)
}

module.exports = {Car, Motorcycle};
