import React, { useState } from "react";

const Login = () => {
  const [dataForm, setDataForm] = useState({ password: "", email: "" });

  const handleLogin = (evt) => {
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });
  };
  return (
    <>
      <h2 className="login__title">Вход</h2>
      <form className="login" onSubmit={(evt) => evt.preventDefault()}>
        <input
          onChange={handleLogin}
          className="login__input"
          placeholder="Email"
          name="email"
        />
        <input
          onChange={handleLogin}
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
