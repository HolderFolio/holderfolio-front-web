import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { setCurrentUserAction } from "../../redux/auth/auth-action";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

import "./Navigation.scss";
import CustomButton from "../CustomButton/CustomButton";

const Navigation = ({ setNavOpen }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setCurrentUserAction(null));
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
  };

  const handleNavClose = () => {
    setNavOpen(false);
  };

  return (
    <div className="Navigation" onClick={(e) => e.stopPropagation()}>
      <div className="Navigation__header">
        <CustomButton level="transparent" className="Navigation__header--menu round" onClick={handleNavClose}>
          <IoClose />
        </CustomButton>
        <NavLink exact to="/" onClick={handleNavClose}>
          <h3>HOLDERFOLIO</h3>
        </NavLink>
      </div>

      <div className="Navigation__links">
        <NavLink className="Navigation__links--link" exact to="/" onClick={handleNavClose}>
          Home
        </NavLink>
        <NavLink className="Navigation__links--link" exact to="/Settings" onClick={handleNavClose}>
          Personal details
        </NavLink>
        <NavLink className="Navigation__links--link" to="/default_currencies" onClick={handleNavClose}>
          Default currencies
        </NavLink>
      </div>
      <div className="Navigation__links">
        <NavLink className="Navigation__links--link" exact to="/privacy_police" onClick={handleNavClose}>
          Privacy police
        </NavLink>
        <NavLink className="Navigation__links--link" to="/terms_of_user" onClick={handleNavClose}>
          Terms of user
        </NavLink>
      </div>
      <div className="Navigation__links">
        <NavLink className="Navigation__links--link" exact to="/report_a_bug" onClick={handleNavClose}>
          Report a bug
        </NavLink>
        <NavLink className="Navigation__links--link" to="/feedback" onClick={handleNavClose}>
          FeedBack
        </NavLink>
        <NavLink className="Navigation__links--link" to="/help" onClick={handleNavClose}>
          Help
        </NavLink>
      </div>
      <div
        className="Navigation__deconnexion"
        onClick={() => {
          handleNavClose();
          handleLogout();
        }}
      >
        Log out
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Navigation;
