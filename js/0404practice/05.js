const price = [10.34, 'xxx', 5.678, null, 20.9, 1.005, 0, 19, undefined, 0.5];

let total = 0;
let cnt = 0;

for (let i = 0; i < price.length; i++) {
    if (typeof price[i] === 'number' && !isNaN(price[i])) {
        total += price[i];
        cnt++;
    }
}
const avg = (total / cnt).toFixed(2);
console.log('avg : ', avg);