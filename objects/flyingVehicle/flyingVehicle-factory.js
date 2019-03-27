'use strict';

const FlyingVehicle = function(name, engines) {
  this.name = name;
  this.engines = engines;
  this.on = () => {
    return 'All ' + this.engines + ' rotors are spinning up.';
  };
  this.flying = () => {
    return 'We are airborne';
  }
};

function Helicopter(name) {
  const newHeli = Object.assign(
    {news},
    new FlyingVehicle(name, 2),
  );
  function news(){
    return 'This just in ...';
  }
  return Object.freeze(newHeli);
}

function Airplane(name) {
  const newPlane = Object.assign(
    {errr},
    new FlyingVehicle(name, 4),
  );
  function errr(){
    return 'Thank you for flying with us today.';
  }
  return Object.freeze(newPlane);
}

module.exports = {Helicopter, Airplane};