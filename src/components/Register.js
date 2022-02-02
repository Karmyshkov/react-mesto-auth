import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ onRegister }) => {
  const [dataForm, setDataForm] = useState({ password: "", email: "" });

  const getData = (evt) => {
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });
  };
  return (
    <>
      <h2 className="login__title">Регистрация</h2>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          onRegister(dataForm);
        }}
        className="login"
      >
        <input
          value={dataForm.email}
          onChange={getData}
          className="login__input"
          placeholder="Email"
          name="email"
        />
        <input
          value={dataForm.password}
          onChange={getData}
          className="login__input"
          placeholder="Пароль"
          name="password"
          type="password"
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
