import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <button
      onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        position: 'absolute',
        top: 10,
        right: 10,
      }}
    >
      {state.isDarkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
