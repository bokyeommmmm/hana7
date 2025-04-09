const DC_RATE = 0.5;
function discount() {
  const dcRate = 0.5;
  return function (price) {
    return price * dcRate;
  };
}

const discount2 = () => (price) => price * DC_RATE;

//curring <- 워낙 많이써서 소개.
const MENU = { chineses: ["짜장", "탕수"], italian: ["p", "s"] };
function restaurant(kind) {
  const menu = MENU[kind];
  return function (menuIndex) {
    return menu[menuIndex]; //menu.['chineses']
  };
}

const lunch = restaurant("chineses");
console.log(lunch(1));

const dinner = restaurant("italian");
console.log(dinner(0), dinner(1));

//출입자 수를 게이트 별로 구하는 함수를 작성하세요.

function getCounter() {
  let currCount = 0;

  return {
    //객체 리턴
    plus() {
      currCount++;
    }, //이 객체들이 함수의 뭔가를 가리켜서 클로저
    minus() {
      currCount--;
    }, //객체니까 , 로 구분
    count() {
      return currCount;
    },
    get count1() {
      return currCount;
    }, //getter
  };
}

const gate1 = getCounter();
const gate2 = getCounter();

gate1.plus();
gate2.plus();
gate2.minus();

console.log("gate1 >>", gate1.count());
console.log("gate2 >>", gate2.count());
console.log("gate1 >>", gate1.count1);
console.log("gate2 >>", gate2.count1); //getter 쓰면 이렇게.

console.log("-------------------");
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
const f3 = factorial(3);
console.log("f3", f3); // 6

const f5 = factorial(5);
console.log("f5", f5); // 120

function facorialTCO(n, acc = 1) {
  //acc에 디폴트 값을 줌. 재귀함수는 accumulator를 사용해야함.
  if (n === 1) return acc;
  return facorialTCO(n - 1, acc * n);
}
const fcto4 = facorialTCO(4);
console.log("fcto4", fcto4); // 24
