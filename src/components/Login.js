import React, { useState } from "react";
import { api } from "../utils/Api";

const Login = () => {
  const [dataForm, setDataForm] = useState({ password: "", email: "" });

  const getData = (evt) => {
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });
  };

  const handleLogin = (evt) => {
    evt.preventDefault();
    api.loginUser(dataForm).then((token) => console.log(token));
  };

  return (
    <>
      <h2 className="login__title">Вход</h2>
      <form className="login" onSubmit={handleLogin}>
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
