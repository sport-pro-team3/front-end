import "./Intro.css";
import { MainPart } from "../main/Main";
import Carousel from "react-bootstrap/Carousel";
import introPhoto from "./intro-photo.png";

export const Intro = () => {
  return (
    <>
      <Slider className="intro__slider"></Slider>
      <div className="intro__title">
        <h2 className="intro__title__left">all in sport kyrgyz republic</h2>
        <h2 className="intro__title__right">
          Развитие цифровых навыков в Кыргызстане. Создание
          информационного-рейтингового портала для всех желающих и для повышения
          Спорта в Кыргызстане. На сайте будут размещены Новости и Рейтинги
          спортсменов каждой области Спорта в КР. Дальнейшее продвижение
          продукта и внедрение во все федерации в Министерстве спорта КР.
        </h2>
      </div>
      <MainPart></MainPart>
    </>
  );
};

function Slider() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={introPhoto} alt="First slide" />
        <Carousel.Caption>
          {" "}
          <h3>Чемпионат Азии по боксу</h3>
          <p>12.05.2021 - 18.05.2021</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={introPhoto} alt="Second slide" />
        <Carousel.Caption>
          {" "}
          <h3>Чемпионат Азии по боксу</h3>
          <p>12.05.2021 - 18.05.2021</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={introPhoto} alt="Third slide" />
        <Carousel.Caption>
          <h3>Чемпионат Азии по боксу</h3>
          <p>12.05.2021 - 18.05.2021</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    /* 
    <Carousel>
      <Carousel.Item>
        <img src={introPhoto} alt="" className="d-block w-100 h-500" />
        <Carousel.Caption>
          <h3>Чемпионат Азии по боксу</h3>
          <p>12.05.2021 - 18.05.2021</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>*/
  );
}
