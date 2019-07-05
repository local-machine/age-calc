export class Astronaut {

  constructor(dateString) {
    const today = new Date(2019, 6, 27);
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    this.earthAge = age;
  }

  mercuryAge() {
    return Math.floor(this.earthAge / 0.24);
  }

  venusAge() {
    return Math.floor(this.earthAge / 0.62);
  }
}
