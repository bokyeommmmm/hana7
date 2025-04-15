"use strict";
class Animal {
  static ID = 1;
  constructor(name) {
    this.name = name;
  }
}
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

const hong = {
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
const fullname = hong.fullname;
console.log("console.log(); ~ fullname:", hong.id, hong.fullname);
hong.fullname = "John Hong";
console.log("console.log(); ~ fullname:", hong.fullname);

const kim = wrapFullName({ id: 2, firstName: "kildong", lastName: "kim" });

console.log("console.log(); ~ kim:", kim.id, kim.fullname);
kim.id = 5;
kim.fullname = "Jhon kim";
console.log("console.log(); ~ kim:", kim.id, kim.fullname);
