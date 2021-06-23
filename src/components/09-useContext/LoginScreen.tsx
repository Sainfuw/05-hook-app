import React, { useContext } from "react";
import { UserContext } from "./UserContext";
// import { useHistory } from "react-router-dom";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  // let history = useHistory();

  const handleLogin = () => {
    setUser({
      id: 12345,
      name: "Emilio Navarro",
      email: "sainfuw@aol.com",
    });
    // history.push("/home");
  };

  return (
    <>
      <h1>LoginScreen</h1>
      <hr />

      <button className="btn btn-outline-primary" onClick={handleLogin}>
        Login
      </button>
    </>
  );
};
