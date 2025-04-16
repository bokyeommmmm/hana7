"use strict";
const assert = require("assert");
class Animal {
  static ID = 1;
  constructor(name) {
    this.name = name;
  }
  feed(nutrient) {
    console.log(`feed to ${this.name} :`, nutrient);
  }
}

const petMixin = {
  likePeople() {
    console.log(`${this.name} like…`);
  },
};
class Dog extends Animal {
  #age = 0;
  constructor(name, age) {
    super(name); //부모의 생성자
    this.#age = age;
  }
  setName(newName) {
    this.name = newName;
  }
  getAge() {
    return this.#age;
  }
  get age() {
    //이렇게 하면 메인함수(?) 에서 dog.age로 값 리턴받아 쓸 수 있다.
    return this.#age;
  }

  f() {
    return this.ID;
  }
  static sf() {
    return this.ID;
  }
}

const ani = new Animal();
const aid = ani.ID;

console.log("console.log(); ~ aid:", aid);

const dog = new Dog("Dog", 3);
console.log("console.log(); ~ dog:", dog.f(), Dog.sf());
//dog.name = "Maxx";
dog.setName("Maxx"); //public이긴 하지만 이렇게 쓰자.
dog.setAge;
console.log("console.log(); ~ name:", dog.name, dog.getAge());

dog.feed("VC");
Object.assign(Dog.prototype, petMixin);
dog.likePeople();

const marry = new Dog("Marry");
marry.likePeople();

//---------------------------
function wrapFullName(user) {
  return new Proxy(user, {
    get(target, prop) {
      if (prop === "fullname") {
        return `${target.firstName} ${target.lastName}`;
      } else {
        return target[prop];
      }
    },
    set(target, prop, value) {
      if (prop === "fullname") {
        [target.firstName, target.lastName] = value.split(" ");
        return 1;
      } else {
        return (target[prop] = value);
      }
    },
  });
}

const hongs = {
  id: 1,
  firstName: "kildong",
  lastName: "Hong",
  fullname: "Kildong Hong",
  get fullname() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullname(fname) {
    [this.firstName, this.lastName] = fname.split(" ");
    // const names = fname.split(" ");
    // this.firstName = names[0];
    // this.lastName = names[1];
  },
};
const fullname = hongs.fullname;
console.log("console.log(); ~ fullname:", hongs.id, hongs.fullname);
hongs.fullname = "John Hong";
console.log("console.log(); ~ fullname:", hongs.fullname);

const kims = wrapFullName({ id: 2, firstName: "kildong", lastName: "kim" });

console.log("console.log(); ~ kim:", kims.id, kims.fullname);
kims.id = 5;
kims.fullname = "Jhon kim";
console.log("console.log(); ~ kim:", kims.id, kims.fullname);
//--------------------
console.log("==========================-=================");
const arr = [1, 2, 3, 4, 5];
const hong = { id: 1, name: "Hing" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const users = [hong, lee, kim];

// Object.defineProperty(Array.prototype, "len", {
//   get: function () {ㅇㄴㅁ
//     return this.length;
//   },
// }); // 이거 참고해서 해보자.

Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this[0];
    },
    set(value) {
      this[0] = value;
    },
  },
  lastObject: {
    get() {
      return this.at(-1);
    },
    set(value) {
      this[this.length - 1] = value;
    },
  },
});
Array.prototype.mapBy = function (prop) {
  return this.map((a) => a[prop]);
};

assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
assert.deepStrictEqual(users.mapBy("id"), [1, 3, 2]);
assert.deepStrictEqual(users.mapBy("name"), ["Hing", "Lee", "Kim"]);

Array.prototype.filterBy = function (prop, value, isInclude) {
  const cb = isInclude
    ? (a) => a[prop].includes(value)
    : (a) => a[prop] === value;
  return this.filter(cb);
};

assert.deepStrictEqual(users.filterBy("id", 2), [kim]);
assert.deepStrictEqual(users.filterBy("name", "i", true), [hong, kim]); // key, value일부, isInclude
Array.prototype.rejectBy = function (prop, value, isInclude) {
  const cb = isInclude
    ? (a) => !a[prop].includes(value)
    : (a) => a[prop] !== value;
  return this.filter(cb);
};
assert.deepStrictEqual(users.rejectBy("id", 2), [hong, lee]);
assert.deepStrictEqual(users.rejectBy("name", "i", true), [lee]);

Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value);
};
assert.deepStrictEqual(users.findBy("name", "Kim"), kim);
Array.prototype.sortBy = function (prop) {
  const [key, direction = "asc"] = prop.split(":");
  const sign = direction === "desc" ? -1 : 1;
  return this.sort((a, b) => (a[key] > b[key] ? 1 * sign : -1 * sign));
};
assert.deepStrictEqual(users.sortBy("name:desc"), [lee, kim, hong]);
assert.deepStrictEqual(users.sortBy("name"), [hong, kim, lee]);
assert.deepStrictEqual(users.firstObject, hong);
users.firstObject = kim;
assert.deepStrictEqual(users.firstObject, kim);
users.lastObject = hong;
assert.deepStrictEqual(users.lastObject, hong);
console.log("🚀 users:", users);
