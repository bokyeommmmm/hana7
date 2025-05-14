import { createContext, createRef, type RefObject } from "react";
import type { Cart, LoginFn, Session } from "../../App";
import type { LoginHandler } from "../../components/Login";

type SessionContextProps = {
  session: Session;
  login: LoginFn;
  logout: () => void;
  removeItem: (id: number) => void;
  addItem: (name: string, price: number) => void;
  editItem: (item: Cart) => void;
  loginHandlerRef: RefObject<LoginHandler | null>;
};

export const SampleSession: Session = {
  // loginUser: null,
  loginUser: { id: 1, name: "Hong" },
  cart: [
    { id: 100, name: "라면", price: 3000 },
    { id: 101, name: "컵라면", price: 2000 },
    { id: 200, name: "파", price: 5000 },
  ],
};

export const SessionContext = createContext<SessionContextProps>({
  //context 저장소 만듦
  session: SampleSession,
  loginHandlerRef: createRef<LoginHandler>(),
  login: () => {},
  logout: () => {},
  removeItem: () => {},
  addItem: () => {},
  editItem: () => {},
});
