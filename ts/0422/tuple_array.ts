type SO = { [k in SizeKey]: number };
type S = { id: SizeKey; price: number }[];

// 사이즈와 가격 정보
const SIZE: S = [
  { id: "XS", price: 8000 },
  { id: "S", price: 10000 },
  { id: "M", price: 12000 },
  { id: "L", price: 14000 },
  { id: "XL", price: 15000 },
];
// ] as const; //이렇게 하는것도 가능하지만 너무 무성의 선언하며 오타날지도

type SizeKey = "XS" | "S" | "M" | "L" | "XL"; //확실하게 잡아주자
// 사이즈별 수량. key가 정확히 SizeID여야 함.
const sizeOption: SO = {
  XS: 1,
  S: 5,
  M: 2,
  L: 2,
  XL: 4,
};

// 총 가격 계산
const totalPrice = SIZE.reduce(
  (currPrice, size) => currPrice + sizeOption[size.id] * size.price,
  0
);

console.log("total price :", totalPrice);

export {};
