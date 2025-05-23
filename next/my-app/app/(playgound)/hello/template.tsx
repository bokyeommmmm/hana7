import { PropsWithChildren } from 'react';

export default function HelloTemplate({ children }: PropsWithChildren) {
  return (
    <div className='border border-red-500 m-1 p-1'>
      <h1>Hello Template</h1>
      {children}
    </div>
  );
}
