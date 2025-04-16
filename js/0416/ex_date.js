// 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.
const d = new Date();
d.setTime(0);
console.log("console.log(); ~ d:", d);

const time1 = d.getTime();
d.setDate(2);
const time2 = d.getTime();
console.log("console.log(); ~ d:", d);
console.log((time2 - time1) / 1000);

// 이 달의 날짜 5개를 무작위로 만들어 역순으로 정렬하시오.
const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());
// for (let i = 0; i < 100; i++) {
//   console.log(rand(1, 30));
// }
const today = new Date();
today.setMonth(today.getMonth() + 1); //4월기준 5월이 나옴
today.setDate(0); //5월 1일의 전날로 변함.
const endOfDay = today.getDate();
console.log("console.log(); ~ today:", today, endOfDay);
const days = [];
do {
  const r = rand(1, endOfDay);
  if (!days.includes(r)) days.push(r); //중복날짜 없음 .
} while (days.length < 5);
// for (let i = 0; i < 5; i++) {
//   days.push(rand(1, endOfDay));
// }
console.log("console.log(); ~ days:", days);
const yyyy = today.getFullYear();
const mm = (today.getMonth() + 1).toString().padStart(2, 0);
rets = days
  .sort((a, b) => (a < b ? 1 : -1))
  .map((day) => `${yyyy}-${mm}-${day.toString().padStart(2, 0)}`);
console.log("console.log(); ~ rets:", rets);
// 내년(2026년) 오늘의 요일을 출력하시오.
const today1 = new Date();
today1.setFullYear(today1.getFullYear() + 1);
console.log("console.log(); ~ today1:", today1);
console.log("nextyear = ", "일월화수목금토"[today1.getDay()]);
// 오늘로 부터 100일 후의 날짜는?
const today2 = new Date();
today2.setDate(today2.getDate() + 100 - 1);
console.log("100일 이후의 날짜:", today2);
