/*
// cf. Object Method

const dog = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(this.showMyName.bind(this), 1000); //(1)
    setTimeout(() => this.showMyName(), 1500); //(2)
  },
};

// same as weeks = '일월화수목금토' (: 유사배열객체)
const weeks = ["일", "월", "화", "수", "목", "금", "토"];

const weekName = () => (weekNo) => weeks[weekNo];

const getWeekName = function (weekNo) {
  return `${weeks[weekNo]}요일`;
};

const day = new Date().getDay();
console.log(`오늘은 ${getWeekName(day)}입니다!`);

dog.whatsYourName();

return;
globalThis.name = "GlobalName";
this.name = "ModuleName";

function f() {
  console.log("f.this = ", this.name);
}
f();

const af = () => console.log("af.this = ", this.name); //modulename
af();

const obj = {
  name: "ObjName",
  bark() {
    // good!(호출한 객체)
    console.log("bark=", this.name);
  },
  bark2: () =>
    // bad!! (this=전역/module)
    console.log("bark2=", this.name),
};

obj.bark();
obj.bark2();

// return ;
const expressFn = function (name) {
  // if, 'use strict' ?  -> this 쓸수가 없다.  bind해서 써야함..
  "use strict";
  this.name = name;
  console.log(new.target, this.name, name);
};

const arrowFn = (name) => {
  // this.name = name;
  console.log("--->", this, this.name, name);
};

expressFn.bind({})("expfn"); //strict mode 아니면 bind 안해도 댐.
arrowFn("afn");

const dfn = new expressFn("D");
console.log("console.log(); ~ dfn:", Object.getPrototypeOf(dfn));
//   const afn = new arrowFn('A'); // error!  화살표함수는 new 불가능

console.log("---------------------");
const Dog = function (name) {
  console.log(name, "---->", this, new.target, this instanceof Dog);
  this.name = name;
  this.bark = function () {
    //new로 불렀을때만 this가 dog이다 ?
    console.log("bark=", new.target, this.name, name);
  };
  this.bark2 = () => console.log("bark2=", new.target, this.name, name);
};

const dog = Dog("Doggy");
const lucy = new Dog("Lucy");
//   Dog.bark(); // ?
lucy.bark(); // ?     //이건 있다.
lucy.bark2(); // ?    //이것도 있다.
console.log("dog  type1=", typeof dog); // ?
console.log("lucy type2=", typeof lucy); // ?

console.log("-----------");
const Cat = (name) => {
  console.log("Cat>>", this);
  this.name = name;

  this.bark = function () {
    console.log("bark=", new.target, this.name, name);
  };

  this.bark2 = () => console.log("bark2=", this.name, name);

  return this;
};

const cat = Cat("Coco");
// const cat = new Cat(''); // error!!
// cat.bark(); // ?
// cat.bark2(); // ?
// Cat.bark(); // ?  // 여기 function object에는 bark없다. -> 에러 . 꼭 쓰려면 Cat().bark() -> 이레도 뭔가 제대로 작동 x
console.log("type=", typeof cat); // ?

//   cf. FunctionEnvironmentRecord.[[ThisValue]]

const hong = { id: 1, name: "Hong" };
const kim = { id: 1, name: "Kim" };

expressFn.bind(hong)("expfn");
arrowFn.bind(kim)("afn");
expressFn.call(hong, "expfn");
expressFn.apply(hong, ["expfn"]);
*/

const debounce = (cb, delay) => {
  let timer;
  return (...args) => {
    //argument 몇갠지 몰라 n개 받겠지 뭐
    if (timer) clearTimeout(timer);
    timer = setTimeout(debounce, delay, ...args);
  };
};
const throttle = (cb, dleay) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(cb, delay, ...args);
    timer = null;
  };
};

Array.prototype.mapx = function (f) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    results[i] = f(this[i], i, this);
  }
  return results;
};

const farr = [1, 2, 3, 4];
const rets = farr.map((a, i, arr) => console.log(a, i, a * i));
console.log("console.log(); ~ rets:", rets);

const roots = farr.map(Math.sqrt);
console.log("console.log(); ~ roots:", roots);

const unary = (f) => (f.length === 1 ? f : (arg) => f(arg));

const sarr = ["11", "22", "33", "44", "55"];
const sresultes = sarr.map(parseInt);
console.log("console.log(); ~ sresultes:", sresultes); //NaN
const sresultes2 = sarr.map(unary(parseInt));
console.log("console.log(); ~ sresultes2:", sresultes2);
