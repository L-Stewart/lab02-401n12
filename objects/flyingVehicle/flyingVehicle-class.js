'use strict';

class FlyingVehicle {
  constructor(name, engines){
    this.name = name;
    this.engines = engines;
  }
  on() {
    return 'All ' + this.engines + ' rotors are spinning up.';
  }
  flying() {
    return 'We are airborne';
  }
}

class Helicopter extends FlyingVehicle {
  constructor(name, engines){
    super(name, 2);
  }
  news(){
    return 'This just in ...';
  }
}

class Airplane extends FlyingVehicle {
  constructor(name, engines){
    super(name, 4);
  }
  errr(){
    return 'Thank you for flying with us today.';
  }
}

module.exports = {Helicopter, Airplane};