import React, { useState } from "react";
import "./Competitions.css";
import Tournir from "./Tournir";
import ReglamentPDF from "./ReglamentPDF";

function Reglament({ reglament }) {
  const [setka, setSetka] = useState();

  const handleNav = (e) => {
    setSetka(e.target.id);
    console.log(e.target.id);
  };
  return (
    <>
      <div className="competitions__reglament">
        <h1 className="reglament__title">{reglament.title}</h1>
        <div className="reglament__buttons">
          <span
            id="reglament"
            onClick={handleNav}
            className="reglament__buttons__links"
          >
            Регламент
          </span>
          <span className="reglament__buttons__links">Команда</span>
          <span className="reglament__buttons__links">Участники</span>
          <span
            id="tournir"
            onClick={handleNav}
            className="reglament__buttons__links"
          >
            Сетки
          </span>
          <span className="reglament__buttons__links">Результаты</span>
        </div>
        {setka === "reglament" && <ReglamentPDF />}
        {setka === "tournir" && <Tournir />}
        {}
      </div>
      <iframe
        src={reglament.competitions_regulations_file}
        title="title"
        className="reglament__pdf"
      />
    </>
  );
}

export default Reglament;
