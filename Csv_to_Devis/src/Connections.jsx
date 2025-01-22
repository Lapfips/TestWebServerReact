import React from "react";
import "./Connections.css";
import Login from "./Login";
import SignIn from "./SignIn";

const Connections = (props) => {
  return (
    <div className="container-connections">
      {props.showSignIn ? <SignIn /> : <Login />}
    </div>
  );
};

export default Connections;
