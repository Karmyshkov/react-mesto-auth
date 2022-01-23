import React, { memo } from "react";
import Card from "./Card";

const Places = memo(({ cards, onCardClick, onDeleteCard, onLikeCard }) => {
  const cardsComponents = cards.map((card) => (
    <Card
      key={card._id}
      name={card.name}
      link={card.link}
      countLike={card.likes.length}
      owner={card.owner._id}
      card={card}
      onCardClick={onCardClick}
      onDeleteCard={onDeleteCard}
      onLikeCard={onLikeCard}
    />
  ));

  return (
    <section className="places page__places">
      <ul className="places__cards">{cardsComponents}</ul>
    </section>
  );
});

export default Places;
