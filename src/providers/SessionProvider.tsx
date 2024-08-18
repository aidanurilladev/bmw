import React, { FC, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface SessionProviderType {
  children: ReactNode;
}
  export const SessionProvider: FC<SessionProviderType> = ({ children }) => {
  const { pathname } = useLocation();
  const nav = useNavigate();

  const handleNavigate = () => {
    switch (pathname) {
      case "/auth/sign-in":
      case "/auth/sign-up":
        if (status === "fulfilled") {
          nav("/");
        }
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    handleNavigate();
  }, [status, pathname, nav]);
  return children;
};

