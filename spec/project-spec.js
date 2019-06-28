import { XXX } from './../src/backend-code.js';

describe('age-calc', function() {

  it('should save a date as a Date object', function() {
    const inputDate = new Date (2009, 06, 27);
    expect(inputDate.getFullYear()).toEqual(2009);
    expect(inputDate.getMonth()).toEqual(5);
    expect(inputDate.getDate()).toEqual(27);
  });


})
