import React, { useState, useEffect, useCallback } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Register from "./Register";
import Login from "./Login";
import PopupAddCard from "./PopupAddCard";
import PopupEditProfile from "./PopupEditProfile";
import PopupEditAvatar from "./PopupEditAvatar";
import ImagePopup from "./ImagePopup";
import InfoTooltip from "./InfoTooltip";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { login, register, isValidToken } from "../utils/auth";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isOpenTooltip, setOpenTooltip] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
  const [status, setStatus] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const history = useHistory();

  const handleCardClick = (obj) => {
    setSelectedCard(obj);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleUpdateUser = (data) => {
    api
      .changeUserInfo(data)
      .then((dataUser) => {
        setCurrentUser(dataUser);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateAvatar = (linkAvatar) => {
    api
      .changeUserAvatar({ avatar: linkAvatar })
      .then((datauser) => {
        setCurrentUser(datauser);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  const handleAddPlaceSubmit = (newCard) => {
    api
      .addNewCard(newCard)
      .then((dataCard) => {
        setCards([dataCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteCard = (card) => {
    api
      .deleteCard(card._id)
      .then(() => setCards(cards.filter((c) => c._id !== card._id)))
      .catch((err) => console.log(err));
  };

  const handleLikeCard = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .addLikeCard(card._id, !isLiked)
      .then((newCard) =>
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        )
      )
      .catch((err) => console.log(err));
  };

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  };

  const handleRegister = (dataUser) => {
    register(dataUser)
      .then(() => {
        history.push("/sign-in");
        setOpenTooltip(true);
        setStatus(201);
      })
      .catch((resDataUser) => {
        setOpenTooltip(true);
        setStatus(resDataUser.status);
      });
  };

  const handleLogin = (dataUser) => {
    login(dataUser)
      .then((resDataUser) => {
        setLoggedIn(true);
        localStorage.setItem("jwt", resDataUser.token);
        history.push("/");
        setUserEmail(dataUser.email);
      })
      .catch((resDataUser) => {
        setOpenTooltip(true);
        setStatus(resDataUser.status);
      });
  };

  const checkToken = useCallback(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      isValidToken(token)
        .then(({ data }) => {
          setUserEmail(data.email);
          setLoggedIn(true);
          history.push("/");
        })
        .catch((err) => console.log(err));
    }
  }, [history]);

  const handleLogout = () => {
    if (localStorage.getItem("jwt")) {
      localStorage.removeItem("jwt");
      history.push("/sign-in");
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  return (
    <div className="body">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header onLogout={handleLogout} userEmail={userEmail} />
          <Switch>
            <ProtectedRoute
              exact
              path="/"
              component={Main}
              loggedIn={loggedIn}
              onCardClick={handleCardClick}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onDeleteCard={handleDeleteCard}
              onLikeCard={handleLikeCard}
              cards={cards}
            />
            <Route path="/sign-in">
              <Login onLogin={handleLogin} />
            </Route>
            <Route path="/sign-up">
              <Register onRegister={handleRegister} />
            </Route>
          </Switch>
          {loggedIn && <Footer />}
        </div>
        <PopupAddCard
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddCard={handleAddPlaceSubmit}
        />
        <PopupEditProfile
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupEditAvatar
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        <InfoTooltip
          status={status}
          isOpen={isOpenTooltip}
          onClose={setOpenTooltip}
        />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
