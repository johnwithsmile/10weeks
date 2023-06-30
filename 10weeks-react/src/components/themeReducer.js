import React, { useReducer } from "react";

const initialState = {
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

const ThemeSwitcher = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <div>
      <p>테마 색상: {state.theme}</p>
      <button onClick={handleToggle}>토글 색상</button>
    </div>
  );
};

export default ThemeSwitcher;
