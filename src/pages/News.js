import { NewsContextProvider } from "./NewsContext";
import "./Pages.css";
import NewsComponent from "./NewsComponent";

export const News = () => {
  return (
    <>
      <div className="news__main">
        <div className="news__inner">
          <div className="news__title">Новости</div>
          <div className="news__filter">
            <div className="news__subtitle">Выберите вид спорта</div>
            <div className="news__subtitle">Олимпийские виды спорта</div>
          </div>
          <div>
            <NewsContextProvider>
              <NewsComponent />
            </NewsContextProvider>
          </div>
        </div>
      </div>
    </>
  );
};
