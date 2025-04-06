import React, { createContext, useReducer } from 'react';

// הגדרת מצבי התמה
const themeInitialState = {
  isDarkMode: false,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

// יצירת הקונטקסט
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, themeInitialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
