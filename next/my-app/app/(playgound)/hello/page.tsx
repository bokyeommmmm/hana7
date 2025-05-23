// export const dynamic = 'force-dynamic';
import { use } from 'react';

type Props = {
  searchParams: Promise<{ q: string }>;
};
export default function Hello({ searchParams }: Props) {
  const { q } = use(searchParams);
  console.log('🚀 q:', q);

  return (
    <>
      <h3 className='font-bold border border-green-500'>
        Hello Page~ <span className='text-red-500'>{q}</span>
      </h3>
      <div className='text-xs'>{`${new Date()}`}</div>
    </>
  );
}
