import type { RefObject } from "react";
import type { LoginUser } from "../App";
import { useSession } from "../contexts/session/useSession";

type Props = {
  loginUser: LoginUser | null;
  logoutButtonRef: RefObject<HTMLButtonElement | null>;
};

export default function Profile({ loginUser, logoutButtonRef }: Props) {
  const { logout } = useSession();

  return (
    <>
      <h3>LoginUser: {loginUser?.name}</h3>
      <button ref={logoutButtonRef} onClick={logout}>
        LogOut
      </button>
    </>
  );
}
