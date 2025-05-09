const promi = new Promise((resolve, reject) => {
  setTimeout(() => {
    const now = Date.now();
    if (now % 2 === 0) resolve(console.log("fulfill", now));
    else reject(new Error("어디로?"));
  }, 1000);
});

console.log(promi);

promi
  .then(
    (succ) => console.log("Resolve!", succ, promi),
    (err) => console.log("Reject!", err, promi)
  )
  .then((x) => console.log("x =>", x));

x = 1;
let y;
Promise.resolve(x).then((ret) => console.log("ret : ", ret));
console.log("********", y);
