import { BASE_URL } from "./constants";

export const register = ({ password, email }) =>
  fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((dataUser) => dataUser);

export const login = ({ password, email }) =>
  fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((dataUser) => dataUser);

export const isValidToken = (token) => {
  return fetch(`${BASE_URL}/user/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((dataUser) => dataUser);
};
