import assert from "assert";
type Prop = string | number | symbol;

declare global {
  interface Array<T> {
    //<> => c++ 템플릿같은듯
    firstObject: T;
    lastObject: T;
    mapBy: (prop: Prop) => any[];
    filterBy: (prop: Prop, value: unknown, isInclude?: boolean) => T[];
    findBy: (prop: Prop, value: unknown) => T;
  }
}
const arr = [1, 2, 3, 4, 5];
const hong = { id: 1, name: "Hing" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const users = [hong, lee, kim];

Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this[0];
    },
    set(value) {
      this[0] = value;
    },
  },
  lastObject: {
    get() {
      return this.at(-1);
    },
    set(value) {
      this[this.length - 1] = value;
    },
  },
});

assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);

assert.deepStrictEqual(users.firstObject, hong);
assert.deepStrictEqual(users.lastObject, kim);

Array.prototype.mapBy = function (prop) {
  return this.map((a) => a[prop]);
};
assert.deepStrictEqual(users.mapBy("id"), [1, 3, 2]);
assert.deepStrictEqual(users.mapBy("name"), ["Hing", "Lee", "Kim"]);

Array.prototype.filterBy = function (prop, value, isInclude) {
  //   const cb = isInclude
  //     ? (a) => a[prop].includes(value)
  //     : (a) => a[prop] === value;
  return this.filter((a) =>
    isInclude ? a[prop].includes(value) : a[prop] === value
  );
};
assert.deepStrictEqual(users.filterBy("id", 2), [kim]);
assert.deepStrictEqual(users.filterBy("name", "i", true), [hong, kim]); // key, value일부, isInclude

Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value);
};
assert.deepStrictEqual(users.findBy("name", "Kim"), kim);
users.firstObject = kim;
assert.deepStrictEqual(users.firstObject, kim);
users.lastObject = hong;
assert.deepStrictEqual(users.lastObject, hong);

//======================================================

interface User {
  id: number;
  name: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
}
interface Ud2 {
  //   id: number; // 중복되더라도 이걸 추가해줘야 ud3.id가 자동완성됨
  [x: string]: number | string;
  addr: string;
}

// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = { id: 1, name: "HH", addr: "Seoul" };
const ud3: Ud2 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };
