import React, { useContext, memo } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

const Card = memo(
  ({
    name,
    link,
    countLike,
    owner,
    card,
    onCardClick,
    onDeleteCard,
    onLikeCard,
  }) => {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = owner === currentUser._id;
    const cardDeleteButtonClassName = `card__btn card__btn_type_delete ${
      isOwn && "card__btn_state_active"
    }`;
    const isLiked = card.likes.some(
      (element) => element._id === currentUser._id
    );
    const cardLikeButtonClassName = `card__btn card__btn_type_like ${
      isLiked && "card__btn_active"
    }`;

    return (
      <li className="card">
        <img
          onClick={() => onCardClick({ name, link })}
          className="card__img"
          src={link}
          alt={`Фото из ${name}`}
        />
        <div className="card__inner">
          <h2 className="card__title">{name}</h2>
          <div className="card__wrap">
            <button
              onClick={() => onLikeCard(card)}
              className={cardLikeButtonClassName}
              type="button"
              aria-label="Лайкнуть"
            />
            <span className="card__count">{countLike}</span>
          </div>
        </div>
        <button
          onClick={() => onDeleteCard(card)}
          className={cardDeleteButtonClassName}
          type="button"
          aria-label="Удалить"
        />
      </li>
    );
  }
);

export default Card;
