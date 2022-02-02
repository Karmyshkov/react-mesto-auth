import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Header = ({ onLogout, userEmail }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <a className="header__link" href="/">
        <img
          className="header__logo"
          src={logo}
          alt="Логотип веб-сайта Место"
        />
      </a>
      <div className={`header__inner ${isMenuOpen && "header__inner_open"}`}>
        {location.pathname === "/" && (
          <p className="header__email">{userEmail}</p>
        )}
        <Link to={pathBtn} onClick={onLogout} className="header__logout">
          {textBtn}
        </Link>
      </div>
      <button
        onClick={handleOpenMenu}
        className={`header__btn ${isMenuOpen && "header__btn_open"}`}
      />
    </header>
  );
};

export default Header;
