import React, { useState } from "react";
import SignIn from "./SignIn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignIn, setShowSignIn] = useState(false);

  const login = () => {
    /* Check if user in data base && check if password hashed === password hashed in database -> login */
    return;
  };

  return (
    <>
      {showSignIn ? (
        <SignIn />
      ) : (
        <>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login}>Login</button>
          <button onClick={() => setShowSignIn(true)}>Sign in</button>
          <a href="#">Forget your password?</a>
        </>
      )}
    </>
  );
};

export default Login;
