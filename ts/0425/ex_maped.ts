type Combine<T, U> = {
  [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
};
type ICombined = Combine<IUser, IDept>;

interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

let combineX: ICombined = {
  id: 0,
  age: 33,
  name: "aaa",
  dname: "bbb",
  captain: "ccc",
};
let combineY: ICombined = {
  id: 0,
  age: "33세",
  name: "aaa",
  dname: "bbb",
  captain: "ccc",
};
///===============================================================================
type ArrayItems<T /*X = unknown (infer 쓰기때문에 이부분 안쓰는게 더 맞다 .*/> =
  T extends (infer X)[]
    ? // T extends unknown[] ? T[number] : T // '참'이라면 Item이라는 Generic Type을 선언(생성)
      X
    : T; // '거짓'일 때는 정확히 추론할 수 없으므로 사용하면 안됨!

type StringItem = ArrayItems<string>; // string
type StringArrayItem = ArrayItems<string[]>; // string
type NumberArrayItem = ArrayItems<number[]>; // number
type BooleanArrayItem = ArrayItems<boolean[]>; // boolean
type StringArrayItem2 = ArrayItems<Array<string>>; // string[] ⇒ string
type String2DItem = ArrayItems<string[][]>; // string[]

///===============================================================================

type Excludex<T, U> = T extends U ? never : T;
type Ee = Exclude<string | number, string>;
type Ex = Excludex<string | number | boolean, string | boolean>;

type Berry = `${string}berry`;
const x1: Berry = "Strawberry";
const x2: Berry = "blueberry";
const x3: Berry = "cloudberry";
const x4: Berry = "blackberry";
const page: `Page.${number}` = "Page.1";

type ItemPrice = Record<string, number>;

///===============================================================================

// 첫 번째 인자 타입 추출
type FirstArgs<F> = F extends (a: infer A, ...args: any) => any ? A : never;

// 두 번째 인자 타입 추출
type SecondArgs<F> = F extends (a: any, b: infer B, ...args: any) => any
  ? B
  : never;

// 전체 인자 타입을 유니언으로 추출
type Args<F> = F extends (...args: infer A) => any ? A[number] : never;

function add(a: number, b: string, c: boolean) {
  return `${a} - ${b} + ${c}`;
}

type A = FirstArgs<typeof add>; // number
type B = SecondArgs<typeof add>; // string
type C = Args<typeof add>; // number | string

type AX = Args<typeof String.prototype.endsWith>;
// ⇒ string | number | undefined
type AX2 = Args<typeof String.prototype.charAt>;
// ⇒ number

let a: A = 0;
let b: B = "abc";
let c: C = Math.random() > 0.5 ? 1 : "abc";
console.log("🚀 abc:", a, b, c);
