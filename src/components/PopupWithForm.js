import React, { memo } from "react";

const PopupWithForm = memo(
  ({ name, title, children, isOpen, onClose, onSubmit }) => {
    return (
      <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
        <div className="popup__container">
          <h2 className="popup__title">{title}</h2>
          <form onSubmit={onSubmit} className="popup__form" name={name}>
            {children}
            <button className="popup__btn" type="submit">
              Сохранить
            </button>
            <button
              onClick={onClose}
              className="popup__close"
              type="button"
              aria-label="Закрыть"
            ></button>
          </form>
        </div>
      </div>
    );
  }
);

export default PopupWithForm;
