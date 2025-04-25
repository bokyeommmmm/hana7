type S = string;
declare const cname: S;
declare const myName: string;
declare let age: any;
declare let lastName: string | boolean;
type Name = "Hong" | "Kim" | "Lee";
declare let nm: Name;
type SomeType = {
    id: string | Number;
    name: Name;
    age: number;
    address: string;
};
declare const something: ({ id, name, age, address }: SomeType) => void;
declare const user: SomeType;
declare let x: string | undefined;
declare let y: string | number | undefined;
declare let z: string;
type Member = {
    name: string;
    addr: string;
    discountRate: number;
};
type Guest = {
    name: string;
    age: number;
};
type Customer = Member | Guest;
type MemberGuest = Member | Guest;
declare let g: Guest;
declare let m: Member;
declare let cust: Customer;
declare let mg: MemberGuest;
declare let arr: number[];
declare const xarr: number | number[];
