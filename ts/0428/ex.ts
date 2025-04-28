interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}
// type Exclude<T,U> = T extends U?never:T; // 기본
type Combine<T, U> = {
  [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
};
type CombineExclude<T, U, E extends keyof Combine<T, U>> = {
  //   [k in Exclude<keyof Combine<T, U>, E>]: (T  U)[k];
  [k in Exclude<keyof Combine<T, U>, E>]: Combine<T, U>[k]; //위로하거나 이걸로하거나
};
type ICombineExclude = CombineExclude<IUser, IDept, "name" | "dname">;

let combineExclude: ICombineExclude = {
  id: 0,
  age: 33,
  captain: "ccc",
};

//====================================================================
regist 함수가 다음과 같을 때 파라미터 처리를 해보세요.
function registUserObj({ name, age }: {name: string; age: number}) {
  const id = 100;
  return { id, name, age };
}

type RegistUserObj = Parameters<이용하여 이 부분을 작성해 보세요>;

const paramObj: RegistUserObj = { name: 'Hong', age: 32 };
const newUser2 = registUserObj(paramObj);
console.log('🚀  newUser2:', newUser2);

//====================================================================

export {};
