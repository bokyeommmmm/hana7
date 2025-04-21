type S = string;
const cname: S = "string"; // type alias

const myName: string = "kyeommmmm";

myName.length;

let age;
age = 33;

let lastName: string | boolean = "King"; //string | boolean 없으면 아랫줄 오류
lastName = true;

console.log(`Hello ${myName} ${age}`);

type Name = "Hong" | "Kim" | "Lee"; //디테일..

type SomeType = {
  id: string | Number;
  name: Name;
  age: number;
  address: string;
};
const something = ({ id, name, age, address }: SomeType) => {
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
const user: SomeType = { id: "1", name: "Hong", age: 33, address: "seoul" }; //자료형 정해줌으로써 freshness 문제 해결 .

something(user);
