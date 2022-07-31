import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { login } from "./login";
const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div>Home</div>
      <h2>{JSON.stringify(user, null, 2)}</h2>
      {user ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </>
  );
};

export default Home;
