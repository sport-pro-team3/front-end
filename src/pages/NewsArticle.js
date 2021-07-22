import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <img src={data.image} alt="" className="news__image"></img>
      <div className="news__container">
        <div className="news__up">
          <span className="news__published">{data.created_at}</span>
          <span className="news__author">{data.sport.title}</span> <br />
        </div>
        <h1 className="news_title">{data.text}</h1>
        <a href={data.url} className="news__source">
          Подробнее...
        </a>
      </div>
    </div>
  );
}

export default NewsArticle;
