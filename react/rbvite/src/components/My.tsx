import Login from "./Login";
import Profile from "./Profile";
import Item from "./Item";
import { useState, type RefObject } from "react";
import { useSession } from "../contexts/session/useSession";

type Props = {
  logoutButtonRef: RefObject<HTMLButtonElement | null>;
};

export default function My({ logoutButtonRef }: Props) {
  const [isAdding, setAdding] = useState(false);
  const toggleAdding = () => setAdding(!isAdding);
  const { addItem, removeItem, editItem, session } = useSession();
  const { loginUser, cart } = session;
  return (
    <>
      {loginUser ? (
        <Profile loginUser={loginUser} logoutButtonRef={logoutButtonRef} />
      ) : (
        <Login />
      )}

      <div>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <Item
                item={item}
                removeItem={removeItem}
                addItem={addItem}
                editItem={editItem}
              />
            </li>
          ))}
          {isAdding ? (
            <li>
              <Item
                item={{ id: 0, name: "", price: 3000 }}
                removeItem={removeItem}
                addItem={addItem}
                editItem={editItem}
                toggleAdding={toggleAdding}
              />
            </li>
          ) : (
            <button onClick={() => setAdding(true)}>ADD</button>
          )}
        </ul>
      </div>
    </>
  );
}
