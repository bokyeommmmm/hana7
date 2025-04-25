"use strict";
const cname = "string"; // type alias
const myName = "kyeommmmm";
myName.length;
let age;
age = 33;
let lastName = "King"; //string | boolean 없으면 아랫줄 오류
lastName = true;
console.log(`Hello ${myName} ${age}`);
let nm = "Hong";
if (nm === "Hong")
    nm = "Kim";
const something = ({ id, name, age, address }) => {
    //   id: string;
    //   name: string;
    //   age: number;
    //   address: string;
    // })
    // => {
    // Do something...
    console.log(id, name, age, address);
};
// const user = { id: "1", name: "Hong", age: 33, address: "seoul" }; //자료형 맞춰줘야함. -> Hong 이 걸릴거임 .
const user = { id: "1", name: "Hong", age: 33, address: "seoul" }; //자료형 정해줌으로써 freshness 문제 해결 .
something(user);
//=======================================================
// let x: string | undefined
// let x: string | undefined = "str";  //str이 문자열이어서 오류 X.
// let x: string | undefined = "str"; //str이 문자열이어서 오류 X.
// let y: string | number = x;
let x = Math.random() > 0.5 ? "str" : undefined; //str이 문자열이어서 오류 X.
let y = x; // x가 명확한 값이어야 오류 x.
let z;
if (x)
    z = x;
if (typeof x === "string")
    z = x;
let g;
let m;
let cust;
let mg;
cust = {
    name: "홍길동",
    addr: "용산구",
    discountRate: 0.1, //타입과 완벽히 property가 일치해야함 .
};
// if (cust instanceof Object) cust = { name: "", age: 0 }; //당연히 object타입.
//cust.age =9;  //cust는 이미 member로 인지되었기에 age 값 할당 불가 .
m = cust;
mg = cust;
// g=cust ; //될 리가 없다 .
cust = {
    name: "홍길동",
    addr: "용산구",
    discountRate: 0.1,
    age: 26,
};
mg = cust;
// m=cust;
// g=cust;      //둘 다 될리가없다 당연히 .cust는 member, guest 전부 아니기에.
if ("age" in cust)
    g = cust; //age가 cust에 있는지 확인. -> type guard :조건문 없으면 오류
if ("addr" in cust)
    m = cust;
// if ("name" in cust) m = cust;//name은 멤버 게스트 둘 다 있는 프로퍼티라 명확하지 않음 .
// let arr: [number, number, number];
let arr; //위와 같다/
const xarr = Math.random() > 0.5 ? [1, 2, 3] : 123;
// const xarr = Math.random() > 0.5 ? ["x"] : 123; //숫자 배열이 될지가없으니 arr에 할당 불가.
// arr = xarr;  //안된다 xarr이 배열일지 넘버일지 모름
if (Array.isArray(xarr))
    arr = xarr; //가능
