import { useState, version } from "react";
import "./App.css";

// main.jsx에서 app 실행(버튼 클릭)될때마다 다시 실행됨.
// usestate는 브라우저가 붙들고있어서 카운트 기억
// x는 100으로 계속 초기화
// -> 일반적인 변수와 상태는 다르다 .

// useState 원래 모양 . 리액트 내장 함수임 .

// const StatePool = {};
// function useState(initValue) {
//   if (!StatePool._x) {
//     StatePool._x = initValue;
//   }

//   const obj = {
//     get x() {
//       console.log("🚀 getx:", StatePool._x);
//       return StatePool._x;
//     },
//     setX(newValueOrFn) {
//       console.log("🚀 setX:", typeof newValueOrFn);
//       if (typeof newValueOrFn === "function") {
//         StatePool._x = newValueOrFn(StatePool._x);
//         console.log("🚀 setx:", StatePool._x);
//       } else {
//         StatePool._x = newValueOrFn;
//       }

//       // React.rerender();
//       App();
//     },
//   };

//   return [obj.x, obj.setX];
// }
//
//

//컴포넌트는 함수다 .
function MyButton({ onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      My Button
    </button>
  );
  //자바스크립트 실행부는 없는 컴포넌트
}
const hong = { name: "Hong", hobbies: ["Bike", "Tennis"] };

const AboutMe = ({ myinfo }) => {
  const { name, hobbies } = myinfo;
  //Destructuring
  return (
    <>
      <h1>{name}</h1>
      <div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  //위에서 연산  js
  //아래에서 리턴  xml
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      {/* jsx는 중괄호 속에 js쓴다. */}
      <h1 className="text-3xl">Vite + React {version}</h1>
      <MyButton
        onClick={() => setIsloggedIn(!isLoggedIn)}
        className="bg-blue-300 text-white px-6 py-4 rounded hover:bg-blue-500"
      />
      {/* {MyButton()}  이거랑 같다.*/}
      {/* <AboutMe myinfo={hong} /> */}
      {isLoggedIn ? <AboutMe myinfo={hong} /> : <h3>Login form</h3>}
    </div>
  );
}
export default App;
