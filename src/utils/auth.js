export const register = ({ password, email }) =>
  fetch("https://auth.nomoreparties.co/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => {
    console.log(res);
  });

export const login = ({ password, email }) =>
  fetch("https://auth.nomoreparties.co/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => {
    console.log(res);
  });
