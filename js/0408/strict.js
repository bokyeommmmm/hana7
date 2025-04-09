// 'use strict';
function f(a,a) {
    console.log('outer f : ', a);
}
f=1;            //얘가 함수 f를 덮어씀 f는 변수가 되어버림.
NaN=1;  
Infinity=0;
delete f;
{
    function f(a){
        console.log('block f : ',a);
    }
    f(100);                 //바로 아래 block의 f가 호출됨
}
f(200);         //non strict mode와 strict mode의 차이점


///////strict mode를 사용하면 무엇이 에러를 왜 발생시키는지 알자.