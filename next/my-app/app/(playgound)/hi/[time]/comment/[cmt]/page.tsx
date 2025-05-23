import { use } from 'react';

type Props = {
  params: Promise<{ time: string; cmt: string }>;
};

const CMTS = ['Mrs. Robins', 'Mr. Bean', 'Uncle Bob'];
export const generateStaticParams = () =>
  CMTS.map((cmt) => ({ time: 'morning', cmt }));

export default function Cmt({ params }: Props) {
  const { time, cmt } = use(params);
  const decodedCmt = decodeURI(cmt);
  return (
    <>
      AGood <strong className='capitalize'>{time}</strong>-
      <strong className='text-green-500'>{decodedCmt}</strong>
    </>
  );
}
