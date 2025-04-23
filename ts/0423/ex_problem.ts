const isStringNumber = (value: unknown): value is [string, number] => {
  return (
    Array.isArray(value) &&
    value.length === 2 &&
    typeof value[0] === "string" &&
    typeof value[1] === "number"
  );
};

const f1 = (value: number | string | boolean | [string, number]) => {
  //   <이 부분을 작성하시오>
  if (isStringNumber(value)) {
    console.log(value[0].toUpperCase(), value[1].toFixed());
  }
};

//------------------------------------------------------------------------------

interface Animal {}
interface Dog extends Animal {
  name: string;
}
interface Cat extends Animal {
  punch(): void;
}
class Retriever implements Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

function isDog(a: Animal): a is Dog {
  //   <이 부분을 작성하시오>
  return typeof (a as any).name === "string";
}

const a = new Retriever("king");
if (isDog(a)) console.log(`${a.name} is a dog`);
//-------------------------------------------------------------------------------

//---------------// 문제1) 다음에서 T1과 동일한 타입으로 T2를 정의하시오.

const cart = {
  X: 1,
  Y: 2,
  Z: 3,
};

type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart;
//객체의 키들만 모아서 유니온 타입으로 만들어주는 것
//-------------------------------------------------------------------------------
// 문제2) 다음에서 T3과 동일한 타입으로 T4를 정의하시오.

const constCart = {
  X: 1,
  Y: 2,
  Z: 3,
} as const;
//as const는 해당 객체를 읽기 전용 + 리터럴 값 그대로 유지
//constCart.X는 number가 아니라 리터럴 1

type T3 = 1 | 2 | 3;
type T4 = (typeof constCart)[keyof typeof constCart];

//-------------------------------------------------------------------------------
//다음에서 '가', '나', '다' 어떤 걸 throw 해도 에러 메시지를 출력하도록 (라) 부분을 수정하시오. (type predicate)
try {
  // throw new Error('some error!!!!');   // 가
  // throw 'some string error!!!';        // 나
  throw ["some", "array", "error"]; // 다
} catch (error) {
  if (error instanceof Error) {
    //Error 객체일 경우 → .message 출력
    console.log(error.message);
  } else {
    //그 외 (string, array, 등) → 그 자체 출력
    console.log(error);
  }
}
//-------------------------------------------------------------------------------

// deleteArray()는
// 숫자 배열이면 → 인덱스 범위로 삭제
// 객체 배열이면 → 속성 값 기준으로 삭제하는
// 다형적(다기능) 배열 필터링 함수를 구현하라는 문제예요!
type TPropertyKeyType = string | number | symbol;
type TUser = { [key: string]: string | number };

function deleteArray(
  arr: TUser[] | number[],
  startOrKey: TPropertyKeyType,
  endOrValue?: unknown
) {
  if (typeof startOrKey === "number") {
    if (typeof endOrValue === "number") {
      return arr.filter((_, i) => i < startOrKey || i > endOrValue - 1);
    }
    return arr.slice(0, startOrKey);
  }

  if (typeof startOrKey === "string") {
    arr.filter((e) => {
      if (e && typeof e === "object") {
        // e['id'];  error
        // e[startOrKey];  error
      }
    });
  }

  if (typeof startOrKey === "symbol") {
  }

  return [];
}
const arr = [1, 2, 3, 4];
console.log(deleteArray(arr, 2)); // [1, 2]
console.log(deleteArray(arr, 1, 3)); // [1, 4]
console.log(arr); // [1, 2, 3, 4]

const users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];

console.log(deleteArray(users, 2)); // [Hong, Kim]
console.log(deleteArray(users, 1, 2)); // [Hong, Lee]
console.log(deleteArray(users, "id", 2)); // [Hong, Lee]
console.log(deleteArray(users, "name", "Lee")); // [Hong, Kim]
//-------------------------------------------------------------------------------

export {};
