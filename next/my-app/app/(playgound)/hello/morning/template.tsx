import { PropsWithChildren } from 'react';

export default function MorningTemplaye({ children }: PropsWithChildren) {
  return (
    <div className='border border-red-500 m-1 p-1'>
      <h1>Morning Template</h1>
      {children}
    </div>
  );
}
