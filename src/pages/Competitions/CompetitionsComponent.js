import React from "react";
import { Spinner } from "react-bootstrap";
import CompetitionsInfo from "./CompetitionsInfo";

function CompetitionsComponent({ loading, competitions }) {
  if (loading) {
    return (
      <div className="competitions__spinner">
        <Spinner animation="border" role="status" id="loader">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="competitions__component">
      {competitions &&
        competitions.map((competitions) => (
          <CompetitionsInfo
            competitions={competitions}
            key={competitions.competitions_id}
          />
        ))}
    </div>
  );
}

export default CompetitionsComponent;
