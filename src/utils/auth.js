export const setToken = (token) => {
  localStorage.setItem("auth_token", token);
};

export const getAuthToken = () => {
  const token = localStorage.getItem("auth_token");
  return token;
};

export const removeToken = () => {
  localStorage.removeItem("auth_token");
};

export const tokenLoader = () => {
  return getAuthToken();
};
