export class Astronaut {

  constructor(dateString) {
    const today = new Date(2019, 6, 27);
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    this.age = age;
  }

//calculate the age on Mercury
  mercuryAge() {
    return Math.floor(this.age / 0.24);
  }

// calculate the age on Venus
  venusAge() {
    return Math.floor(this.age / 0.62);
  }

// calculate the age on Earth
  earthAge() {
    return this.age;
  }

// calculate the age on Mars
  marsAge() {
    return Math.floor(this.age / 1.88);
  }

// calculate the age on Jupiter
  jupiterAge() {
    return Math.floor(this.age / 11.86);
  }

// calculate the number of years before user meets average life expectancy
  yearsLeft() {
    if (this.age <= 71) {
      return (71 - this.age);
    }
  }

// calculate the number of years past average life expectancy
  yearsPast() {
    if (this.age > 71) {
      return (this.age - 71);
    }
  }
}
