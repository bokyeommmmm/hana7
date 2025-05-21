import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { useSession, type Cart } from '../contexts/session/SessionContext';
import { useEffect, useRef, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

export default function ItemEdit() {
  const { removeItem, editItem } = useSession();

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const { curItem } = useOutletContext<{ curItem: Cart }>();
  console.log('🚀 curItem:', curItem);

  useEffect(() => {
    if (!nameRef.current || !priceRef.current) return;
    nameRef.current.value = curItem.name;
    priceRef.current.value = curItem.price.toString();
    nameRef.current.select();
    nameRef.current.focus();
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();

  const saveItem = (evt: FormEvent) => {
    evt.preventDefault();
    console.log('ssssssssssssssssss');
    const name = nameRef.current?.value || '';
    const price = priceRef.current?.value;
    let msg = '';
    let ref = nameRef;
    if (!name) {
      msg = '상품명을 입력하세요!';
      ref = nameRef;
    } else if (!price) {
      msg = '금액을 입력하세요!';
      ref = priceRef;
    }

    if (msg) {
      alert(msg);
      ref.current?.focus();
      return;
    }

    // eslint-disable-next-line react-hooks/react-compiler
    curItem.name = name;
    curItem.price = Number(price);
    editItem({ ...curItem });
    navigate(`/items/${id}`);
  };

  const deleteItem = () => {
    removeItem(Number(id));
    navigate('/items');
  };

  return (
    <>
      <form onSubmit={saveItem} onReset={deleteItem}>
        <input type='text' ref={nameRef} placeholder='상품명...' />
        <input type='number' ref={priceRef} placeholder='금액...' />

        <Link to={`/items/${id}`} className='m-1'>
          취소
        </Link>
        <button type='reset'>삭제</button>
        <button type='submit'>수정</button>
      </form>
    </>
  );
}
