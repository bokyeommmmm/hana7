"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 잘못된 키 "xxx"는 타입 에러 발생 (존재하지 않는 키 사용)
/// type Err = Change<IDept, "xxx", IUser>; // ❌ Error!!
// DeptCaptain 타입은 captain이 IUser 타입으로 변경됨
const dc = {
    id: 2,
    age: "1년",
    dname: "Sales",
    captain: { id: 1, name: "Hong", age: 33 }, // ✅ 객체로 변경됨
};
// stock 객체 → item의 유효한 키는 X, Y, Z
const stock = { X: 1, Y: 2, Z: 30 };
// item은 반드시 stock에 존재하는 키여야 한다
const itemPrices = [
    { item: "X", price: 1000 },
    { item: "Y", price: 2000 },
    { item: "Z", price: 3000 },
    // { item: "P", price: 4000 }, // ❌ Error: "P"는 stock에 없음
];
// 가격 × 수량으로 총합 계산
const total = itemPrices.reduce((curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price, 0);
// ==========================================
// 제네릭과 조건부 처리로 범용적인 배열 삭제 함수 구현
function deleteArray(arr, startOrKey, // 숫자 인덱스 or 객체 키(string)
endOrValue // 숫자 or 키에 해당하는 값
) {
    // 1️⃣ startOrKey가 숫자일 경우 → 인덱스 기준 삭제
    if (typeof startOrKey === "number") {
        if (typeof endOrValue === "number") {
            // 범위 삭제: start 이상, end 미만 제거
            return arr.filter((_, i) => i < startOrKey || i > endOrValue - 1);
        }
        // 단일 인덱스 이후 제거
        return arr.slice(0, startOrKey);
    }
    // 2️⃣ startOrKey가 문자열일 경우 → 객체 배열에서 속성 기준 필터링
    if (typeof startOrKey === "string") {
        return arr.filter((e) => {
            if (e && typeof e === "object") {
                // 해당 속성 값이 endOrValue와 다르면 유지
                return e[startOrKey] !== endOrValue;
            }
        });
    }
    // 3️⃣ symbol 처리 (생략되어 있음)
    return [];
}
// ================= 테스트 ====================
const arr = [1, 2, 3, 4];
console.log(deleteArray(arr, 2)); // 👉 [1, 2]
console.log(deleteArray(arr, 1, 3)); // 👉 [1, 4]
console.log(arr); // 👉 [1, 2, 3, 4] (원본 유지)
const users = [
    { id: 1, name: "Hong" },
    { id: 2, name: "Kim" },
    { id: 3, name: "Lee" },
];
console.log(deleteArray(users, 2)); // 👉 [{id:1, name: "Hong"}, {id:2, name: "Kim"}]
console.log(deleteArray(users, 1, 2)); // 👉 [{id:1, name: "Hong"}, {id:3, name: "Lee"}]
console.log(deleteArray(users, "id", 2)); // 👉 id가 2인 요소 제거 → [{id:1}, {id:3}]
console.log(deleteArray(users, "name", "Lee")); // 👉 name이 "Lee"인 요소 제거
// 결론: 제네릭 + 조건부 타입 + keyof + 인덱싱을 활용해
// 유연하고 타입 안정성 있는 유틸 함수 구성 가능
