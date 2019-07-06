import { Astronaut } from './../src/Astronaut';

describe('age-calc', function() {

  let birthdate = new Date (2009, 6, 27);
  let astronaut = new Astronaut (birthdate);

  it('should save a date as a Date object', function() {
    expect(birthdate.getFullYear()).toEqual(2009);
    expect(birthdate.getMonth()).toEqual(6);
    expect(birthdate.getDate()).toEqual(27);
  });

  it('should calculate the age', function() {
    expect(astronaut.age).toEqual(10);
  });

  it('should calculate the age on Mercury', function() {
    expect(astronaut.mercuryAge()).toEqual(41);
  });

  it('should calculate the age on Venus', function() {
    expect(astronaut.venusAge()).toEqual(16);
  });

  it('should calculate the age on Earth', function() {
    expect(astronaut.earthAge()).toEqual(10);
  });

  it('should calculate the age on Mars', function() {
    expect(astronaut.marsAge()).toEqual(5);
  });

  it('should calculate the age on Jupiter', function() {
    expect(astronaut.jupiterAge()).toEqual(0);
  });

  it('should calculate the number of years before user meets average life expectancy', function() {
    expect(astronaut.yearsLeft()).toEqual(61)
  });

  it('should calculate the number of years past average life expectancy', function() {
    let birthdate = new Date (1939, 6, 27);
    let astronaut = new Astronaut (birthdate);
    expect(astronaut.yearsPast()).toEqual(9);
  });
});
