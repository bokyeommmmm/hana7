// p.159
//ex1
const assert = require("assert");
function push(array, ...args) {
  return [...array, ...args];
}
const pop = (array, count) => (count ? array.slice(-count) : array.at(-1));

const arr = [1, 2, 3, 4];

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
