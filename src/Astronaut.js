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

  mercuryAge() {
    return Math.floor(this.age / 0.24);
  }

  venusAge() {
    return Math.floor(this.age / 0.62);
  }

  earthAge() {
    return this.age;
  }

  marsAge() {
    return Math.floor(this.age / 1.88);
  }

  jupiterAge() {
    return Math.floor(this.age / 11.86);
  }

  yearsLeft() {
    if (this.age <= 71) {
      return (71 - this.age);
    }
  }

  yearsPast() {
    if (this.age > 71) {
      return (this.age - 71);
    }
  }
}
