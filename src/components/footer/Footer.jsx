import logo from "../header/logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import facebook from "../../icons/Facebook.svg";
import instagram from "../../icons/Insta.svg";
import email from "../../icons/email.svg";
import map from "../../icons/map.svg";
import phone from "../../icons/phone.svg";

function Footer() {
  const navStyle = {
    textDecoration: "none",
    color: "#fff",
    listStyleType: "none",
  };
  return (
    /*----------- FOOTER ----------- */
    <div className="Footer">
      <div className="Footer__inner">
        <div className="Footer__logo">
          <Link to="/">
            <img src={logo} alt="#"></img>
          </Link>
        </div>
        {/* ---------- О НАС ---------- */}
        <div className="Footer__about footer__title">
          О нас
          <div className="About__links">
            <Link to="/rating" style={navStyle}>
              <li className="nav__button">Рейтинг КР</li>
            </Link>
            <Link to="/competitions" style={navStyle}>
              <li className="nav__button">Соревнования</li>
            </Link>
            <Link to="/news" style={navStyle}>
              <li className="nav__button">Новости</li>
            </Link>
            <Link to="/about" style={navStyle}>
              <li className="nav__button">О нас</li>
            </Link>
          </div>
        </div>
        {/* ---------- КОНТАКТЫ ---------- */}
        <div className="Footer__contacts footer__title">
          Контакты
          <div className="Footer__contacts__inner">
            <div className="Contacts__email footer__nav">
              <img src={email} alt="" className="Contacts__icons"></img>
              AIS.kg@gmail.com
            </div>
            <div className="Contacts__location footer__nav">
              <img src={map} alt="" className="Contacts__icons"></img>
              Г. Бишкек ул. Токтогула 100/1
            </div>
            <div className="Contacts__phone footer__nav">
              <img src={phone} alt="" className="Contacts__icons"></img>
              0707256789
            </div>
          </div>
        </div>
        {/* ---------- SOCIAL MEDIA ---------- */}
        <div className="Footer__social footer__title">
          Социальные сети
          <div className="Social__icons">
            <a
              href="https://www.facebook.com/nurlan.mannapov"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="" className="Icons__location" />
            </a>
            <a
              href="https://www.instagram.com/nur4aa/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="" className="Icons__location" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
