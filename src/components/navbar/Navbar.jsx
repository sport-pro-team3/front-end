import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../icons/arrow.svg";

import "./Navbar.css";

const Navbar = () => {
  const navStyle = {
    color: "#fff",
  };

  return (
    /* ---------- DROPDOWN ---------- */
    <ul className="nav__links">
      {/* CLASS MENU */}
      <li style={navStyle}>
        <a href=" #">Федерации</a>
        <ul className="submenu">
          <li>
            <a href=" #" className="submenu__sportarts">
              Национальные виды спорта <img src={arrow} alt="" />
            </a>
            <ul className="submenu2">
              <li>
                <a href=" #">Курош</a>
              </li>
              <li>
                <a href=" #">Конные скачки</a>
              </li>
              <li>
                <a href=" #">Кок-Бору</a>
              </li>
              <li>
                <a href=" #">Кулатуу</a>
              </li>
              <li>
                <a href=" #">Национальная классическая борьба</a>
              </li>
              <li>
                <a href=" #">Ордо</a>
              </li>
              <li>
                <a href=" #">Салбуурун</a>
              </li>
              <li>
                <a href=" #">Тогуз коргоол</a>
              </li>
              <li>
                <a href=" #">Эр эниш</a>
              </li>
            </ul>
          </li>
          <li>
            <a href=" #">
              Олимпийские виды спорта <img src={arrow} alt="" />
            </a>
            <ul className="submenu2">
              <li>
                <a href=" #">Баскетбол</a>
              </li>
              <li>
                <a href=" #">Биатлон</a>
              </li>
              <li>
                <a href=" #">Бокс</a>
              </li>
              <li>
                <a href=" #">Бадминтон</a>
              </li>
              <li>
                <a href=" #">Велоспорт-шоссе</a>
              </li>
              <li>
                <a href=" #">Волейбол</a>
              </li>
              <li>
                <a href=" #">Горнолыжный спорт</a>
              </li>
              <li>
                <a href=" #">Гребля на байдарках и каноэ</a>
              </li>
              <li>
                <a href=" #">Гандбол</a>
              </li>
              <li>
                <a href=" #">Дзюдо</a>
              </li>
              <li>
                <a href=" #">Керлинг</a>
              </li>
              <li>
                <a href=" #">Конный спорт</a>
              </li>
              <li>
                <a href=" #">Легкая атлетика</a>
              </li>
              <li>
                <a href=" #">Настольный теннис</a>
              </li>
              <li>
                <a href=" #">Парусный спорт</a>
              </li>
              <li>
                <a href=" #">Плавание</a>
              </li>
              <li>
                <a href=" #">Пулевая стрельба</a>
              </li>
              <li>
                <a href=" #">Современное пятиборье</a>
              </li>
              <li>
                <a href=" #">Спортивная борьба</a>
              </li>
              <li>
                <a href=" #">Спортивная гимнастика</a>
              </li>
              <li>
                <a href=" #">Стрельба из лука</a>
              </li>
              <li>
                <a href=" #">Таэквондо ВТФ</a>
              </li>
              <li>
                <a href=" #">Теннис</a>
              </li>
              <li>
                <a href=" #">Триатлон</a>
              </li>
              <li>
                <a href=" #">Тяжелая атлетика</a>
              </li>
              <li>
                <a href=" #">Фехтование</a>
              </li>
              <li>
                <a href=" #">Фигурное катание</a>
              </li>
              <li>
                <a href=" #">Футбол</a>
              </li>
              <li>
                <a href=" #">Хоккей</a>
              </li>
              <li>
                <a href=" #">Художественная гимнастика</a>
              </li>
            </ul>
          </li>
          <li>
            <a href=" #">
              Неолимпийские виды спорта
              <img src={arrow} alt="" />
            </a>
            <ul className="submenu2">
              <li>
                <a href=" #">Айкидо</a>
              </li>
              <li>
                <a href=" #">Альпинизм</a>
              </li>
              <li>
                <a href=" #">Армспорт</a>
              </li>
              <li>
                <a href=" #">Бильярдный спорт</a>
              </li>
              <li>
                <a href=" #">Бодибилдинг</a>
              </li>
              <li>
                <a href=" #">Борьба на поясах</a>
              </li>
              <li>
                <a href=" #">Борьба на поясах “Алыш”</a>
              </li>
              <li>
                <a href=" #">Гиревой спорт</a>
              </li>
              <li>
                <a href=" #">Гольф</a>
              </li>
              <li>
                <a href=" #">Джиу-Джитсу</a>
              </li>
              <li>
                <a href=" #">Дартс</a>
              </li>
              <li>
                <a href=" #">Каратэ</a>
              </li>
              <li>
                <a href=" #">Кикбоксинг</a>
              </li>
              <li>
                <a href=" #">Киокусинкай</a>
              </li>
              <li>
                <a href=" #">Мас-рестлинг</a>
              </li>
              <li>
                <a href=" #">Пауэрлифтинг</a>
              </li>
              <li>
                <a href=" #">Перетягивание каната</a>
              </li>
              <li>
                <a href=" #">Регби</a>
              </li>
              <li>
                <a href=" #">Рукопашный бой</a>
              </li>
              <li>
                <a href=" #">Самбо</a>
              </li>
              <li>
                <a href=" #">Скалолазание</a>
              </li>
              <li>
                <a href=" #">Смешанное боевое единоборство(ММА)</a>
              </li>
              <li>
                <a href=" #">Спортивная акробатика</a>
              </li>
              <li>
                <a href=" #">Сумо</a>
              </li>
              <li>
                <a href=" #">Тайский бокс</a>
              </li>
              <li>
                <a href=" #">Танцевальный спорт</a>
              </li>
              <li>
                <a href=" #">Таэквандо ИТФ</a>
              </li>
              <li>
                <a href=" #">Таэквандо ГТФ</a>
              </li>
              <li>
                <a href=" #">Ушу</a>
              </li>
              <li>
                <a href=" #">Шахматы</a>
              </li>
              <li>
                <a href=" #">Кибер спорт</a>
              </li>
              <li>
                <a href=" #">Кунг-Фу</a>
              </li>
              <li>
                <a href=" #">Чир спорт</a>
              </li>
              <li>
                <a href=" #">Грепплинг</a>
              </li>
              <li>
                <a href=" #">Пенчак Силат</a>
              </li>
              <li>
                <a href=" #">Спортивное ориентирование</a>
              </li>
            </ul>
          </li>
          <li>
            <a href=" #">
              Виды спортов Пара и Сурдо (ЛОВЗ)
              <img src={arrow} alt="" />
            </a>
            <ul className="submenu2">
              <li>
                <a href=" #">Академическая гребля</a>
              </li>
              <li>
                <a href=" #">Бочче</a>
              </li>
              <li>
                <a href=" #">Баскетбол на колесах</a>
              </li>
              <li>
                <a href=" #">Валейбол сидя</a>
              </li>
              <li>
                <a href=" #">Голбол</a>
              </li>
              <li>
                <a href=" #">Конный спорт</a>
              </li>
              <li>
                <a href=" #">Пара Дзюдо</a>
              </li>
              <li>
                <a href=" #">Пара пулевая стрельба</a>
              </li>
              <li>
                <a href=" #">Паранастольный тенис</a>
              </li>
              <li>
                <a href=" #">Паралегкая атлетика</a>
              </li>
              <li>
                <a href=" #">Пара каноэ</a>
              </li>
              <li>
                <a href=" #">Пара пауэрлифтинг</a>
              </li>
              <li>
                <a href=" #">Пара таэквандо</a>
              </li>
              <li>
                <a href=" #">Пара бадмингтон</a>
              </li>
              <li>
                <a href=" #">Пара велоспорт</a>
              </li>
              <li>
                <a href=" #">Пара плавание</a>
              </li>
              <li>
                <a href=" #">Пара триотлон</a>
              </li>
              <li>
                <a href=" #">Регби на колесах</a>
              </li>
              <li>
                <a href=" #">Пара стрельба из лука</a>
              </li>
              <li>
                <a href=" #">Пара танцы</a>
              </li>
              <li>
                <a href=" #">Пара теннис на колясках</a>
              </li>
              <li>
                <a href=" #">Пара фехтование на колясках</a>
              </li>
              <li>
                <a href=" #">Пара футбол 5*5</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      {/* ---------- BUTTONS ---------- */}
      <Link to="/rating">
        <li>Рейтинг КР</li>
      </Link>
      <Link to="/competitions">
        <li>Соревнования</li>
      </Link>
      <Link to="/news">
        <li>Новости</li>
      </Link>
      <Link to="/about">
        <li>О нас</li>
      </Link>
      <Link to="/contacts">
        <li>Контакты</li>
      </Link>
      {/* ---------- SEARCH ---------- */}
      <p>search</p>
    </ul>
  );
};

export default Navbar;
