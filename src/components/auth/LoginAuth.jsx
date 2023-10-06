import React from "react";
import { useUserContext } from "../../context/ContextProvider";
import { Navigate } from "react-router-dom";

const LoginAuth = ({ children }) => {
  const { user = null } = useUserContext();

  if (!user) {
    return <Navigate to={"/signUp"} />;
  }
  return <>{children}</>;
};

export default LoginAuth;
