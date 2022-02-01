import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [dataForm, setDataForm] = useState({ password: "", email: "" });

  const getData = (evt) => {
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });
  };
  return (
    <>
      <h2 className="login__title">Вход</h2>
      <form onSubmit={(evt) => evt.preventDefault()} className="login">
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
        <button
          onClick={() => onLogin(dataForm)}
          className="login__btn"
          type="submit"
        >
          Войти
        </button>
      </form>
    </>
  );
};

export default Login;
