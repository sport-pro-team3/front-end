import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import NewsArticle from "./NewsArticle";

function NewsComponent(props) {
  const data = useContext(NewsContext);

  return (
    <div>
      <div className="all__news">
        {data
          ? data.map((news) => <NewsArticle data={news} key={news.url} />)
          : "Loading"}
      </div>
    </div>
  );
}

export default NewsComponent;
