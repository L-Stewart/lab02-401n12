'use strict';

// const SeaCreature = require('../seaCreature/seaCreature-factory');
const SeaCreature = require('../seaCreature/seaCreature-class');

describe('SeaCreatures', () => {

  describe('Fish', () => {

    let salmon = new SeaCreature.Fish('Mark');

    it('has 2 tails', () => {
      expect(salmon.tail).toEqual(2);
    });

    it('can swim', () => {
      expect(salmon.swim()).toBeTruthy();
    });

    it('can eat', () => {
      expect(salmon.eat()).toBeTruthy();
    });

    it('can\'t poop', () => {
      expect(salmon.poop).toBeUndefined();
    });

  });

  describe('Lobster', () => {

    let maine = new SeaCreature.Lobster('Butter');

    it('has 1 tail', () => {
      expect(maine.tail).toEqual(1);
    });

    it('can swim', () => {
      expect(maine.swim()).toBeTruthy();
    });

    it('can eat', () => {
      expect(maine.eat()).toBeTruthy();
    });

    it('can poop', () => {
      expect(maine.poop()).toBe('Chocolate Milk!!!');
    });

  });

});