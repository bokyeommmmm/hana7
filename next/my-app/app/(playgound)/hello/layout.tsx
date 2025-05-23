import HelloSearchParams from '@/app/components/HelloSearchParams';
import Link from 'next/link';
import { PropsWithChildren, Suspense } from 'react';

export default function HelloLayout({ children }: PropsWithChildren) {
  return (
    <div className='border border-green-500 p-1'>
      <ul className='flex gap-3'>
        <li>
          <Link href='/hello/morning'>Morning</Link>
        </li>
        <li>
          <Link href='/hello/afternoon'>Afternoon</Link>
        </li>
        <li>
          <Link href='/hello/evening'>Evening</Link>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<h1>..........</h1>}>
        <HelloSearchParams />
      </Suspense>
      <div>{children}</div>
    </div>
  );
}
