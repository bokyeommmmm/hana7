const assert = require("assert");

const hrTeam = { id: 1, dname: "인사팀" };
const devTeam = { id: 2, dname: "개발팀" };
const depts = [hrTeam, devTeam];

const hong = { id: 1, name: "Hong", dept: 1 };
const kim = { id: 2, name: "Kim", dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: "Park", dept: 2 },
  { id: 4, name: "Choi", dept: 2 },
];

// 1. 부서 ID → 부서 객체
const deptMap = new Map(depts.map((d) => [d.id, d]));

// 2. 사원 ID → 사원 객체
const empMap = new Map(emps.map((e) => [e.id, e]));

// ✅ 3. 사원 ID → 부서 객체 (key를 객체가 아닌 `id`로!)
const empDept = new Map(emps.map((e) => [e.id, deptMap.get(e.dept)]));

// ✅ 실행 확인
console.log(empDept.get(kim.id).dname); // "개발팀"

// ✅ Assertion
assert.deepStrictEqual(
  [...empDept.keys()],
  emps.map(({ id }) => id)
);
assert.strictEqual(empDept.get(kim.id)?.dname, devTeam.dname);

// ✅ getEmp 함수 구현
function getEmp(empId) {
  const emp = empMap.get(empId);
  return {
    ...emp,
    dept: deptMap.get(emp.dept),
  };
}
assert.deepStrictEqual(getEmp(1), {
  id: 1,
  name: "Hong",
  dept: { id: 1, dname: "인사팀" },
});

// ✅ 개발팀 직원 이름 목록
const devList = emps.filter((e) => e.dept === devTeam.id).map((e) => e.name);
console.log("✅ 개발팀 직원:", devList); // ["Kim", "Park", "Choi"]
