import React, { useState } from "react";

import Login from "./Login";

const SignIn = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [company, setCompany] = useState("");
  const [showLogIn, setShowLogIn] = useState(false);

  const createAccount = () => {
    /* Check if firstname and lastname not already in database && password === passwordCheck && email not in database && company in available companies */
    return;
  };

  return (
    <>
      {showLogIn ? (
        <Login />
      ) : (
        <>
          <input
            id="firstName"
            type="text"
            placeholder="FirstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            id="lastName"
            type="text"
            placeholder="LastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            id="email"
            type="email"
            placeholder="Email address"
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
          <input
            id="password_check"
            type="password"
            placeholder="Write your password again"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
          <input
            id="company"
            type="text"
            placeholder="Company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <button onClick={createAccount}>Create an account</button>
          <button onClick={() => setShowLogIn(true)}>Login</button>
        </>
      )}
    </>
  );
};

export default SignIn;
