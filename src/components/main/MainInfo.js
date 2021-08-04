import React from "react";
import { Link } from "react-router-dom";

function MainInfo({ mainCards }) {
  return (
    <Link
      className="main__info"
      key={mainCards.sports_id}
      to={`/SportInfo/${mainCards.sports_id}`}
    >
      <img src={mainCards.image} alt="" className="main__image"></img>
      <span className="main__title">{mainCards.title}</span>
      <h1 className="main_description">{mainCards.description}</h1>
    </Link>
  );
}

export default MainInfo;
