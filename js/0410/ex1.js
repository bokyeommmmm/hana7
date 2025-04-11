const weeks = ["일", "월", "화", "수", "목", "금", "토"];

const getNextWeek = (() => {
  let widx = -1;
  return () => {
    widx += 1;
    if (widx >= weeks.length) widx = 0;
    return `${weeks[widx]}요일`;
  };
})();

let cnt = 0;
const intl = setInterval(() => {
  console.log("call", cnt, getNextWeek());
  if (++cnt === 8) clearInterval(intl);
}, 1000);

return;
const before = () => console.log("before....");
const after = (result) => console.log("after...", result);

const template = (fn) => {
  return (...args) => {
    before();
    const result = fn(...args);
    setTimeout(function () {
      after(result);
    }, 1000);

    return result;
  };
};
const someFn = (name, greeting) => `${greeting}, ${name}`;
const someFn2 = (id, nickname, email, level) =>
  `${id}/${nickname}/${email}/${level}`;

const temp = template(someFn);
const temp2 = template(someFn2);

console.log("temp1>>", temp("sico", "hello"));
console.log("temp2>>", temp2(1, "sico", "sico@gmail.com", 5));

return;
function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args); //외부에서 전달된 context 유지. 원래 this는 once에서 리턴된 함수가 어디서 호출되느냐에 따라 달라짐.
      return result;
    }
    return undefined;
  };
}

function onceAgain(fn, rebirthDelay = 1000) {
  let available = true;
  return function (...args) {
    if (!available) return;
    available = false;
    setTimeout(() => (available = true), rebirthDelay);
    return fn.apply(this, args);
  };
}

function fivePart(x, y) {
  return `fivePart ${x}, ${y}, id: ${this.id}`;
}
const fn = once(fivePart.bind({ id: 11 }));
console.log(fn(1, 2));
const fn2 = once(fivePart);
console.log(fn2.bind({ id: 22 })(3, 4));

const say = onceAgain(() => console.log("✅ 실행됨!"), 1000);

say();
say();
setTimeout(say, 1100);
