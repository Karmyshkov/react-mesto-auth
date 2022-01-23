class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      headers: {
        authorization: this.headers.authorization,
      },
    }).then((dataCards) => this._checkStatus(dataCards));
  }

  addNewCard({ name, link }) {
    return fetch(`${this.url}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((dataCard) => this._checkStatus(dataCard));
  }

  deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this.headers.authorization,
      },
    }).then((dataCard) => this._checkStatus(dataCard));
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: {
        authorization: this.headers.authorization,
      },
    }).then((dataUser) => this._checkStatus(dataUser));
  }

  changeUserInfo({ name, about }) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((dataUser) => this._checkStatus(dataUser));
  }

  changeUserAvatar(avatar) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(avatar),
    }).then((dataUser) => this._checkStatus(dataUser));
  }

  addLikeCard(cardId, isLiked) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: {
        authorization: this.headers.authorization,
      },
    }).then((dataUser) => this._checkStatus(dataUser));
  }

  deleteLikeCard(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this.headers.authorization,
      },
    }).then((dataCard) => this._checkStatus(dataCard));
  }
}

export const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-30",
  headers: {
    authorization: "8c883974-19a7-405e-97be-4a70edef35b8",
    "Content-Type": "application/json",
  },
});
