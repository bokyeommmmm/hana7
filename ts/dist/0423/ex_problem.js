"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isStringNumber = (value) => {
    return (Array.isArray(value) &&
        typeof value[0] === "string" &&
        typeof value[1] === "number");
};
const f1 = (value) => {
    //   <이 부분을 작성하시오>
    if (isStringNumber(value)) {
        console.log(value[0].toUpperCase(), value[1].toFixed());
    }
};
f1(["item", 1000]);
class Retriever {
    name;
    constructor(name) {
        this.name = name;
    }
}
function isDog(a) {
    //   <이 부분을 작성하시오>
    //   return typeof (a as any).name === "string";
    return "name" in a && typeof a.name === "string";
}
const a = new Retriever("king");
if (isDog(a))
    console.log(`${a.name} is a dog`);
//-------------------------------------------------------------------------------
//---------------// 문제1) 다음에서 T1과 동일한 타입으로 T2를 정의하시오.
const cart = {
    X: 1,
    Y: 2,
    Z: 3,
};
//객체의 키들만 모아서 유니온 타입으로 만들어주는 것
//-------------------------------------------------------------------------------
// 문제2) 다음에서 T3과 동일한 타입으로 T4를 정의하시오.
const constCart = {
    X: 1,
    Y: 2,
    Z: 3,
};
//-------------------------------------------------------------------------------
//다음에서 '가', '나', '다' 어떤 걸 throw 해도 에러 메시지를 출력하도록 (라) 부분을 수정하시오. (type predicate)
try {
    // throw new Error('some error!!!!');   // 가
    // throw 'some string error!!!';        // 나
    throw ["some", "array", "error"]; // 다
}
catch (error) {
    console.log(error instanceof Error ? error.message : error);
}
function deleteArray(arr, startOrKey, endOrValue) {
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
console.log("==");
console.log(deleteArray(users, 2)); // [Hong, Kim]
console.log(deleteArray(users, 1, 2)); // [Hong, Lee]
console.log(deleteArray(users, "id", 2)); // [Hong, Lee]
console.log(deleteArray(users, "name", "Lee")); // [Hong, Kim]
