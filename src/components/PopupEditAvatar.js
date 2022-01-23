import React, { createRef, memo } from "react";
import PopupWithForm from "./PopupWithForm.js";

const PopupEditAvatar = memo(({ isOpen, onClose, onUpdateAvatar }) => {
  const refAvatar = createRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateAvatar(refAvatar.current.value);
  };

  return (
    <PopupWithForm
      name="edit-avatar"
      isOpen={isOpen}
      onClose={onClose}
      title="Обновить аватар"
      onSubmit={handleSubmit}
    >
      <input
        ref={refAvatar}
        className="popup__field"
        type="url"
        name="avatar"
        placeholder="Ссылка на картинку"
        required
      />
      <span id="avatar-error" className="popup__error"></span>
    </PopupWithForm>
  );
});

export default PopupEditAvatar;
