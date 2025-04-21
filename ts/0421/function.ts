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
// ntfn(hello);
