import { use } from 'react';

type Props = {
  params: Promise<{ slug: string[] }>;
};
export default function Slug({ params }: Props) {
  const { slug } = use(params);
  return <>{`${slug.join('::')}`}</>;
}
