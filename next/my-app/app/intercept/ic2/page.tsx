import Link from 'next/link';

export default function IC2() {
  return (
    <div className='flex gap-3'>
      IC2
      <Link href='/intercept/ic1'>GO ic1</Link>
    </div>
  );
}
