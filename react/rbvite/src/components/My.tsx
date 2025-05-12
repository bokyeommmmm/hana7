import type { Session } from "../App";
import Login from "./Login";
import Profile from "./Profile";

type Props = {
  session: Session;
  login: () => void;
  logout: () => void;
};

export default function My({
  session: { loginUser, cart },
  login,
  logout,
}: Props) {
  return (
    <>
      {loginUser ? (
        <Profile loginUser={loginUser} logout={logout} />
      ) : (
        <Login login={login} />
      )}

      <div>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
