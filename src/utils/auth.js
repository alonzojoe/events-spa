import { redirect } from "react-router-dom";
export const setToken = (token) => {
  localStorage.setItem("auth_token", token);
};

export const setExpiration = (hour) => {
  localStorage.setItem("token_expiration", hour);
};

export const getTokenDuration = () => {
  const expiration = localStorage.getItem("token_expiration");

  const expirationDate = new Date(expiration);
  const now = new Date();
  const remainingDuration = expirationDate.getTime() - now.getTime();

  return remainingDuration;
};

export const getAuthToken = () => {
  const token = localStorage.getItem("auth_token");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return "tokenExpired";
  }

  return token;
};

export const removeToken = () => {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("token_expiration");
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const tokenChecker = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
};
