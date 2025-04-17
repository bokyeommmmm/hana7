const assert = require("assert");

const str = "Senior Coding";
const a = /[A-z\d]/.test(str); // ?
console.log("🚀 a:", a);

const b = /(A-z\d)/.test(str); // ?
console.log("🚀 b:", b);

const c = /(A-z\d)/.test("XA-z2"); // ?
console.log("🚀 c:", c);

const d = /(A-z\d)/.test("XA-z2"); // ?
console.log("🚀 d:", d);

const r1 = str.replace(/[A-z]/g, "*");
console.log("🚀 r1:", r1);

// const regexp1 = /[A-Z]/;
// const regexp1 = new RegExp(/[A-Z]/);
const regexp1 = new RegExp("[A-Z]", "g");
const r11 = regexp1.exec(str);
console.log("🚀 r11:", r11);
const r12 = regexp1.exec(str);
console.log("🚀 r12:", r12);
const r13 = regexp1.exec(str);
console.log("🚀 r13:", r13);

const regexp = /senior|coding/gi;
if (regexp.test("Junior Developer")) console.log("11OK");
if (regexp.test("Senior Developer")) console.log("22OK");
if (regexp.test("JS Coding")) console.log("33OK");
if (regexp.test("JavaScript Coding")) console.log("44OK");

// ------------------
function xx(...args) {
  console.log("xxx>>", ...args);
}
const star = "Senior Coding Learning JS".replace(
  /[A-Z]/g,
  (foundStr, position) => {
    if (foundStr === "L") return "X" + position;
    return foundStr.toLowerCase() + position;
  }
);
console.log("🚀 star:", star);

const e1 = encodeURI("https://한글.kr?q=세종대왕");
const e2 =
  "https://hanaro.com?url=" + encodeURIComponent("https://한글.kr?q=세종대왕");
console.log("🚀 e1 e2:", e1, e2);

const total = { price: 45000, vat: 4500 };
console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);

function fmt(txts, value) {
  return `${txts[0]}${value.toLocaleString().padStart(8)}${txts[1]}`;
}

console.log("--------------------");
// ex1
const upperToLower = (str) =>
  str.replace(/[A-Z]+/g, (foundStr) => foundStr.toLowerCase());

const low = upperToLower("Senior BIG Coding Learning JS");
console.log("🚀 low:", low);

const swapCase정답 = (str) =>
  str?.replace(
    /([A-Z]+)([a-z]*)/g,
    (foundStr, upper, lower) => `${upper.toLowerCase()}${lower.toUpperCase()}`
  );

const swapCase = (str) =>
  str?.replace(/([A-Z\s]*)([a-z]*)/g, (foundStr, upper, lower) => {
    // if (!foundStr?.trim()) return '';
    console.log("***>>", foundStr, upper, lower);
    return `${upper.toLowerCase()}${lower.toUpperCase()}`;
  });
console.log(swapCase("Senior abc Coding Learning JS"));
return;

assert.equal(
  swapCase("Senior abc Coding Learning JS"),
  "sENIOR cODING lEARNING js"
);
assert.equal(swapCase("Hanaro 7 Class"), "hANARO 7 cLASS");
