import "./Main.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const MainPart = () => {
  useEffect(() => {
    fetchAPI();
  }, []);

  const [items, setItems] = useState([]);

  const fetchAPI = async () => {
    const data = await fetch(
      "https://sportpro3.herokuapp.com/api/sports/Sports/"
    );

    const items = await data.json();

    setItems(items);
  };

  return (
    <>
      <div className="main">
        <div className="main__title">Виды спорта</div>
        <div className="sports__title">Национальные виды спорта</div>
        {items.map((item) => (
          <>
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
          </>
        ))}
        <div className="sports__title">Олимпийские виды спорта</div>
        <div className="sports__title">Неолимпийские виды спорта</div>
        <div className="sports__title">Виды спортов Пара и Сурдо (ЛОВЗ)</div>
      </div>
    </>
  );
};
