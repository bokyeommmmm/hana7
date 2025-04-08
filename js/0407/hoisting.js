//let zz = <notInitialized>;        //freshness  -> 너무 방금 생성되서 싱싱해서 쓸수조차 없는상태.
var zz;
console.log('11=',zz);
//ReferenceError: zz is not defined

var zz=9;       //이 라인 실행시 암묵적 var

console.log('22=',zz); //OK
console.log(globalThis['zz']);

function add(a,b)
{
    return a+b;
}