'use strict';

// const FlyingVehicle = require('../flyingVehicle/flyingVehicle-factory.js');
const FlyingVehicle = require('../flyingVehicle/flyingVehicle-class.js');

describe('Flying Vehicles', () => {

  describe('Airplane', () => {

    let jet = new FlyingVehicle.Airplane('737');

    it('should have 4 engines ', () => {
      expect(jet.engines).toEqual(4);
    });

    it('should turn on', () => {
      expect(jet.on()).toBeTruthy();
    });

    it('should fly', () => {
      expect(jet.flying()).toBeTruthy();
    });

    it('should have a pilot with terrible speaking capacity ', () => {
      expect(jet.errr()).toBe('Thank you for flying with us today.');
    });

  });

  describe('Helicopter', () => {

    let kiro = new FlyingVehicle.Helicopter('News Chopper 1');

    it('should have 2 engines ', () => {
      expect(kiro.engines).toEqual(2);
    });

    it('should turn on', () => {
      expect(kiro.on()).toBeTruthy();
    });

    it('should fly', () => {
      expect(kiro.flying()).toBeTruthy();
    });

    it('should tell the news', () => {
      expect(kiro.news()).toBe('This just in ...');
    });
  });
});