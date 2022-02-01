import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../images/logo.svg";
import burger from "../images/burger.svg";
import closeBtn from "../images/plus.svg";

const Header = ({ onLogout, userEmail }) => {
  const location = useLocation();
  const textBtn =
    location.pathname === "/sign-in"
      ? "Регистрация"
      : location.pathname === "/sign-up"
      ? "Войти"
      : "Выйти";
  const pathBtn =
    location.pathname === "/sign-up"
      ? "/sign-in"
      : location.pathname === "/sign-in"
      ? "/sign-up"
      : "/sign-in";
  return (
    <header className="header page__header">
      <a href="/">
        <img
          className="header__logo"
          src={logo}
          alt="Логотип веб-сайта Место"
        />
      </a>
      <button
        className="header__btn"
        src={burger}
        aria-label="Кнопка бургер"
        type="button"
      >
        <img src={burger} alt="Иконка бургера" />
      </button>
      <button
        className="header__btn"
        src={closeBtn}
        aria-label="Кнопка закрытия бургера"
        type="button"
      >
        <img src={closeBtn} alt="Иконка закрытия бургера" />
      </button>
      <div className="header__inner">
        {location.pathname === "/" && (
          <p className="header__email">{userEmail}</p>
        )}
        <Link to={pathBtn} onClick={onLogout} className="header__logout">
          {textBtn}
        </Link>
      </div>
    </header>
  );
};

export default Header;
