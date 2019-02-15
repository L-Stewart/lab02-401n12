'use strict';
//------------------------------------------
// Variables
  // name, wheels
// Behavior (Functions)
  // drive, stop
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
//----------------------------------------------
            // class Vehicle{
            //   constructor(name, wheels){
            //     this.name = name;
            //     this.wheels = wheels;
            //   }
            //   drive(){
            //   return 'Moving Forward';
            //   }
            //   stop(){
            //   return 'Stopping';
            //   }
            // }
//----------------------------------------------
// Car Constructor--------------------------------------------------
// behavior
  // N/A
// Variables
  // N/A
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

Car.prototype = new Vehicle();


// Motorcycle Constructor-----------------------------------------------
//Variables
  // N/A
// Behaviors "member" Functions/Methods
  // wheelie

const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

module.exports = {Car, Motorcycle};
