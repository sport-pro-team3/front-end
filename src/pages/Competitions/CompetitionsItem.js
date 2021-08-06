import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Tournir from "./Tournir";
import ReglamentPDF from "./ReglamentPDF";

function CompetitionsItem() {
  const [reglament, setReglament] = useState();
  const [setka, setSetka] = useState();
  const { competitions_id } = useParams();
  const handleNav = (e) => {
    setSetka(e.target.id);
    console.log(e.target.id);
  };

  const getReglament = () => {
    axios
      .get(`https://sportpro3.herokuapp.com/api/competitions/Competitions/`)
      .then((data) => {
        console.log(data);
        const info = data.data;
        setReglament(info);
      });
  };

  let filtered = {};

  if (reglament) {
    filtered = reglament.find(
      (item) => item.competitions_id == competitions_id
    );
  }

  useEffect(() => getReglament(), []);

  return (
    <div className="reglament__inner">
      <h1 className="reglament__title">{filtered.title}</h1>
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
      {setka === "reglament" && <ReglamentPDF reglament={reglament} />}
      {setka === "tournir" && <Tournir reglament={reglament} />}
    </div>
  );
}

export default CompetitionsItem;
