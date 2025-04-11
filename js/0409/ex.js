const assert = require("assert");
// [... , n-2, n-1, n]
function makeArray(n) {
  if (n === 1) return [1];
  return [...makeArray(n - 1), n]; ///...없이는 n차 배열이 생겨버림 !
}
function makeReverseArray(n) {
  //destructuring으로 코드 직관성 좋아짐.
  if (n === 1) return [1];
  return [n, ...makeReverseArray(n - 1)];
}
function makeArrayTCO(n, acc = []) {
  //TCO는 accumulator를 사용해야함.
  if (n === 1) return [1, ...acc];
  return makeArrayTCO(n - 1, [n, ...acc]); //재귀함수 자신만 리턴 -> TCO
}

const arr = makeArray(5);
console.log(arr);
const reverseArr = makeReverseArray(5);
console.log(reverseArr); // [5, 4, 3, 2, 1]
const arrTCO = makeArrayTCO(5); // [1, 2, 3, 4, 5]
console.log(arrTCO);

console.log(assert.equal(arr[0], "1")); // 에러 없으면 undefined
console.log("--------------------");

// loop - fibonacci
function fibonacci1(n) {
  if (n < 2) return n;
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
    //[prev, curr] = [curr, prev + curr]; //이렇게도 가능.
  }
  return curr;
}

// 재귀 - fibonacci
function fibonacci2(n) {
  if (n < 2) return n;
  return fibonacci2(n - 1) + fibonacci2(n - 2);
}

//메모이제이션 - fibonacci
// memo는 함수가 호출될 때마다 초기화됨 → 한 번 호출하면 그 안에서 재귀적으로 값 저장됨 (OK)

// 하지만 다른 계산 시작하면 다시 처음부터. fibonacci3(n) 호출할 때마다 memo 초기화됨.
function fibonacci3(n) {
  const memo = {}; //cache 역할.
  function fib(n) {
    if (n < 2) return n;
    if (memo[n]) {
      return memo[n]; //해당 값 저장값 있으면 계산 하지말고 바로 쓰자.
    } else {
      memo[n] = fib(n - 1) + fib(n - 2); //아니면 계산해서 저장하자.
      console.log("hit");
    }
    return memo[n]; //계산결과 반환하며 저장.
  }
  return fib(n); //결과값 외부로 반환.
}

//메모이제이션 - fibonacci memo함수와 분리. memoized()는 한 번 호출되면, 그 안의 cache는 클로저로 영구 저장됨
const fibonacci4 = memoized(function (n) {
  if (n < 2) return n;
  return fibonacci4(n - 1) + fibonacci4(n - 2);
});
function memoized(fn) {
  const cache = {};
  return function (k) {
    return cache[k] || (cache[k] = fn(k));
  };
}
console.log(fibonacci1(5)); // 5
console.log(fibonacci2(6)); // 8
console.log(fibonacci3(7)); // 13
console.log(fibonacci4(8)); // 21
