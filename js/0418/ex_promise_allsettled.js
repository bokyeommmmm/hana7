const randTime = (value) =>
  new Promise((resolve) => setTimeout(resolve, 1000 * Math.random(), value));

const promiseAllSettled = (promises) =>
  new Promise((resolve) => {
    const results = [];
    let runCnt = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((value) => {
          const status = "fulfilled";
          results[i] = { status, value };
        })
        .catch((reason) => {
          const status = "rejected";
          results[i] = { status, reason };
        })
        .finally(() => {
          runCnt++;
          if (runCnt === promises.length) resolve(results);
        });
    }
  });

promiseAllSettled([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.table(array);
    console.log(JSON.stringify(array, null, "  "));
    console.log("여긴 과연 호출될까?!");
    assert.deepStrictEqual(array, allSettledResults);
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });
