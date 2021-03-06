import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [dataForm, setDataForm] = useState({ password: "", email: "" });

  const getData = (evt) => {
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });
  };
  return (
    <>
      <h2 className="login__title">Вход</h2>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          onLogin(dataForm);
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
          Войти
        </button>
      </form>
    </>
  );
};

export default Login;
