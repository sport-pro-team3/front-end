import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`https://sportpro3.herokuapp.com/api/news/`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <NewsContext.Provider value={data}>{props.children}</NewsContext.Provider>
  );
};
