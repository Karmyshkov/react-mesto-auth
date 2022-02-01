import React from "react";
import logo from "../images/logo.svg";
import { useLocation, Link } from "react-router-dom";

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
      <div className="header__inner">
        {location.pathname === "/" && <p>{userEmail}</p>}
        <Link to={pathBtn} onClick={onLogout} className="header__btn">
          {textBtn}
        </Link>
      </div>
    </header>
  );
};

export default Header;
