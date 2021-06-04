import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import logo from "./logo.png";

import "./Header.css";
import Form from "../../Form";
import getSportArt from "./../../api/SporArt";

function Header() {
  return (
    <nav className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="logo"></img>
      </Link>
      <Navbar id="navbar"></Navbar>
      <Form getSportArt={getSportArt} />
    </nav>
  );
}

export default Header;
