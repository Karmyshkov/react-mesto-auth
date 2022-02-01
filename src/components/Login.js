import React, { useState } from "react";
import { login } from "../utils/auth";

const Login = () => {
  const [dataForm, setDataForm] = useState({ password: "", email: "" });

  const getData = (evt) => {
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });
  };

  const handleLogin = (evt) => {
    evt.preventDefault();
    login(dataForm);
  };

  return (
    <>
      <h2 className="login__title">Вход</h2>
      <form onSubmit={handleLogin} className="login">
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
          Войти
        </button>
      </form>
    </>
  );
};

export default Login;
