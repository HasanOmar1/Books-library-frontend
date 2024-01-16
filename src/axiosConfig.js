import axios from "axios";

const usersApi = import.meta.env.VITE_USERS_API;

const instance = axios.create({
  baseURL: usersApi,
  headers: {
    "Content-Type": "application/json",
    token: `${localStorage.getItem("token")}`,
  },
});

export const setAuthToken = (token) => {
  if (token) {
    console.log("[axios] confirm new token update  ===>", token);
    instance.defaults.headers.common["token"] = `${token}`;
  } else {
    delete instance.defaults.headers.common["token"];
  }
};

export default instance;
