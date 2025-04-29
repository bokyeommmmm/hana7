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
// regist 함수가 다음과 같을 때 파라미터 처리를 해보세요.
function registUserObj({ name, age }: { name: string; age: number }) {
  const id = 100;
  return { id, name, age };
}

type RegistUserObj = Parameters<typeof registUserObj>[number];

const paramObj: RegistUserObj = { name: "Hong", age: 32 };
const newUser2 = registUserObj(paramObj);
console.log("🚀  newUser2:", newUser2);

//====================================================================
const debounce = <T extends (...args: Parameters<T>) => any>(
  //이 방식이 낫다
  cb: T,
  delay: number = 1
) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<typeof cb>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};

const throttle = <T extends unknown[]>(
  cb: (...args: T) => any,
  delay: number = 1
) => {
  //이방식은 그닥
  let timer: ReturnType<typeof setTimeout> | null;
  return (...args: T) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

const debo = debounce((a: number, b: string) => console.log(a + 1, b), 1000);
for (let i = 10; i < 15; i++) debo(i, "abc"); // 15, 'abc'

const thro = throttle((a: number) => console.log(a + 1), 1000);
for (let i = 10; i < 15; i++) thro(i); // 11
//====================================================================
//memoized
function memoized<T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T) {
  const cache: Record<string, any> = {};
  return function (...args: Parameters<T>) {
    const k = [...args].join(); //sort안하는게 좀 더 범용적일지도
    // const k = [...args].sort().join();
    return k in cache ? cache[k] : (cache[k] = fn(...args));
  };
}
const memoizeAdd = memoized((a: number, b: number) => {
  return a + b;
});
console.log(memoizeAdd(1, 2)); // 3
console.log(memoizeAdd(3, 4)); // 7
const memoizeFactorial = memoized((n: number): number => {
  if (n <= 1) return 1;

  return n * memoizeFactorial(n - 1);
});

export {};
