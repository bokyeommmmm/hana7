type TUser = { id: number; name: string };

let hong: TUser = { id: 1, name: "Hong" };
hong = Object.assign({ id: 1 }, { name: "Kim" });

// hong = { id: 2, name: "Kim", addr: "Seoul" }; //hong은 freshness(내 입력으로 바뀌는)상태 그래서 오류 -> 담기다가 TUser랑 충돌. (addr)
// hong = { id: 2, name: "Kim", addr: "Seoul" } as TUser ; //as로 타입캐스팅 -> TUser가 갖고있는 프로퍼티만 다 갖고있으면 통과.

const hongx = { id: 2, name: "Kim", addr: "Seoul" };
hong = hongx; //왜 에러가 안나냐면

// const obj = {} as TUser; //이렇게 쓰면 안된다 . as는 꼭 필요할때만 쓰자 .
// hong = obj;

/*
// strictFunctionTypes = true  (false라면 Bivariance)
function f(cb: (input: string | number) => number ) { return cb(1); }
function f2(input: string | number | boolean) { return 1; }
function f3(input: string | number) { return 1; }
function f4(input: string) { return 1; }

f(f2); // OK
f(f3); // OK
f(f4); // Fail! (strictFunctionTypes가 false라면 OK, Bivariance)
*/ // <- 돌려보자 ppt 50페이지
