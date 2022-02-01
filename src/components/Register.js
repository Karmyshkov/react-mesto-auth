import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../utils/auth";

const Register = () => {
  const [dataForm, setDataForm] = useState({ password: "", email: "" });

  const getData = (evt) => {
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });
  };

  const handleRegister = (evt) => {
    evt.preventDefault();
    register(dataForm);
  };
  return (
    <>
      <h2 className="login__title">Регистрация</h2>
      <form onSubmit={handleRegister} className="login">
        <input
          onChange={getData}
          className="login__input"
          placeholder="Email"
          name="email"
        />
        <input
          onChange={getData}
          className="login__input"
          placeholder="Пароль"
          name="password"
        />
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
