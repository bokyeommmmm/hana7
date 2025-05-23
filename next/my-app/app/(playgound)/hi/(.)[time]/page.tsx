import { use } from 'react';

type Props = {
  params: Promise<{ time: string }>;
};

const Times = ['morning', 'afternoon', 'evening', 'night'];
export async function generateStaticParams() {
  return Times.map((time) => ({ time }));
}

export default function HiTime({ params }: Props) {
  const { time } = use(params);
  const timePath = '/hi/' + time;
  return (
    <>
      intercepted
      <a href={timePath}>go REAL ONE</a>
    </>
  );
}
