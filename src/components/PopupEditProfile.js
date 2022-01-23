import React, { useState, useEffect, useContext, memo } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext";

const PopupEditProfile = memo(({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);

  const [userInfo, setUserInfo] = useState({
    name: "",
    about: "",
  });

  useEffect(() => {
    setUserInfo({ name: currentUser.name, about: currentUser.about });
  }, [currentUser]);

  const handleChangeUserInfo = (evt) => {
    setUserInfo({ ...userInfo, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser(userInfo);
  };

  return (
    <PopupWithForm
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      title="Редактировать профиль"
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChangeUserInfo}
        className="popup__field"
        type="text"
        name="name"
        placeholder="Имя пользователя"
        value={userInfo.name || ""}
        maxLength={40}
        minLength={2}
      />
      <span id="user-name-error" className="popup__error"></span>
      <input
        onChange={handleChangeUserInfo}
        className="popup__field"
        type="text"
        name="about"
        placeholder="Работа"
        value={userInfo.about || ""}
        maxLength={200}
        minLength={2}
      />
      <span id="user-job-error" className="popup__error"></span>
    </PopupWithForm>
  );
});

export default PopupEditProfile;
