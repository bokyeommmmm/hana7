const assert = require("assert");
const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [hong, kim, lee, park];

const find3 = (a) => a.id === 3;
const idxId2 = users.findIndex(find3);

// Try this: id를 부여해서 실행하는 findId 함수를 작성하시오.
//const findId = <이 부분을 작성해 보세요>;
const findId = (id) => (user) => user.id === id;
const idxId11 = users.findLastIndex(findId(1));
console.log("🚀  idxId11:", idxId11);

// const findId = (id) => {
//     return function(user) {
//       return user.id === id;
//     };
//   };

const ids = users.map((a, i) => a.id);
console.log("console.log(); ~ ids:", ids);
// = user.map (finction(a) {return a.id;});

Array.prototype.pushx = function (x) {
  //   console.log("console.log(); ~ x:", x);
  this[this.length] = x;
};
const xx = users.pushx({ id: 100, name: "sejong" });
Array.prototype.forEach = function (f) {
  for (let i = 0; i < this.length; i++) {
    f(this[i], i, this);
  }
};
users.forEach((a, i) => {
  console.log(i + 1, a.name);
});
Array.prototype.filter = function (f) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    if (f(this[i], i, this)) results.push(this[i]);
  }
  return results;
};
const oddIds = users.filter((a) => a.id % 2);
console.log("console.log(); ~ oddIds:", oddIds);
Array.prototype.map = function (f) {
  //map의 실체
  const results = [];
  for (let i = 0; i < this.length; i++) {
    results[i] = f(this[i], i, this);
  }
  return results;
};

Array.prototype.mapBy = function (k) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    results.push(this[i][k]);
  }
  return results;
};
const ids2 = users.mapBy("id");
console.log("console.log(); ~ ids2:", ids2);

const names = users.mapBy("name");
console.log("console.log(); ~ names:", names);

const sl1 = users.slice(1, 3);
console.log("console.log(); ~ sl1:", sl1);

const spl1 = users.splice(); //삭제.

const arr2 = [1, 2, 3, 4, 5];
// ex1) [2,3]을 추출
const a1 = arr2.slice(1, 3);
console.log("console.log(); ~ a1:", a1);
// ex2) [3]부터 모두 다 추출
const a2 = arr2.slice(2);
console.log("console.log(); ~ a2:", a2);
// ex3) [2,3,4] 제거하기
const a3 = arr2.splice(1, 3);
console.log("console.log(); ~ a3:", a3, "=====> ", arr2);
// ex4) 복원하기
arr2.splice(1, 0, 2, 3, 4); //1번자리에서 삭제는 0개하고 2,3,4끼워넣자 .
//  arr2.splice(1, 0, a3);
console.log("console.log(); ~ arr2:", arr2);
// ex5) [3] 부터 끝까지 제거하기
arr2.splice(2);
console.log("console.log(); ~ arr2:", arr2);
// ex6) 복원하기
arr2.splice(2, 0, 3, 4, 5);
console.log("console.log(); ~ arr2:", arr2);
// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
// - 방법1) 3부터 모두 지우고 'X', 'Y', 'Z', 4, 5 추가
arr2.splice(2, 10, "X", "Y", "Z", 4, 5);
console.log("console.log(); ~ arr2:", arr2);
// - 방법2) 3만 지우고 'X', 'Y', 'Z' 추가
arr2.splice(2, 3, 3); //원복하고.
console.log("console.log(); ~ arr2:", arr2);
arr2.splice(2, 1, "X", "Y", "Z");
console.log("console.log(); ~ arr2:", arr2);
// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
arr2.splice(2, 3, 3); //원복하고.
console.log("console.log(); ~ arr2:", arr2);

const a8 = [...arr2.slice(0, 2), "x", "y", "z", ...arr2.slice(-2)];
console.log("console.log(); ~ a8:", a8);

assert.deepStrictEqual(a8, [1, 2, "x", "y", "z", 4, 5]);
