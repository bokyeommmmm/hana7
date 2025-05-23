import { PropsWithChildren } from 'react';

export default function MorningLayout({ children }: PropsWithChildren) {
  return (
    <div className='border border-green-500 p-1'>
      Morning Layout
      <div>{children}</div>
    </div>
  );
}
