import {
  useImperativeHandle,
  type ForwardedRef,
  type PropsWithChildren,
  type RefObject,
} from "react";
//{name : '홍길동'}

export type HelloHandler = {
  sayHello: () => void;
};
type props = {
  name: string;
  age: number;
  plusCount: () => void;
  //   children: ReactNode; //propswithchildren이 있으면 쓸일없다.
  helloButtonRef: RefObject<HTMLButtonElement | null>;
  ref: ForwardedRef<HelloHandler>;
};
export default function Hello({
  name,
  age,
  plusCount,
  helloButtonRef,
  children,
  ref,
}: PropsWithChildren<props>) {
  const helloHandler = {
    sayHello() {
      alert(`Hello, mr. ${name}!`);
    },
  };
  //ref.current=helloHandler
  useImperativeHandle(ref, () => helloHandler);
  return (
    <>
      <div>
        Hello {name} <small>({age})</small>
      </div>
      <div>{children}</div>
      <button ref={helloButtonRef} onClick={plusCount}>
        count + 1
      </button>
      {/* onClick : 이벤트리스너 */}
    </>
  );
}
