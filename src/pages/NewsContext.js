import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const apiKey = "4105df4f3fba4126976f920a0a8a97ed";
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <NewsContext.Provider value={data}>{props.children}</NewsContext.Provider>
  );
};
