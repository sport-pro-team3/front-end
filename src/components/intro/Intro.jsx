import "./Intro.css";
import { MainPart } from "./../main/Main";

export const Intro = () => {
  return (
    <>
      <div className="intro__bg"></div>
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

/*function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={introPhoto} alt="" d-block w-100 h-800 />
        <Carousel.Caption>
          <h3>Чемпионат Азии по боксу</h3>
          <p>12.05.2021 - 18.05.2021</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

*/
