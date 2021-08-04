import React from "react";
import NewsArticle from "./NewsArticle";
import { Spinner } from "react-bootstrap";
import "../Pages.css";

function NewsComponent({ news, loading }) {
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="news__articles">
      {news &&
        news.map((news) => <NewsArticle news={news} key={news.news_id} />)}
    </div>
  );
}
/*
{data
  ? data.map((news) => <NewsArticle data={news} key={news.url} />)
  : "Loading"}*/

export default NewsComponent;
