import React from "react";
import successIcon from "../images/success.svg";
import errorIcon from "../images/error.svg";

const Tooltip = ({ status, isOpen, onClose }) => {
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
          src={status === 200 ? successIcon : errorIcon}
          alt={`${status === 200 ? "Успех" : "Ошибка"}`}
        />
      </div>
    </div>
  );
};

export default Tooltip;
