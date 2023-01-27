import React, { createContext, useContext, useReducer } from "react";

const DappContext = createContext({});

const initialState = { shouldRefresh: null };

export const DappContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, payload) => {
    return { ...state, ...payload };
  }, initialState);

  const setShouldRefresh = (payload) => dispatch({ shouldRefresh: payload });

  return (
    <DappContext.Provider value={{ ...state, setShouldRefresh }}>
      {children}
    </DappContext.Provider>
  );
};

export const DappContextConsumer = () => useContext(DappContext);
