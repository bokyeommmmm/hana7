const assert = require("assert");

const randTime = (value) =>
  new Promise((resolve) => setTimeout(resolve, 1000 * Math.random(), value));

const promiseAll = (promises) =>
  new Promise((resolve, reject) => {
    const results = [];
    let runCnt = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          results[i] = res;
          runCnt += 1;
          if (promises.length === runCnt) resolve(results);
        })
        .catch(reject);
    }
  });

console.time("X");
promiseAll([randTime(1), randTime(2), randTime(3)])
  .then((arr) => {
    console.table(arr);
    assert.deepStrictEqual(arr, [1, 2, 3]);
    console.timeEnd("X");
  })
  .catch(console.error);

promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.log("여긴 과연 호출될까?!", array);
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });
