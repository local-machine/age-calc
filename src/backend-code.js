export class UserBirth extends Date {
  constructor(year, month, date) {
    super();
    this.getFullYear(year);
    this.getMonth(month);
    this.getDate(date);
  }
}
export const getAge = function (year, month, date) {
  var today = new Date();
  var UserBirth = new Date();
  let age = today.getFullYear() - UserBirth.getFullYear();
  let m = today.getMonth() - UserBirth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < UserBirth.getDate())) {
      age--;
  }
    console.log("hello");
    return age;
}
