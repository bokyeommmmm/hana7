"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 사이즈와 가격 정보
const SIZE = [
    { id: "XS", price: 8000 },
    { id: "S", price: 10000 },
    { id: "M", price: 12000 },
    { id: "L", price: 14000 },
    { id: "XL", price: 15000 },
];
// 사이즈별 수량. key가 정확히 SizeID여야 함.
const sizeOption = {
    XS: 1,
    S: 5,
    M: 2,
    L: 2,
    XL: 4,
};
// 총 가격 계산
const totalPrice = SIZE.reduce((currPrice, size) => currPrice + sizeOption[size.id] * size.price, 0);
console.log("total price :", totalPrice);
