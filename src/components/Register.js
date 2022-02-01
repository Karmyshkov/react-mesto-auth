import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <h2 className="login__title">Регистрация</h2>
      <form className="login">
        <input className="login__input" placeholder="Email" />
        <input className="login__input" placeholder="Пароль" />
        <button className="login__btn" type="submit">
          Зарегистрироваться
        </button>
        <Link className="login__link" to="/sign-in">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </>
  );
};

export default Register;
