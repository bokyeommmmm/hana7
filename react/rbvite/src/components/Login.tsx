//Login.tsx
import {
  useImperativeHandle,
  useRef,
  type FormEvent,
  type ForwardedRef,
} from "react";
import type { LoginFn } from "../App";

type Props = { login: LoginFn; loginHandlerRef: ForwardedRef<LoginHandler> };

export type LoginHandler = {
  loginCheck: () => void;
};

export default function Login({ login, loginHandlerRef }: Props) {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const loginHandler: LoginHandler = {
    loginCheck() {
      const id = Number(idRef.current?.value);
      const name = nameRef.current?.value;
      if (!id || isNaN(id)) {
        alert("Input the id!");
        idRef.current?.focus();
        return;
      } else if (!name) {
        alert("Input the name!");
        nameRef.current?.focus();
        return;
      }
    },
  };
  useImperativeHandle(loginHandlerRef, () => loginHandler);

  const makeLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const id = Number(idRef.current?.value);
    const name = nameRef.current?.value;
    if (!id || isNaN(id)) {
      alert("Input the id!");
      idRef.current?.focus();
      return;
    } else if (!name) {
      alert("Input the name!");
      nameRef.current?.focus();
      return;
    }

    login(id, name);
  };

  return (
    <form onSubmit={makeLogin}>
      <div>
        LoginID:
        <input ref={idRef} type="number" />
      </div>
      <div>
        LoginName:
        <input type="text" ref={nameRef} />
      </div>
      <button type="reset">Cancel</button>
      <button type="submit">Login</button>
    </form>
  );
}
