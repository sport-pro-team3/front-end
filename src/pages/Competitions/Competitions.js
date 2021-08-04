import "./Competitions.css";
import Filter from "../News/Filter";
import { useEffect, useState } from "react";
import axios from "axios";
import CompetitionsComponent from "./CompetitionsComponent";

export const Competitions = () => {
  const [competitions, setCompetitions] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const response = await axios
        .get(`https://sportpro3.herokuapp.com/api/competitions/Competitions/`)
        .catch((err) => console.log(err));
      setCompetitions(response.data);
      setLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <>
      <div className="competitions">
        <div className="competitions__inner">
          <h1 className="competitions__title">Соревнования</h1>
          <div className="competitions__filter">
            <div className="competitions__filter__subtitle">
              <p className="filter__text"> Выберите вид спорта</p> <Filter />
            </div>

            <div className="competitions__filter__subtitle">
              <p className="filter__text"> Олимпийские виды спорта</p>{" "}
              <Filter />
            </div>
          </div>
          <div className="competitions__info">
            <CompetitionsComponent
              competitions={competitions}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </>
  );
};
