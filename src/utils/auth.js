import { BASE_URL } from "./constants";

const checkStatus = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const register = ({ password, email }) =>
  fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then((data) => checkStatus(data))
    .then((dataUser) => console.log(dataUser))
    .catch((err) => console.log(err));

export const login = ({ password, email }) =>
  fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then((data) => checkStatus(data))
    .then((dataUser) => console.log(dataUser))
    .catch((err) => console.log(err));
