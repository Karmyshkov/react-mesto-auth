import React from "react";
import successIcon from "../images/success.svg";
import errorIcon from "../images/error.svg";

const Tooltip = ({ status, isOpen, onClose }) => {
  console.log(status);
  return (
    <div className={`popup popup_type_more ${isOpen && "popup_opened"}`}>
      <div className="tooltip">
        <button
          onClick={() => onClose(false)}
          className="popup__close"
          type="button"
          aria-label="Закрыть"
        ></button>
        <img
          className="tooltip__img"
          src={status === 201 ? successIcon : errorIcon}
          alt={`${status === 201 ? "Успех" : "Ошибка"}`}
        />
        <h2 className="tooltip__title">
          {status === 201
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
      </div>
    </div>
  );
};

export default Tooltip;
