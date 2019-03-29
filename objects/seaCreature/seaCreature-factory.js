'use strict';

const SeaCreature = function (name, tail) {
  this.name = name;
  this.tail = tail;
  this.swim = () => {
    return 'Just keep swimming.';
  };
  this.eat = () => {
    return 'ChumChumChum';
  }
};

function Fish(name) {
  const nemo = Object.assign(
    {},
    new SeaCreature(name, 2), // Creates the inheritance pattern
  );
  return Object.freeze(nemo);
}

function Lobster(name) {
  const seaBug = Object.assign(
    {},
    {poop},
    new SeaCreature(name, 1),
  );
  function poop() {
    return 'Chocolate Milk!!!';
  }
  return Object.freeze(seaBug);
}

module.exports = { Fish, Lobster };