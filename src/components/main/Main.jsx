import "./Main.css";
import axios from "axios";
import { useEffect } from 'react';

export const MainPart = () => {

 c

  useEffect(() => {
    axios
      .get(`https://sportpro3.herokuapp.com/api/news/`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="main">
        <div className="main__title">Виды спорта</div>
        <div className="sports__title">Национальные виды спорта</div>
        <div className="sports__title">Олимпийские виды спорта</div>
        <div className="sports__title">Неолимпийские виды спорта</div>
        <div className="sports__title">Виды спортов Пара и Сурдо (ЛОВЗ)</div>
      </div>
    </>
  );
};
