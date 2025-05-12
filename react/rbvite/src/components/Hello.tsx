import type { PropsWithChildren } from "react";
//{name : '홍길동'}

type props = {
  name: string;
  age: number;
  plusCount: () => void;
  //   children: ReactNode; //propswithchildren이 있으면 쓸일없다.
};
export default function Hello({
  name,
  age,
  plusCount,
  children,
}: PropsWithChildren<props>) {
  return (
    <>
      <div>
        Hello {name} <small>({age})</small>
      </div>
      <div>{children}</div>
      <button onClick={plusCount}>count + 1</button>
      {/* onClick : 이벤트리스너 */}
    </>
  );
}
