import { useRef, useState, type PropsWithChildren } from "react";
import type { Cart, Session } from "../../App";
import { SampleSession, SessionContext } from "./SessionContext";
import type { LoginHandler } from "../../components/Login";

//children -> consumer
export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session>(SampleSession);
  const loginHandlerRef = useRef<LoginHandler>(null);

  const login = (id: number, name: string) => {
    if (!loginHandlerRef.current) return;
    const { getName, validate, str, focusId } = loginHandlerRef.current;
    console.log("login>>>>", getName(), str);
    if (validate()) setSession({ ...session, loginUser: { id, name } });
    else focusId();
  };
  const logout = () => {
    // session.loginUser = null; // non-pure function!
    setSession({ ...session, loginUser: null });
  };

  const removeItem = (id: number) => {
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== id),
    });
  };

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
        removeItem,
        addItem,
        editItem,
        loginHandlerRef,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
