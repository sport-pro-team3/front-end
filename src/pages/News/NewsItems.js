import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../Pages.css";

const NewsItems = () => {
  const [news, setNews] = useState();
  const { news_id } = useParams();
  useEffect(() => {
    axios
      .get(`https://sportpro3.herokuapp.com/api/news/`)
      .then((data) => setNews(data.data));
  }, []);
  console.log(news);
  let filtered = {};
  if (news) {
    filtered = news.find((item) => item.news_id == news_id);
  }

  const history = useHistory();

  const handleBackCick = () => {
    history.goBack();
  };

  return (
    <div className="news__item">
      <p className="items__title">{filtered.title}</p>
      <p className="items__date">{filtered.created_at}</p>
      <img src={filtered.image} alt="news_image" className="items__image"></img>
      <p className="items__text">{filtered.text}</p>
      <Link to="/news/" onClick={handleBackCick} className="back__link">
        Вернуться назад
      </Link>
    </div>
  );
};
export default NewsItems;
