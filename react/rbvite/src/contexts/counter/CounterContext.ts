import { createContext } from "react";

type CounterContextProps = {
  count: number;
  plusCount: () => void;
};

export const CounterContext = createContext<CounterContextProps>({
  count: 0,
  plusCount: () => {}, //void가 아니라 {빈 소스코드 함수}
});
