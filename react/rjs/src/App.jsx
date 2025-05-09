import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let x = 100;

  const plusCount = () => {
    setCount((count) => count + 1);
    console.log("x1:", x);
    x = x + 1;
    console.log("x2:", x);
  };
  return (
    <>
      {/* jsx는 중괄호 속에 js쓴다. */}
      <h1>Vite React {x}</h1>
      <div className="card">
        <button onClick={plusCount}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
