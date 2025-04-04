const n = 1;                
const b = true;         
const nb = n + b;               //b가 number로 바뀜 (1)
console.log(nb);

//const nil= null;           
const nil= [];           
const n_nil=n+nil;            
console.log("n_nil:", n_nil)       //문자열이 아닌이상 넘버가 이긴다. null -> 0 , 원소 없는 배열 -> 0

const undef= undefined;
const n_undef = n+undef;
console.log("n_undef:", n_undef) //undefined는 숫자로 바뀌지 않음 : NaN

console.log('-------------------')

let x=5;
console.log(3 - -x);
console.log(10 + -x *2);
console.log(-10 * -x * -2);
console.log((-10 / -x) * -2);
console.log(2 ** (3**2));
console.log(2 * 3 * 2);