export class UserBirth extends Date {
  constructor(year, month, date) {
    super();
    this.year = year;
    this.month = month;
    this.date = date;
  }
}

// export let getAge = new Date (dateString) {
//   let today = new Date();
//   const UserBirth = new Date(dateString);
//   let age = today.getFullYear() - UserBirth.getFullYear();
//   var month = today.getMonth() - UserBirth.getMonth();
//   if (month < 0 || (month === 0 && today.getDate() < UserBirth.getDate())) {
//     age--;
//   }
//   return age;
// };
