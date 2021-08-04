import { useEffect, useState } from "react";
import axios from "axios";
import "../Pages.css";
import Pagination from "./Pagination";
import NewsComponent from "./NewsComponent";
import Filter from "./Filter";
export const News = () => {
  const [loading, setLoading] = useState();
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(9);
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const response = await axios
        .get(`https://sportpro3.herokuapp.com/api/news/`)
        .catch((err) => console.log(err));
      setNews(response.data);
      setLoading(false);
    };
    fetchNews();
  }, []);

  //current Page

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="news__main">
        <div className="news__inner">
          <div className="news__title">Новости</div>
          <div className="news__filter">
            <div className="news__subtitle">
              Выберите вид спорта
              <Filter />
            </div>

            <div className="news__subtitle">
              Олимпийские виды спорта
              <Filter />
            </div>
          </div>
          <div className="news__articles">
            <NewsComponent news={currentNews} loading={loading} />
          </div>
          <Pagination
            newsPerPage={newsPerPage}
            totalNews={news.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};
