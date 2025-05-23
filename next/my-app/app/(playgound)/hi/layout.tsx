import Link from 'next/link';
import { PropsWithChildren } from 'react';

export default function HiLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className='border border-red300 p-2'></div>
      <h1 className='flex gap-3'>
        itercept layout
        <Link href='/hi/night'>go night</Link>
        <Link href='/hi/morning'>go morning</Link>
        <Link href='/hi/afternoon'>go afternoon</Link>
        <Link href='/hi/evening'>go evening</Link>
      </h1>
      <div>{children}</div>
    </>
  );
}
