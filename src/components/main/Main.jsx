import "./Main.css";
import NationalSport from "./NationalSport";
import OlympicSport from "./OlympicSport";
import NotOlympicSport from "./NotOlympicSport";
import ParaSport from "./ParaSport";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import MainComponent from "./MainComponent";

export const MainPart = () => {
  const [mainCards, setMainCards] = useState([]);

  useEffect(() => {
    const fetchMain = async () => {
      const response = await axios
        .get("https://sportpro3.herokuapp.com/api/sports/Sports/")
        .catch((err) => console.log(err));
      console.log(response);
      setMainCards(response.data);
    };

    fetchMain();
  }, []);

  console.log(mainCards);

  return (
    <>
      <div className="main">
        <div className="main__container">
          <div className="main__sportarts__title">Виды спорта</div>
          <div className="sports__title">Национальные виды спорта</div>

          <div className="main__cards">
            <MainComponent mainCards={mainCards} />
          </div>
          <div className="sports__title">Олимпийские виды спорта</div>
          <OlympicSport />
          <NationalSport mainCards={mainCards} />
          <div className="sports__title">Неолимпийские виды спорта</div>
          <NotOlympicSport />
          <div className="sports__title">Виды спортов Пара и Сурдо (ЛОВЗ)</div>
          <ParaSport />
        </div>
      </div>
    </>
  );
};
