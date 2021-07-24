import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import NewsArticle from "./NewsArticle";
import { Spinner } from "react-bootstrap";

function NewsComponent(props) {
  const data = useContext(NewsContext);

  return (
    <div>
      <div className="all__news">
        {data ? (
          data.map((news) => <NewsArticle key={news.url} data={news} />)
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
/*
{data
  ? data.map((news) => <NewsArticle data={news} key={news.url} />)
  : "Loading"}*/

export default NewsComponent;
