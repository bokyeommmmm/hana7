import { useRef, useState, type FormEvent } from "react";
import { useSession, type Cart } from "../contexts/session/SessionContext";

type Props = {
  item: Cart;
  toggleAdding?: () => void;
};

export default function Item({ item, toggleAdding }: Props) {
  const { removeItem, addItem, editItem } = useSession();
  const [isEditing, setEditing] = useState(!item.id);
  const [hasDirty, setDirty] = useState(false);

  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const submitItem = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const name = itemNameRef.current?.value;
    const price = itemPriceRef.current?.value;
    console.log("🚀 name:", name, price);

    if (!name) {
      alert("상품명을 입력하세요!");
      itemNameRef.current?.focus();
      return;
    }

    if (!price) {
      alert("금액을 입력하세요!");
      itemPriceRef.current?.focus();
      return;
    }

    const { id } = item;
    if (id) {
      editItem({ id, name, price: +price });
    } else {
      addItem(name, +price);
      if (toggleAdding) toggleAdding();
    }

    setEditing(false);
  };

  const resetItem = () => {
    setEditing(false);
    setDirty(false);
    if (toggleAdding) toggleAdding();
  };

  const checkDirty = () => {
    setDirty(
      itemNameRef.current?.value !== item.name ||
        Number(itemPriceRef.current?.value) !== item.price
    );
  };

  return (
    <>
      {isEditing ? (
        <form onSubmit={submitItem} onReset={resetItem}>
          <input
            type="text"
            ref={itemNameRef}
            className="w-sm"
            defaultValue={item.name}
            placeholder="상품명..."
            onChange={checkDirty}
          />
          <input
            type="number"
            ref={itemPriceRef}
            defaultValue={item.price}
            placeholder="금액..."
            className="w-sm"
            onChange={checkDirty}
          />
          <button type="reset" className="p-sm">
            취소
          </button>
          <button type="submit" className="p-sm" disabled={!hasDirty}>
            ✔️ {item.id ? "수정" : "추가"}
          </button>
        </form>
      ) : (
        <div>
          <a href="#" onClick={() => setEditing(!isEditing)}>
            {item.id}. {item.name} ({item.price.toLocaleString()})
          </a>
          <button onClick={() => removeItem(item.id)} className="p-sm">
            x
          </button>
        </div>
      )}
    </>
  );
}
