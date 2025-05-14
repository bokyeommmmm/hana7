import { useState, type PropsWithChildren } from "react";
import { CounterContext } from "./CounterContext";

//children -> consumer
export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0); //app꺼 그대로
  const plusCount = () => setCount((pre) => pre + 1);

  return (
    <CounterContext.Provider value={{ count, plusCount }}>
      {children}
    </CounterContext.Provider>
  );
};
