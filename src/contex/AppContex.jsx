import React, { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "../api/Api";

const AppContext = createContext();

export default function useAppContext() {
  return useContext(AppContext);
}

export function ContextProvider({ children }) {
  const initName = () => {
    try {
      const storedAuthentications = localStorage.getItem("authentications");
      // return storedAuthentications
      //   ? jwt_decode(storedAuthentications).username
      //   : "";
      if (storedAuthentications) {
        const { username } = JSON.parse(storedAuthentications);
        return username || "";
      }
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const [username, setUsername] = useState(initName());
  const [authentications, setAuthentications] = useState(
    localStorage.getItem("authentications") || ""
  );

  const isLogin = !!authentications;

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/login`, {
        email: e.target[0].value,
        password: e.target[1].value,
      });
      if (data?.token) {
        const { token, dataUser } = data;
        setAuthentications(token);
        setUsername(dataUser.username);
        localStorage.setItem(
          "authentications",
          JSON.stringify({ token, username: dataUser.username })
        );
        navigate("/ordercar");
      }
      return data;
    } catch (error) {
      return error;
    }
  };

  const logoutHandler = async () => {
    setAuthentications("");
    setUsername("");
    localStorage.removeItem("authentications");
    navigate("/");
  };

  const valueData = {
    isLogin,
    username,
    loginHandler,
    logoutHandler,
  };

  return (
    <AppContext.Provider value={valueData}>{children}</AppContext.Provider>
  );
}
