import Login from "./Login";
import Profile from "./Profile";
import Item from "./Item";
import {
  memo,
  useDeferredValue,
  useMemo,
  useReducer,
  useState,
  type RefObject,
} from "react";
import { useSession } from "../contexts/session/SessionContext";
import ColorTitle from "./ColorTitle";
import SlowList from "./SlowList";
import PostListByUser from "./Posts";

type Props = {
  logoutButtonRef: RefObject<HTMLButtonElement | null>;
};

// type Post = { id: number; title: string };
// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts?userId=1';

// const MemoColorTitle = memo(ColorTitle, () => true);
const MemoColorTitle = memo(
  ColorTitle,
  (preProp, newProp) => preProp.color === newProp.color
);

export default function My({ logoutButtonRef }: Props) {
  const {
    session: { loginUser, cart },
  } = useSession();

  // 1)
  // const [isAdding, setAdding] = useState(false);
  // const toggleAdding = () => setAdding(!isAdding);

  // 2)
  // const [isAdding, toggleAdding] = useToggle();

  // 3)
  const [isAdding, toggleAdding] = useReducer((pre) => !pre, false);

  // observer
  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  }, [cart]);

  const [totalExpectPrice, addExpectPrice] = useReducer(
    (prePrice, newPrice) => totalPrice + newPrice + prePrice * 0,
    totalPrice
  );

  // -------- search
  const [searchStr, setSearchStr] = useState("");
  // const [query, setQuery] = useState('');
  const [query] = useState("");
  const deferedQuery = useDeferredValue(searchStr);

  // const search = useCallback(() => setQuery(searchStr), [searchStr]);
  // useDebounce(setQuery, 1000, [searchStr], searchStr);
  // useThrottle(setQuery, 1000, [searchStr], searchStr);

  // const [posts, setPosts] = useState<Post[]>([]);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   // (async function () {
  //   //   const res = await fetch(POSTS_URL);
  //   //   const data = await res.json();
  //   // })();
  //   const controller = new AbortController();
  //   const { signal } = controller;
  //   fetch(POSTS_URL, { signal })
  //     .then(res => res.json())
  //     .then(setPosts)
  //     .catch(err => {
  //       console.log('🚀 err:', err);
  //       if (!signal.aborted) setError(err);
  //     });

  //   return () => controller.abort();
  // }, []);

  const isSlow = false;

  return (
    <>
      {loginUser ? (
        <Profile logoutButtonRef={logoutButtonRef} />
      ) : (
        <Login title={"Login Title"} />
      )}
      <MemoColorTitle color={cart.length % 2 === 1 ? "blue" : "yellow"}>
        Total: {totalPrice.toLocaleString()}
      </MemoColorTitle>
      <h4>Expect: {totalExpectPrice.toLocaleString()}</h4>
      <div>
        <label htmlFor="search-str">
          검색{searchStr}({query}):
          <input
            type="text"
            id="search-str"
            onChange={(evt) => setSearchStr(evt.target.value)}
          />
        </label>
        <h1>
          {deferedQuery} vs {searchStr}
        </h1>
        {isSlow && <SlowList text={deferedQuery} />}
        <ul>
          {cart
            .filter((item) => item.name.includes(query))
            .map((item) => (
              <li key={item.id}>
                <Item item={item} addExpectPrice={addExpectPrice} />
              </li>
            ))}
          {isAdding ? (
            <li>
              <Item
                item={{ id: 0, name: "", price: 3000 }}
                toggleAdding={toggleAdding}
                addExpectPrice={addExpectPrice}
              />
            </li>
          ) : (
            <button onClick={() => toggleAdding()}>ADD</button>
          )}
        </ul>
        <hr />
        {/* <h3>{JSON.stringify(error)}</h3>
        <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>
              {id}. <strong>{title}</strong>
            </li>
          ))}
        </ul> */}
      </div>
      <div>
        <PostListByUser />
      </div>
    </>
  );
}
