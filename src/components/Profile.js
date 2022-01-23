import React, { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

const Profile = ({ onEditAvatar, onEditProfile, onAddPlace }) => {
  const userInfo = useContext(CurrentUserContext);
  return (
    <section className="profile page__profile">
      <div className="profile__wrap">
        <div className="profile__inner-edit">
          <img
            className="profile__avatar"
            src={userInfo.avatar}
            alt="Аватар пользователя"
          />
          <button
            onClick={onEditAvatar}
            className="profile__btn-avatar"
            type="button"
          ></button>
        </div>
        <div className="profile__inner">
          <div className="profile__row">
            <h1 className="profile__name">{userInfo.name}</h1>
            <button
              onClick={onEditProfile}
              className="profile__edit"
              type="button"
              aria-label="Изменить"
            ></button>
          </div>
          <p className="profile__description">{userInfo.about}</p>
        </div>
      </div>
      <button
        onClick={onAddPlace}
        className="profile__btn"
        type="button"
        aria-label="Добавить"
      ></button>
    </section>
  );
};

export default Profile;
