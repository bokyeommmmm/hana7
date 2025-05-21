import { Link, useParams } from "react-router-dom";
import { useSession } from "../contexts/session/SessionContext";

export default function ItemDetail() {
  const { id } = useParams();
  const {
    session: { cart },
  } = useSession();

  const item = cart.find((item) => item.id === Number(id));

  if (!item) return <p>존재하지 않는 상품입니다.</p>;

  return (
    <div>
      <h3>
        [{item.id}] {item.name}
      </h3>
      <p>가격: {item.price.toLocaleString()}원</p>
      <Link to="edit">
        <button>수정</button>
      </Link>
      <Link to="/items">
        <button>목록으로</button>
      </Link>
    </div>
  );
}
