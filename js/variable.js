const n =123;       //8바이트 확보
const bi=123n;      //16바이트 확보

const n___bi = n===bi;
console.log('n___bi : ',n___bi);

const n__bi = n==bi;
console.log('n__bi : ',n__bi);

//const nAddbi = n+Number(bi);      //절삭이 될수도. 
const nAddbi = BigInt(n)+bi;        //작은 사이즈가 더 큰 사이즈가 되도록 해야함.
console.log('bAddbi : ',nAddbi,typeof(nAddbi));

const s='abc';
const ss = new String('abc');       //new로 만드는건 인스턴스   {}로 만드는건 객체.

const s__ss = s==ss;
console.log('s__ss : ',s__ss ,typeof s);

const s___ss = s===ss;              // 8, 16바이트 
console.log('s___ss : ',s___ss ,typeof ss);

const sNum = Number(s);
console.log("🚀 ~ sNum:", sNum);    // NaN  -> not a number 무슨 값인지는 모름. value 자체가 존재 x

const ssNumber =Number(ss);
console.log("🚀 ~ ssNumber:", ssNumber)
console.log(sNum==ssNumber);       // value자체를 모르기에 비교 ㅌ
console.log(isNaN(sNum));          

const sss=`${s} - ${n+Number(bi)}`;       // `` (esc 아래 있는거) -> 템플릿 리터럴. 문자열 병합 연산자.
console.log("🚀 ~ sss:", sss);

console.log('---------------------------------------------------');
const sym1=Symbol("foo");
const sym2=Symbol("foo");
const sym1__sym2=sym1==sym2;
console.log("🚀 ~ sym1__sym2:", sym1__sym2);

const seoulHong=Symbol.for("H");     //key를 지정 H로
const busanHong=Symbol.for("H");
const s__p=seoulHong==busanHong;
console.log("🚀 ~ s__p:", s__p);

const undef= undefined;
const nil = null;
const undef__nil = undef==nil;
console.log("🚀 ~ undef__nil:", undef__nil)
const undef___nil = undef===nil;
console.log("🚀 ~ undef___nil:", undef___nil);

console.log('---------------------------------------------------');

const hong = {id:1, name:'Hong'};
let kim = {id:Symbol(),name:'Kim'};
console.log(hong===kim);
kim = hong;                         
console.log(hong===kim);

const o1 = new Object();
const o2= {};                       
console.log('o1===o2 : ',o1===o2);               // false, because o1 is an instance of Object
console.log('o1==o2 : ',o1==o2);                 // true, because o1 and o2 are both objects

let a= 123;
a.toString();                // 123     원래 원시어는 메서드가 없는데 된다... 잠깐 원시어를 객체로 만들어서 메서드를 쓸수 있게 해줌.
let b= new Number(123);               //이렇게 만들어야 Number 메서드가 생김. 이게 객체를 만드는 방법.
b.toString();                // 123
console.log('typeof a : ',typeof a);       // number
console.log('typeof b : ',typeof b);       // object   

const nStr= n.toString();   
const nStr2 = new Number(n).toString();
console.log("console.log(); ~ nStr:", nStr,typeof nStr);       // string
console.log(nStr,nStr2);       

const nStr16=n.toString(16);       
console.log("console.log(); ~ nStr16:", nStr16)

const nStr16d = parseInt(nStr16,16);       // 0x123
console.log("console.log(); ~ nStr16d:", nStr16d);

console.log('---------------------------------------------------');

const d1=Date();                //문자열
const d2=new Date();            //객체
console.log('d1 : ',d1,typeof d1);       // string
console.log('d2 : ',d2,typeof d2);       // object
console.log('d1===d2 : ',d1===d2);       // false
console.log('d1==d2 : ',d1==d2);         // true

console.log("------------------------------------")

a=1;
b=(a.b=5, console.log('xx >>',a.b));        //
console.log(a,b);    

a=1;
console.log('xx >>',a.toString()==='1');        //
console.log(a);