import { BASE_URL } from "./constants";

export const register = ({ password, email }) =>
  fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => {
    console.log(res);
  });

export const login = ({ password, email }) =>
  fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => {
    console.log(res);
  });
