"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
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
assert_1.default.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
assert_1.default.deepStrictEqual(users.firstObject, hong);
assert_1.default.deepStrictEqual(users.lastObject, kim);
Array.prototype.mapBy = function (prop) {
    return this.map((a) => a[prop]);
};
assert_1.default.deepStrictEqual(users.mapBy("id"), [1, 3, 2]);
assert_1.default.deepStrictEqual(users.mapBy("name"), ["Hing", "Lee", "Kim"]);
Array.prototype.filterBy = function (prop, value, isInclude) {
    //   const cb = isInclude
    //     ? (a) => a[prop].includes(value)
    //     : (a) => a[prop] === value;
    return this.filter((a) => isInclude ? a[prop].includes(value) : a[prop] === value);
};
assert_1.default.deepStrictEqual(users.filterBy("id", 2), [kim]);
assert_1.default.deepStrictEqual(users.filterBy("name", "i", true), [hong, kim]); // key, value일부, isInclude
Array.prototype.findBy = function (prop, value) {
    return this.find((a) => a[prop] === value);
};
assert_1.default.deepStrictEqual(users.findBy("name", "Kim"), kim);
users.firstObject = kim;
assert_1.default.deepStrictEqual(users.firstObject, kim);
users.lastObject = hong;
assert_1.default.deepStrictEqual(users.lastObject, hong);
// 다음 코드가 오류가 없으면 통과!
const ud2 = { id: 1, name: "HH", addr: "Seoul" };
const ud3 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };
