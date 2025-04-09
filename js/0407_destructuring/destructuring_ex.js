const user = { id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul' };

const hong = { id: 1, name: 'Hong' };
const lee = { id: 2, name: 'Lee' };

function f1(obj) {
  // const { id: id, name: name } = obj;
  const { id, name } = obj;
  console.log(id, name);
}
// const {id: id} = user
function f2({ id, name }) {
  console.log(id, name);
}

f1(user);
f2(user);

console.log('-------------------- ex2');
const { passwd, ...userInfo } = user;
console.log(userInfo);

console.log('-------------------- ex3');
const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
console.log(id1, id2, id3);

console.log('-------------------- ex4');
function getUserValueExceptInitial(k) {
  const { [k]: val } = user;
  const [, ...result] = val;
  return result.join('');
}
console.log(getUserValueExceptInitial('name')); // 'ong'
console.log(getUserValueExceptInitial('passwd')); // 'yz'
console.log(getUserValueExceptInitial('addr')); // 'eoul'