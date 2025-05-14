import { useRef } from "react";
import "./App.css";
import Hello, { type HelloHandler } from "./components/Hello";
import My from "./components/My";
import { useCounter } from "./contexts/counter/useCounter";
import { SessionProvider } from "./contexts/session/SessionProvider";

export type LoginUser = {
  id: number;
  name: string;
};

export type LoginFn = (id: number, name: string) => void;

export type Cart = {
  id: number;
  name: string;
  price: number;
};

export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

function App() {
  // const [count, setCount] = useState(0);
  const { count } = useCounter();
  // const { count } = useContext(CounterContext);
  // const { count } = use(CounterContext);
  // const x = 9;
  // if (x > 0) {
  //   const { count } = use(CounterContext);
  //   console.log('🚀 count:', count);
  // }

  const helloButtonRef = useRef<HTMLButtonElement>(null);
  const logoutButtonRef = useRef<HTMLButtonElement>(null);
  const helloHandlerRef = useRef<HelloHandler>(null);

  // const loginHandlerRef = useRef<LoginHandler>(null);

  // const plusCount = () => setCount(c => c + 1);

  return (
    <>
      <h2>count: {count}</h2>
      <SessionProvider>
        <My logoutButtonRef={logoutButtonRef} />
      </SessionProvider>
      <Hello
        name={"홍길동"}
        age={33}
        helloButtonRef={helloButtonRef}
        refx={helloHandlerRef}
      >
        반갑습니다!
      </Hello>
      <button onClick={() => helloButtonRef.current?.click()}>
        Click Hello
      </button>
      <button onClick={() => logoutButtonRef.current?.click()}>
        Logout in App
      </button>

      <button onClick={() => console.log(helloHandlerRef.current?.xx)}>
        sayHello
      </button>
    </>
  );
}

export default App;
