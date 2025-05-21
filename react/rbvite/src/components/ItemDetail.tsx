import { Navigate, useOutletContext, useParams } from 'react-router-dom';
import { useSession, type Cart } from '../contexts/session/SessionContext';
import { Link } from 'react-router-dom';

export default function ItemDetail() {
  const {
    session: { cart },
  } = useSession();

  const { curItem } = useOutletContext<{ curItem: Cart }>();
  const { id } = useParams();
  console.log('🚀 item:', curItem, id);
  let item = curItem;
  if (!curItem) {
    if (!id) {
      return <Navigate to='/items' />;
    }

    item = cart.find(item => item.id === +id)!;
  }

  return (
    <>
      <h3>
        <small>{item.id}.</small>
        ItemDetail(금액): {item.price.toLocaleString()}원
      </h3>
      <Link to='/items' className='m-1'>
        목록
      </Link>
      <Link to='edit' className='m-1'>
        수정
      </Link>
    </>
  );
}
