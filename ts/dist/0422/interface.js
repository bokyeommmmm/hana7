"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let xx = { id: 1, name: "Hong" };
xx = { id: 2, age: 33 };
let yy = { id: 11, name: "Hong", age: 33 };
let pp = { id: 2 };
let qq = { id: 2, name: "hong" };
let tt = { id: 1 };
// tt.id = 100; // id는 readonly -> 변경 불가!
tt.name?.toUpperCase();
const typedCallSignature = (input) => input.length;
typedCallSignature.count = 0;
typedCallSignature.greeting = (name) => console.log(`Hi, ${name}`);
function f() {
    console.log(this.x);
}
f.bind({ x: "123" })();
//=============================================================================
