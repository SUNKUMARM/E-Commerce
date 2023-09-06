import React from "react";
import { useReducer, useContext, createContext, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "login": {
      return { ...action.payload };
    }
    case "logout": {
      return null;
    }
    default: {
      return state;
    }
  }
};
const initialState = null;
const userContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(state);
  }, [state]);
  const login = (payload) => dispatch({ type: "login", payload });

  return (
    <userContext.Provider value={{ user: state, login }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;

export const useUserContext = () => useContext(userContext);
