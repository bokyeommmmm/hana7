console.log('hello JS');    // const , let은 생긴 블록 내에서만 살아있다 !
                            // var는 함수스코프 !
const myName = 'Sico22';        //들여쓰기 없는건 전역 스코프


function printName (nm){
    console.log(1, nm);
    const myName = 'hanaro';    //여기서 함수 내에서 myName 정의해서 전역변수에서 찾지 않음.
    if(true){
        const myName ='True';
        console.log("22", myName);     //if 블록 scope 

    }
    console.log(2, myName);     //들여쓰기 있는건 함수 속 -> printName의 함수스코프  
}
printName(myName);
console.log(3, myName);         //lexical scope..
console.log('----------------',typeof(123));        //typeof 괄호 안써도되