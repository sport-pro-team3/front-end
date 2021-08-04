import React from "react";
import "./Competitions.css";
import { Link } from "react-router-dom";

function CompetitionsInfo({ competitions }) {
  return (
    <>
      <div className="competitions__cards">
        <Link
          className="competitions__cards__inner"
          to={`/competitions/${competitions.competitions_id}`}
        >
          <div className="competitions__cards__inne">
            <img
              src={competitions.image}
              alt="competitions__image"
              className="competitions__image"
            ></img>
            <div className="competitions__cards__text">
              <p className="competitions__card__title">{competitions.title}</p>
              <p className="competiitons__place">{competitions.place}</p>
              <p className="competitions__date">
                {competitions.start_date}
                <span className="date__dots" />
                {competitions.finish_date}
              </p>
              <div>
                <p className="competitions__status">{competitions.status}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CompetitionsInfo;
