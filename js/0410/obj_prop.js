const sym = new Symbol();
const user = {
  "": 1,
  " ": 1, // 'id': 1, '0y': 2 모두 OK!
  123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
  12345n: 2, // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
  true: 1, // OK  user[true]  user.true
  id: 2,
  [`name`]: "Hong", // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
  [sym]: "Hong", // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
  [`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
  "my-friends": ["Han", "Kim"],
  getInfo: () => `${this.id}-${this.name}`, // OK! But, this is not user!
  getInfo() {
    return `${this.id}-${this.name}`;
  }, // OK! getInfo의 최종 <f.o>
};
console.log("user : ", user, user.true);
const keys = Object.keys(user);
user.xxx = 123;
console.log("console.log(); ~ keys:", keys, Reflect.ownKeys(user));
const values = Object.values(user);
console.log("console.log(); ~ values:", values);

const k = "id";
const { [k]: kk } = user;

const oth = user[123];
console.log("console.log(); ~ oth:", oth, user.id, user["my-friends"], user[k]); //my-friend는 변수로 안봐서 .으로 접근 안됨 -> 괄호 문자열로 해결
//
console.log("---------------------");
const a = {};
const b = { k: 1 };
const c = { k: 2 };

//a.b=77;
a[b] = 77; //이게 맞음. //a['object Object'] = 77;
a[c] = 99; //이게 맞음.//a['object Object'] = 99;
console.log(a[b], a[c], a);

console.log(a[c]); //undefined
console.log(a[{}]); //undefined

delete user.id;

const hasId = user.hasOwnProperty("id");
console.log("console.log(); ~ hasId:", hasId); //true

delete user[sym];

console.log("user:", user); //user: { ' ': 1, 123: 1, 12345n: 2, true: 1, id: 2, 'my-friends': [ 'Han', 'Kim' ] }

class Dog {
  id = 1;
  static x = 2;
}

const dogId = Dog.id;
console.log("console.log(); ~ dogId:", dogId);
const dogX = Dog.x;
console.log("console.log(); ~ dogX:", dogX);
const maxx = new Dog();
console.log("console.log(); ~ maxx:", maxx);
