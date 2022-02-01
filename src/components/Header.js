import React from "react";
import logo from "../images/logo.svg";

const Header = ({ onLogout }) => {
  return (
    <header className="header page__header">
      <a href="/">
        <img
          className="header__logo"
          src={logo}
          alt="Логотип веб-сайта Место"
        />
      </a>
      <button onClick={onLogout} className="header__btn" type="button">
        Выйти
      </button>
    </header>
  );
};

export default Header;
