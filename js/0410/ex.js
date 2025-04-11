const assert = require("assert");
//import assert from 'assert'
const arr = [100, 200, 300, 400, 500, 600, 700];
for (let i in arr) {
  console.log(i, arr[i]);
}
// for (let i in arr) {
//   console.log(arr[i]);
//}
const obj = { name: "Kim", addr: "Yongsan", level: 1, role: 9, receive: false };

for (let i in obj) {
  console.log(i, obj[i]);
}
// for (let i in obj) {
//   console.log(obj[i]);
// }

for (let i of Object.values(obj)) {
  //obj는 배열이 아니라 객체기때문에 of 쓰려면 object.value로 배열로 만들어야.
  console.log(i);
}

Object.defineProperty(obj, "level", {
  enumerable: false,
});

for (let i in obj) {
  console.log(i, obj[i]);
}
Object.freeze(obj);

console.log("-----------------------");
data = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];

function makeObjectFromArray(arr) {
  const results = [];
  for (const [key, val] of Object.entries(data)) {
    //첫번째것만 key로 쓸거다. 나머진 알아서 밸류
    //results.push([...val]);
    results[key] = val;
  }
  return results;
}
const arr1 = makeObjectFromArray(data);
console.log(arr1);
console.log(Object.entries(arr1));

function makeArrayFromObject(arr1) {
  const results = [];
  for ([key, val] of Object.entries(arr1)) {
    results.push([key, val]);
  }
  return results;
}
const arr2 = makeArrayFromObject(arr1);
console.log(arr2);

console.log("--------------------------------");
function shallowCopy(obj) {
  const ret = {};
  for (const k of Object.keys(obj)) {
    ret[k] = obj[k];
  }
  return ret;
}

function deepCopy(obj) {
  const ret = {};
  for (const [k, v] of Object.entries(obj)) {
    ret[k] = typeof v === "object" ? { ...v } : v;
  }
  return ret;
}
const kim = { nid: 3, nm: "Kim", addr: "Pusan" };
const newKim1 = shallowCopy(kim);
newKim1.addr = "Daegu";
console.log(kim.addr !== newKim1.addr); // true면 통과!
// 2) 이하 deep copy
const kim2 = {
  nid: 3,
  nm: "Kim",
  addr: { city: "Pusan", road: "Haeundaero", zip: null },
};

const newKim2 = deepCopy(kim2);
newKim2.addr.city = "Daegu";
console.log(kim2.addr.city !== newKim2.addr.city); // true면 통과!
