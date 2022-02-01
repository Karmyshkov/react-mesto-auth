import React from "react";

const Login = () => {
  return (
    <>
      <h2 className="login__title">Вход</h2>
      <form className="login">
        <input className="login__input" placeholder="Email" />
        <input className="login__input" placeholder="Пароль" />
        <button className="login__btn" type="submit">
          Войти
        </button>
      </form>
    </>
  );
};

export default Login;
