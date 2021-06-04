import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Federations } from "../../../pages/Federations";

import "./Navbar.css";

const Navbar = () => {
  const navStyle = {
    textDecoration: "none",
    color: "#fff",
    listStyleType: "none",
    display: "flex",
  };

  return (
    <ul className="nav__links">
      <Link style={navStyle}>
        <Federations />
      </Link>

      <Link to="/rating" style={navStyle}>
        <li className="nav__button">Рейтинг КР</li>
      </Link>
      <Link to="/competitions" style={navStyle}>
        <li className="nav__button">Соревнования</li>
      </Link>
      <Link to="/news" style={navStyle}>
        <li className="nav__button">Новости</li>
      </Link>
      <Link to="/about" style={navStyle}>
        <li className="nav__button">О нас</li>
      </Link>
      <Link to="/contacts" style={navStyle}>
        <li className="nav__button">Контакты</li>
      </Link>
    </ul>
  );
};

export default Navbar;
