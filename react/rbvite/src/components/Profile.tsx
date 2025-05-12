import type { LoginUser } from "../App";

type Props = {
  loginUser: LoginUser | null;
  logout: () => void;
};
export default function Profile({ loginUser, logout }: Props) {
  return (
    <>
      <h3>LoginUser : {loginUser?.name}</h3>
      <button onClick={logout}>LogOut</button>
    </>
  );
}
