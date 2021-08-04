import React from "react";
import MainInfo from "./MainInfo";

function MainComponent({ mainCards }) {
  return (
    <div className="main__infos">
      {mainCards &&
        mainCards.map((mainCards) => (
          <MainInfo mainCards={mainCards} key={mainCards.sports_id} />
        ))}
    </div>
  );
}

export default MainComponent;
