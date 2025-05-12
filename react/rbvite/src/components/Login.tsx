export default function Login({ login }: { login: () => void }) {
  return (
    <>
      <div>
        LoginId : <input type="text" />
      </div>
      <div>
        LoginName : <input type="text" />
      </div>
      <button onClick={login}>Login</button>
    </>
  );
}
