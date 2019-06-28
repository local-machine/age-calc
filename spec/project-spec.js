import { UserBirth, getAge } from './../src/backend-code.js';

describe('age-calc', function() {


  it('should save a date as a Date object', function() {
    let inputDate = new Date (2009, 6, 27);
    expect(inputDate.getFullYear()).toEqual(2009);
    expect(inputDate.getMonth()).toEqual(6);
    expect(inputDate.getDate()).toEqual(27);
  });

  it('should calculate the age', function() {
    let inputDate = new Date (2009, 6, 27);
    expect(inputDate.getAge.toEqual(10);
  });

});
