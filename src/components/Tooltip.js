import React from "react";
import successIcon from "../images/success.svg";
import errorIcon from "../images/error.svg";

const Tooltip = ({ status, isOpen, onClose }) => {
  console.log(status);
  return (
    <div className={`popup popup_type_more ${isOpen && "popup_opened"}`}>
      <div className="popup__inner">
        <button
          onClick={() => onClose(false)}
          className="popup__close"
          type="button"
          aria-label="Закрыть"
        ></button>
        <img
          className="popup__img"
          src={status === 201 ? successIcon : errorIcon}
          alt={`${status === 201 ? "Успех" : "Ошибка"}`}
        />
      </div>
    </div>
  );
};

export default Tooltip;
