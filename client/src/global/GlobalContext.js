import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
  SET_ALERT,
  REMOVE_ALERT,
  ON_CSS_CODE_ADDED,
  CONVERT_CLICK,
  ON_JS_CODE_ADDED,
  SAMPLE_CSS,
} from "./types";
import { v4 as uuidv4 } from "uuid";

// Initial state
const initialState = {
  alerts: [],
  cssCode: SAMPLE_CSS,
  jsCode: "",
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function onCssCodeAdded(inputText) {
    dispatch({
      type: ON_CSS_CODE_ADDED,
      payload: inputText,
    });
  }

  function onJsCodeAdded(inputText) {
    dispatch({
      type: ON_JS_CODE_ADDED,
      payload: inputText,
    });
  }

  function onConvertClick() {
    dispatch({
      type: CONVERT_CLICK,
    });
  }

  function setAlert(msg, timeout = 2500) {
    if (msg) {
      const id = uuidv4();
      dispatch({
        type: SET_ALERT,
        payload: { msg, id },
      });

      setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        alerts: state.alerts,
        cssCode: state.cssCode,
        jsCode: state.jsCode,
        setAlert,
        onCssCodeAdded,
        onJsCodeAdded,
        onConvertClick,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
