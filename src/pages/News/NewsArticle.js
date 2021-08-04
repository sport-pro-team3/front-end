import React from "react";
import { Link } from "react-router-dom";

function NewsArticle({ news }) {
  return (
    <div className="news">
      <img src={news.image} alt="" className="news__image"></img>
      <div className="news__container">
        <div className="news__up">
          <span className="news__published">{news.created_at}</span>
          <span className="news__author">{news.sport.title}</span>
        </div>
        <h1 className="news_title">{news.text}</h1>
        <Link to={`/news/${news.news_id}`}>Подробнее...</Link>
      </div>
    </div>
  );
}

export default NewsArticle;
