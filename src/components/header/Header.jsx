import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import logo from "./logo.png";

import "../header/Header.css";

function Header() {
  return (
    /* --------------- HEADER --------------- */
    <nav className="header">
      <Link path="/" exact={true} to="/" className="header__logo">
        <img src={logo} alt="logo"></img>
      </Link>
      {/* ---------- NAVBAR ---------- */}
      <Navbar id="navbar"></Navbar>
    </nav>
  );
}

export default Header;
