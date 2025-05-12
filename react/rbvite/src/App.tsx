import { useState } from "react";
import "./App.css";
import Hello from "./components/Hello";
import My from "./components/My";

export type LoginUser = { id: number; name: string };
type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

const SampleSession: Session = {
  // loginUser: null,
  loginUser: { id: 1, name: "Hong" }, //로그인 했다고 넘어가자 .
  cart: [
    { id: 100, name: "라면", price: 3000 },
    { id: 101, name: "컵라면", price: 2000 },
    { id: 200, name: "파", price: 5000 },
  ],
};

function App() {
  const [session, setSession] = useState<Session>(SampleSession);
  const [count, setCount] = useState(0);

  const plusCount = () => setCount((count) => count + 1);
  const login = () => {};
  const logout = () => {
    // session.loginUser = null; //비순수함수 .
    setSession({ ...session, loginUser: null });
  };
  return (
    <>
      <h2>count : {count}</h2>
      <My session={session} login={login} logout={logout} />
      <Hello name={"홍길동"} age={33} plusCount={plusCount}>
        반갑습니다.
      </Hello>
      {/* my, hello는 컴포넌트라 새로 만들어줘야함  */}
    </>
  );
}

export default App;
