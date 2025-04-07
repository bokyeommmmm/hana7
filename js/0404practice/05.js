const price = [10.34, 'xxx', 5.678, null, 20.9, 1.005, 0, 19, undefined, 0.5];

let total = 0;
let cnt = 0;

for (let i = 0; i < price.length; i++) {
    if (typeof price[i] === 'number') {
        total += price[i];
        cnt++;
    }
}

const avg = (total / cnt).toFixed(2);
console.log('avg_ : ', avg);
const avg1 = Math.trunc((total / cnt) * 100) / 100;         //두자리수까지 확보하고 버림
console.log('avg1 : ', avg1);                           
const avg2 = Math.round((total / cnt) * 100) / 100;         //두자리수까지 확보하고 반올림
console.log('avg1 : ', avg2);                          