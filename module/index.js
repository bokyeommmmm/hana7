// const assert = require("assert"); //common JS style
import assert from "assert"; //ESM style
import moment from "moment";
import xx, { PI } from "./aa.js";
//상대경로 //이 라인이 실행되면 aa.js 다 실행됨
// //default는 괄호 앞으로 가야함 이름은 자유 .

const hello = "Hello Module!";
console.log(hello, moment().startOf("day").fromNow());
assert.equal(hello, "Hello Module!");

const aa = xx();
console.log("console.log(); ~ aa:", aa, PI);

export { PI };
