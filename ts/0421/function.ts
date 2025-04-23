function add(a: number, b: number): number {
  //반환형을 :number로 명시 가능 . 안써도 무방한 경우가 있다 .
  return a + b;
}

const add2 = (a: number, b: number): number => a + b;
//화살표 함수의 경우엔 리턴타입 잘 안쓰는데 굳이 쓰자면 화살표 직전에 그래도 리턴은 유추 가능하므로 주로 생략한다.
const add3 = (a: number, b: number) => a + b;
//add3이 연산속도 빠름

//================================================

const introduce = (name: string, height?: number) => {
  //height를 선택적 매개변수로
  console.log(`이름 : ${name}`);
  //   console.log(`키 : ${height + 10}`);

  //   console.log(`키 : ${(height ?? 0) + 10}`); //하면 이렇게 하거나

  if (height) console.log(`키 : ${height + 10}`);
  //Error : 'height' is possibly 'undefined'.
};

introduce("김현준"); // OK
introduce("김현준", undefined); // OK
introduce("김현준", 0); // OK
introduce("김현준", 170); // OK

//================================================

const introduce2 = (name: string, height: number | undefined) => {
  console.log(`이름 : ${name}`);
  if (typeof height === "number") {
    console.log(`키 : ${height + 10}`);
  }
};

// introduce2("김현준"); // Error : Expected 2 arguments, but got 1.
introduce2("김현준", undefined); // OK
introduce2("김현준", 170); // OK

// ================================================

const introduce4 = (name: string, height = 0) => {
  console.log(`이름 : ${name}`);
  console.log(`키 : ${height + 10}`);
};

introduce4("김현준4"); // OK
introduce4("김현준4", undefined); //undefined 가 0으로 생각된다 .
introduce4("김현준4", 170);

// introduce4("김현준", "이재현");
//Error: Argument of type 'string' is not assignable to parameter of type 'number'.

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const afactorial = (n: number): number => {
  if (n <= 1) return 1;
  return n * afactorial(n - 1);
};

const af = (n: number): number => (n <= 1 ? n : n * af(n - 1));

// ================================================

let singer: (song: string) => string;

singer = function (song) {
  // song : string의 타입
  return `Singing : ${song.toUpperCase()}!`; // OK
};

// ================================================

const arr3 = [1, 2, 3];
arr3.map((a, i) => a + i);

const arr4 = [1, 2, 3, "4"];
arr4.map((a, i) => "" + a + i);
arr4.map((a, i) => Number(a) + i);

// ================================================

function ff(params: number): void {
  // : undefined랑 큰 의미차이 없다?
  //void : return 없음 .
  console.log("ff");
  //   return 1; //불가능
  //   return undefined; //가능은 한데 굳이 ? return undefined 쓸 일 없다!
}
const rf1 = ff(1);

type F = () => void;
const f5: F = () => {};
const f6: Function = (n: string) => {}; //Function이라는 타입 자체가 존재한다ㅏ.
const obj: Object = {};

// ================================================

// globalThis.id = 10;     //여기부터 에러 globalthis는 id 없다. 직접 컨트롤 불가능 .
function tfn(this: { id: number }, x: string) {
  console.log("tfn >> ", this.id, x);
}
tfn.bind({ id: 1 })("X"); //바로 위 this에 bind
//fn.call({id:1});

function ntfn(this: void, x: string) {
  console.log("ntfn >> ", x);
}
// ntfn.call(id:1) //call을 할 수 없다.
ntfn("Y");

let u: Object = { id: 1 };
u = {};
u = [];
u = function () {}; //죄다 Object로 돌아가는데 무슨의미냐. any보다 조금 나은정도 .

// ================================================

const t = setTimeout(console.log, 1000, "1");

const a: number[] = [1, 2, 3];
// a[100].toFixed(); //"noUncheckedIndexedAccess": true와 관련있다. (/tscongfig.json)
a[100]?.toFixed();
const b = [4, 5, "6"];
const c = [...a, ...b];
// const d = a.concat(b); 안된다.

// ================================================

interface SomeInterface {
  [key: string]: number | undefined;
}

let is: SomeInterface = {
  one: 1,
  two: 2,
};

is["four"]?.toFixed(2);
is["one"]?.toFixed(2);

type IS = {
  [k: string]: string | number;
  3: number;
};
type IS2 = {
  [k: number]: string | number;
  id: number;
};
let isobj1: IS = { id: 1, name: "Hong", 3: 5 };
let isobj2: IS2 = { 3: 5, id: 3 };
{
  type A = { name: string; addr: string };
  const blockA: A = { name: "Hong", addr: "Pusan" };
  console.log("console.log(); ~ blockA:", blockA);
}
//숫자는 기본적으로 number가 아니라 string 취급 받는다.
// ================================================
type A = {
  name: string;
  age: number;
};
const outerA: A = { name: "Kim", age: 33 };
// const outerA2: A = { name: "kim", addr = "seoul" }; // block scope
type B = {
  name: string;
  addr: string;
};

const onlyA: A[] = [
  { name: "lim", age: 10 },
  { name: "hong", age: 20 },
];
const onlyB: B[] = [
  { name: "jang", addr: "Seoul" },
  { name: "park", addr: "Busan" },
];
const aOrB = [...onlyA, ...onlyB];
// (A|B)[]

const abobj = {
  name: "Tan",
  age: 30,
  addr: "Incheon",
  x: 1,
};
let abx: A | B = {
  name: "Tan",
  age: 30,
  addr: "Incheon",
  // x:1  //불필요한놈 들어가면 에러
};
// let abx: A | B = abobj; //이렇게 넣으면 된다 .

aOrB.push({
  // 가능! union은 freshness에서 제외!
  name: "Tan",
  age: 30,
  addr: "Incheon",
});

// aOrB.push(abobj); //얘도 이런식으로 넣으면 쓸데없는값 있어도 된다.
// // p.23 (유니언 타입) 참고…
// type TUser = { id: number; name: string };
// const obj = { id: 1, name: "aa", addr: "1212" };
// let user: TUser = obj;
// const kim = { id: 2, name: "Kim", addr: "Pusan" };
// const users: TUser[] = [{ id: 3, name: "aa", addr: "1212" }, kim]; // kim과 TUser가 할당될 때 TUser | typeof kim
// ================================================

function tuple() {
  const a: [number, string, boolean] = [1, "lim", false];
  let b: [number, string] = [a[0], a[1]];
  console.log("console.log(); ~ tuple ~ b:", b);
}
tuple();

const greeting = (greet: "Hi" | "Hello", name: string, age: number) => {
  console.log(`${greet}~ ${name}, You are ${age}.`);
  return [name, age] as const; //as const를 붙여 안정적으로. 혹은 리턴타입에서 튜플로 고정해줘도 댐
  // return [age, name]; //이렇게 해도 gr1 된다
};
const gr1 = greeting("Hi", "Hong", 33);
console.log("console.log(); ~ gr1:", gr1[0]);

const tup: [string, number] = ["Kim", 55];
greeting("Hello", ...tup); //튜플은 배열 길이가 정해져있어 가능하다 .
const ary = ["Park", 44];
// greeting("Hello", ...ary);
// greeting("Hello", ary[0], ary[1]); //이래도 안된다.

// ================================================

const arr = [1, 2, 3];
// const arr1 = arr as const; //arr이 몇개인지도 모르는데 어캐 const로 하냐! 길이가 정해져있지 않잖아 .
// //TS는 실행해보기 전이라 모른다 그래서 arr을 as const 취급하거나 튜플로
const arr2: [number, number, number] = [4, 5, 6];
// const arr22 = arr2 as const;  //안된다 얘도
const arr22 = [4, 5, 6] as const; //걍 일케 하자

type T1 = [string, number];
type AT1 = [number, string, number];
type AT2 = [number, T1]; //[number ,[string,number]]
type AT3 = [number, ...T1]; // [number,string,number]
export {};
