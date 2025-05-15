/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef, useState, type PropsWithChildren } from "react";
import { SessionContext, type Cart, type Session } from "./SessionContext";
import type { LoginHandler } from "../../components/Login";

const SampleSession: Session = {
  // loginUser: null,
  loginUser: { id: 1, name: "Hong" },
  cart: [
    { id: 100, name: "라면", price: 3000 },
    { id: 101, name: "컵라면", price: 2000 },
    { id: 200, name: "파", price: 5000 },
  ],
};

export default function SessionProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session>(SampleSession);

  const loginHandler = useRef<LoginHandler>(null);

  // const plusCount = () => setCount(c => c + 1);
  const login = useCallback((id: number, name: string) => {
    if (!loginHandler.current) return;
    const { getName, validate, str } = loginHandler.current;
    console.log("login>>>>", getName(), str);
    if (validate()) setSession({ ...session, loginUser: { id, name } });
  }, []);

  const logout = () => {
    // session.loginUser = null; // non-pure function!
    setSession({ ...session, loginUser: null });
  };

  const removeItem = useCallback((id: number) => {
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== id),
    });
  }, []);

  const addItem = (name: string, price: number) => {
    const id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
    console.log("🚀 name:", id, name, price);
    setSession({ ...session, cart: [...session.cart, { id, name, price }] });
  };

  const editItem = (workingItem: Cart) => {
    setSession({
      ...session,
      cart: session.cart.map((item) =>
        item.id === workingItem.id ? workingItem : item
      ),
    });
  };

  return (
    <SessionContext.Provider
      value={{
        session,
        login,
        logout,
        addItem,
        removeItem,
        editItem,
        loginHandler,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}
