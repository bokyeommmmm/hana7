// p.159
const assert = require("assert");

console.log("=======ex2===========");
const arr = [1, 2, 3, 4];

// const deleteArray = (array, start, end = array.length) => [
//   ...array.slice(0, start),
//   ...array.slice(end),
// ];
const deleteArray = (array, startOrKey, endOrValue) => {
  if (typeof startOrKey === "string") {
    return array.filter((a) => a[startOrKey] !== endOrValue);
  } else {
    return array.filter((_, i) => i < startOrKey || i >= endOrValue);
  }
};
assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]); // 2부터 끝까지 지우고 나머지 리턴
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]); // 1부터 3미만까지 지우고 나머지 리턴
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
const users = [Hong, Kim, Lee];
assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "id", 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "name", "Lee"), [Hong, Kim]);

const reapaintUsers = users.filter((user) => user.id !== 2);
console.log("console.log(); ~ reapaintUsers:", [...reapaintUsers]);
//ex1
return;
console.log("==========ex1=============");
function push(array, ...args) {
  return [...array, ...args];
}
const pop = (array, count) => (count ? array.slice(-count) : array.at(-1));

// const arr = [1, 2, 3, 4];

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!
const unshift = (array, ...args) => [...args, ...array];
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
//--
// const shift = (array, ...args) => array.slice(1);
// console.log("shift : ", arr, "==>", shift(arr));     //이게 원래 shift 기능
//--
const shift = (array, count = 1) => [array.slice(0, count), array.slice(count)];
assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]); // [shift되는 원소들, 남은 원소들]
assert.deepStrictEqual(shift(arr, 2), [
  [1, 2],
  [3, 4],
]); // 2개 shift
assert.deepStrictEqual(arr, [1, 2, 3, 4]); //순수함수 test.
