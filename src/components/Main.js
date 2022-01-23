import React, { memo } from "react";
import Profile from "./Profile";
import Places from "./Places";

const Main = memo(
  ({
    onCardClick,
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onDeleteCard,
    onLikeCard,
    cards,
  }) => {
    return (
      <main className="content">
        <Profile
          onEditAvatar={onEditAvatar}
          onEditProfile={onEditProfile}
          onAddPlace={onAddPlace}
        />
        <Places
          cards={cards}
          onCardClick={onCardClick}
          onDeleteCard={onDeleteCard}
          onLikeCard={onLikeCard}
        />
      </main>
    );
  }
);

export default Main;
