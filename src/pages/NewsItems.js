import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";

const NewsItems = (props) => {
  const [item, setItem] = useState({});
  const { user } = useParams();

  useEffect(() => {
    axios
      .get(`https://sportpro3.herokuapp.com/api/news?${user}`)
      .then((data) => setItem(data.data));
  }, []);

  return (
    <div className="news__item">
      {user}
      {item.title}
    </div>
  );
};
export default NewsItems;
