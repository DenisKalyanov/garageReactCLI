import React, { createContext, useReducer } from "react";

import reducer from "./reducer";

export interface InitialState {
  visible: boolean;
  vary: any;
}

const initialState: InitialState = {
  visible: false,
  vary: null,
};

export const GlobalContext = createContext<any>(initialState);

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function changeVisibleBurgerMenu(value: boolean): void {
    dispatch({
      type: "CHANGE_VISIBLE",
      payload: value,
    });
  }

  return (
    <GlobalContext.Provider value={{ state, changeVisibleBurgerMenu }}>
      {children}
    </GlobalContext.Provider>
  );
};
