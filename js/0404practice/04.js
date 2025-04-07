function addPoints(a, b) {
    const aDecimal = (a.toString().split('.')[1] || '').length;
    const bDecimal = (b.toString().split('.')[1] || '').length;
    const maxDecimal = Math.max(aDecimal, bDecimal);
  
    const result = a + b;
    return Number(result.toFixed(maxDecimal));
  }

  console.log(addPoints(0.143, -10));       // -9.857

  //소수점 자리 길이 구하는 함수를 만들었어도 좋앗을듯 ?
  //문자열로 가지말고 했어도 좋읗듯.

  function plength(n) {             //소수점 길이 반환을 문자열로 해결. -> 문자열을 다루는건 cpu 부하가 크다.
    // 0.1 ==> '0.1'
    if (Number.isInteger(n)) return 0;          //정수면 끝
    return n.toString().length - Math.trunc(n).toString().length - 1;       //소수점의 길이 반환
  }
  function addPoints1(a, b) {           //소수점 아래 길이 구해서 함.
    const alen = plength(a);
    const blen = plength(b);
    console.log('🚀 alen:', a, b, alen, blen);
    const ret = (a + b).toFixed(alen > blen ? alen : blen);
    console.log(a, '+', b, '= ', +ret);
  }
  function addPoints2(a, b) {               //10의 n승으로 정수로 바꿔서 해결.
    // console.log(a, '+', b, '=', a + b);
    const p = 10 ** 10;             
    const ai = a * p;
    const bi = b * p;
    const ret = Math.trunc(ai + bi) / p;            //trunc -> 소수점 아래 버림
    console.log(a, '+', b, '= ', +ret);
  }
  function addPoints3(...args) {                    //가변인자
    const p = 10 ** 10;
    let ret = 0;
    for (const n of args) {
      ret += Math.trunc(n * p);
    }
    ret = ret / p;
    console.log('🚀 ret:', ret);
  }
  
  function subPoints(...args) {
    calc(-1, ...args);
  }
  function addPoints(...args) {
    calc(+1, ...args);
  }
  function calc(signFlag, ...args) {
    p = 10 ** 10;
    let ret = 0;
    for (const [i, n] of Object.entries(args)) {
      console.log(i, n);
      const signNum = i != 0 ? n * signFlag : n;
      ret += Math.trunc(signNum * p);
    }
    ret = ret / p;
    console.log(args.join(` ${signFlag > 0 ? '+' : '-'} `), '=', ret);
  }
  addPoints1(0.22, 0.23);
  // subPoints(0.45, 0.12);
  // addPoints(0.21354, 0.1, 0.2); // 0.51354
  // addPoints(0.14, 0.28, 0.3, 0.5, 0.92); // 0.42
  // addPoints(0.34, 0.226); // 0.566
  // addPoints(10.34, 200.226); // 210.566
  // addPoints(0.143, -10.28); // -10.137
  // addPoints(0.143, -10); // -9.857
  return;