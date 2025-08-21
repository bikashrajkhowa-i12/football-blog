import React, { useContext, createContext, useReducer, useEffect } from "react";
import { authReducer, initialAuthState } from "./authReducer";

import callApi, { setAccessToken, setAuthHandler } from "../../api/callApi";
import { useLoader } from "../LoaderContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  const { startLoading, stopLoading } = useLoader();

  useEffect(() => {
    setAuthHandler(async (data) => {
      if (data?.user && data?.accessToken) {
        login(data.user, data.accessToken);
      } else {
        await logout();
      }
    });

    const bootstrap = async () => {
      const hasSession = document.cookie
        .split("; ")
        .some((c) => c.startsWith("session=true"));

      if (!hasSession) return;

      await refresh();
    };

    bootstrap();
  }, []);

  const login = (user, accessToken) => {
    setAccessToken(accessToken);
    dispatch({ type: "SET_AUTH", payload: { user } });
  };

  const logout = async () => {
    startLoading({ type: "global", prompt: "Logging out ..." });
    try {
      await callApi({ method: "POST", url: "/auth/logout" });
    } catch (error) {
      console.log(error?.message);
    } finally {
      setAccessToken(null);
      dispatch({ type: "LOGOUT", payload: {} });
      stopLoading({ type: "global" });
    }
  };

  const refresh = async () => {
    startLoading({ type: "global" });
    try {
      const { data } = await callApi({ method: "POST", url: "/auth/refresh" });
      login(data.user, data.accessToken);
    } catch (err) {
      console.error("Refresh failed", err?.response?.data);
      setAccessToken(null);
      dispatch({ type: "LOGOUT", payload: {} });
    } finally {
      stopLoading({ type: "global" });
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => useContext(AuthContext);
