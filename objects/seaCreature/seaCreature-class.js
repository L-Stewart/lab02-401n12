'use strict';

class SeaCreature {
  constructor(name, tail){
    this.name = name;
    this.tail = tail;
  }

  swim(){
    return 'Just keep swimming.';
  }

  eat(){
    return 'ChumChumChum';
  }
}

class Fish extends SeaCreature {
  constructor(name, tail){
    super(name, 2);
  }
}

class Lobster extends SeaCreature {
  constructor(name, tail){
    super(name, 1);
  }

  poop(){
    return 'Chocolate Milk!!!';
  }
}

module.exports = { Fish, Lobster };