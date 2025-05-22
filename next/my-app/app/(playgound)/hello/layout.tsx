'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { PropsWithChildren, useLayoutEffect, useState } from 'react';

export default function HelloLayout({ children }: PropsWithChildren) {
  const [state, setState] = useState('');

  const sparams = useSearchParams();
  // console.log('sparams:', sparams.get('q'));

  useLayoutEffect(() => {
    setState(sparams.get('q') ?? '');
  }, [sparams]);

  const urlParams = new URLSearchParams(sparams.toString());
  const router = useRouter();
  const pathname = usePathname();
  console.log(' pathname:', pathname);
  const setSearchParams = () => {
    urlParams.set('q', `${new Date()}`);
    urlParams.set('r', `rrr`);

    router.push(`/hello?${urlParams.toString()}`);
  };

  return (
    <>
      <h1>This is Hello Layout:{state}</h1>
      <ul className='flex gap-3'>
        <li>
          <Link href='/hello/morning'>morning</Link>
        </li>
        <li>
          <Link href='/hello/afternoon'>afternoon</Link>
        </li>
        <li>
          <Link href='/hello/evening'>evening</Link>
        </li>
      </ul>
      <hr />
      <div>{children}</div>
      <button onClick={setSearchParams}>setSearchParams</button>
    </>
  );
}
