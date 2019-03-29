'use strict';


// const Vehicle = require('./vehicle-constructor.js');
const Vehicle = require('./vehicle-class.js');
// const Vehicle = require('./vehicle-factory.js');

// const FlyingVehicle  = require('./flyingVehicle/flyingVehicle-class');
const FlyingVehicle  = require('./flyingVehicle/flyingVehicle-factory');

// const SeaCreature = require('./seaCreature/seaCreature-class');
const SeaCreature = require('./seaCreature/seaCreature-factory');

//-------------------------------------------------------------------------

// Implement a car and motorcycle
const mazda = new Vehicle.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a airplane and helicopter
const jet = new FlyingVehicle.Airplane('737');
console.log(jet.name, jet.on(), jet.flying(), jet.errr());

const kiro = new FlyingVehicle.Helicopter('Traffic Chopper 1');
console.log(kiro.name, kiro.flying(), kiro.news());

// Implement a fish and lobster
const salmon = new SeaCreature.Fish('Sokeye');
console.log(salmon.name, salmon.swim(), salmon.eat());

const maine = new SeaCreature.Lobster('Butter');
console.log(maine.name, maine.eat(), maine.poop());