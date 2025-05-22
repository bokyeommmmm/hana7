// export const dynamic = 'force-dynamic';
import { use } from 'react';

type Props = {
  searchParams: Promise<{ q: string }>;
};

export default function Hello({ searchParams }: Props) {
  const { q } = use(searchParams);
  console.log('q:', q);
  return (
    <>
      <h3 className='font-bold'>
        Hello Page~~ <span>{q}</span>{' '}
        <div className='textsize-samll'>{`${new Date()}`}</div>
      </h3>
    </>
  );
}
