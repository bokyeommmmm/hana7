import { globalAgent } from "http";

//=========== Interface vs Type ==============
type Xid = { id: number };
type Xname = { name: string } & Xid;
type Xage = { age: number } & Xid;

type X = Xname | Xage; // 둘 중 하나만
type Y = Xname & Xage; //둘 다 있어야 함 (intersection)
type Z = string & number;

type P = Xid | (Xname & Xage); //a + bc
type Q = Xid & (Xname | Xage); //ab + ac

let xx: X = { id: 1, name: "Hong" };
xx = { id: 2, age: 33 };

let yy: Y = { id: 11, name: "Hong", age: 33 };

let pp: P = { id: 2 };
let qq: Q = { id: 2, name: "hong" };

// type TT = { id: number; name?: string };
interface TT {
  readonly id: number;
  name?: string;
}
let tt: TT = { id: 1 };
// tt.id = 100; // id는 readonly -> 변경 불가!
tt.name?.toUpperCase();
//=============================================================================
interface CallSignature {
  (input: string): number; // call signa..
  count: 0; // cf. count: number
  greeting: (name: string) => void;
}

const typedCallSignature: CallSignature = (input) => input.length;

typedCallSignature.count = 0;
typedCallSignature.greeting = (name) => console.log(`Hi, ${name}`);

//=============================================================================

interface Novel {
  title: string; // 필수 속성 (실제 사용할 속성)
  [key: string]: string | number | boolean;
} //논리적으로 일치해야한다 !

type User = {
  id: number;
  name: string;
};

// interface Iser {
//   addr: string;
// }

type BoardUser = User & { addr: string }; //이런식으로 extends 쓴다.

//=============================================================================

interface globalThis {
  x: string;
}

function f(this: globalThis) {
  console.log(this.x);
}
f.bind({ x: "123" })();

//=============================================================================
