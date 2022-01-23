import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="header page__header">
      <a href="/">
        <img
          className="header__logo"
          src={logo}
          alt="Логотип веб-сайта Место"
        />
      </a>
    </header>
  );
};

export default Header;
