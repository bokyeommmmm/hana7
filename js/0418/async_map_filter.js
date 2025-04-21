// const afterTime = sec =>
//   new Promise(resolve => setTimeout(resolve, sec * 1000, sec));

// const odds = (await Promise.all([1, 2, 3].map(afterTime))).filter(r => {
//   console.log('🚀 r:', r);
//   return r % 2;
// });
// console.log('odds=', odds);

console.log("------------------------");
const f = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!res.ok) throw new Error("Failt to Fetch!!");
  else console.log("Success!!");
  // <2초 sleep하도록 이 부분을 작성해 보세요!>
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await res.json();
  console.log("🚀 data:", data);

  return data.name;
};

console.log(await f());

// useEffect(() => {

//   (async () => {
//     const data = await fetch(url).then(res => res.json());
//     setState(data);
//   })();

// }, []);
