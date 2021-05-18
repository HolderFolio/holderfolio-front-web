import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkTheme } from "../../helpers/functions/themeSwitcher";
import { toggleThemeColorAction } from "../../redux/system/system-action";
import { selectTheme } from "../../redux/system/system-selectors";
import { IoMoon, IoSunny } from "react-icons/io5";

import "./ThemeToggle.scss";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    dispatch(toggleThemeColorAction(newTheme));
  };

  useEffect(() => {
    toggleDarkTheme(theme);
  }, [theme]);

  return (
    <div className="ThemeToggle" onClick={toggleTheme}>
      {theme === "light" ? (
        <>
          <IoMoon /> Dark Mode
        </>
      ) : (
        <>
          <IoSunny /> Light Mode
        </>
      )}
    </div>
  );
};

export default ThemeToggle;
