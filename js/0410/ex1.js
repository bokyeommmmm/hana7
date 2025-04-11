// const weeks = ["일", "월", "화", "수", "목", "금", "토"];

// const getNextWeek = (() => {
//   let widx = -1;
//   return () => {xs
//     widx += 1;
//     if (widx >= weeks.length) widx = 0;
//     return `${weeks[widx]}요일`;
//   };
// })();
const getNextWeek = (() => {
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  let widx = -1;
  return () => `${weeks[++widx]}요일`;
})();
let cntx = 0;
const intl = setInterval(() => {
  console.log("call", cntx, getNextWeek());
  if (++cntx === 7) clearInterval(intl);
}, 1000);

return; //-------------------------------------------------------------------------------------------
const before = () => console.log("before....");
const after = (result) => console.log("after...", result);

const templete = (f) => {
  //after를 백그라운드에서 돌아가게 해.
  return (...args) => {
    before();
    const result = f(...args);
    setImmediate(after, result);
    return result;
  };
};
const someFn = (name, greeting) => `${greeting}, ${name}`;
const someFn2 = (id, nickname, email, level) =>
  `${id}/${nickname}/${email}/${level}`;

const temp = templete(someFn);
const temp2 = templete(someFn2);

console.log("temp1>>", temp("sico", "hello"));
console.log("temp2>>", temp2(1, "sico", "sico@gmail.com", 5));

return; //--------------------------------------------------------------------------------------------------------

const once = (f) => {
  let done = false;
  return (...args) => {
    if (done) return;
    done = true;
    return f(...args);
  };
};

const onceAgain = (f, rebirthDelay) => {
  let done = false;
  return (...args) => {
    if (done) return;
    done = true;
    setTimeout(() => (done = false), rebirthDelay);
    return f(...args);
  };
};
const fn1sec = onceAgain(fivePart, 1000);
let cnt = 0;

const cb = () => console.log(`${++cnt / 10}초`, fn1sec(cnt, 0.1));
setInterval(cb, 100);

function fivePart(x, y) {
  return `fivePart ${x}, ${y}, id: ${this.id}`;
}
const fnx = once(fivePart.bind({ id: 11 }));
console.log(fnx(1, 2));
const fn2 = once(fivePart);
console.log(fn2.bind({ id: 22 })(3, 4));

const say = onceAgain(() => console.log(" 실행됨!"), 1000);

say();
say();
setTimeout(say, 1100);
