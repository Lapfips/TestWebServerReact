import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import SignIn from "./SignIn";

const NavigationBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
