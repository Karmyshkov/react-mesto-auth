import React, { useState, memo } from "react";
import PopupWithForm from "./PopupWithForm";

const PopupAddCard = memo(({ isOpen, onClose, onAddCard }) => {
  const [newCard, setNewCard] = useState({ name: "", link: "" });

  const handleInputValue = (evt) => {
    setNewCard({ ...newCard, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddCard(newCard);
  };

  return (
    <PopupWithForm
      name="add-card"
      isOpen={isOpen}
      onClose={onClose}
      title="Новое место"
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleInputValue}
        className="popup__field"
        type="text"
        name="name"
        placeholder="Название"
        maxLength={30}
        minLength={2}
      />
      <span id="new-place-error" className="popup__error"></span>
      <input
        onChange={handleInputValue}
        className="popup__field"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
      />
      <span id="new-img-error" className="popup__error"></span>
    </PopupWithForm>
  );
});

export default PopupAddCard;
