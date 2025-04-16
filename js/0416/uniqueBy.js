const assert = require("assert");
Array.prototype.uniqBy = function (prop) {
  //   return this.map((a) => a[prop]); //v1
  // --
  //   return new Set(this.map((a) => a[prop]));  //v2
  // --
  //   const s = new Set(this.map((a) => a[prop]));
  //   return s.keys();     //v3
  return [...new Set(this.map((a) => a[prop]))];
};
const hong = { id: 1, name: "Hong", dept: "HR" };
const kim = { id: 2, name: "Kim", dept: "Server" };
const lee = { id: 3, name: "Lee", dept: "Front" };
const park = { id: 4, name: "Park", dept: "HR" };
const ko = { id: 7, name: "Ko", dept: "Server" };
const loon = { id: 6, name: "Loon", dept: "Sales" };
const choi = { id: 5, name: "Choi", dept: "Front" };
const users = [hong, kim, lee, park, ko, loon, choi];
users.uniqBy("dept"); // [ 'HR', 'Server', 'Front', 'Sales' ]
