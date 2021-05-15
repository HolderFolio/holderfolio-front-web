import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUserAction } from "../../redux/user/user-actions";
import { AUTH } from "../../services/authService";
import CustomButton from "../CustomButton/CustomButton";
import { setUserToLocalStorage } from "../../helpers/setUser";

import "./Auth.scss";
import { AUTHACTION } from "../../redux/auth/auth-action";
import { IoLogoGoogle } from "react-icons/io5";

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleSubmit = async (e) => {
    setError("");
    setIsLoading(true);
    e.preventDefault();

    try {
      await dispatch(AUTHACTION.signupAction(name, email, password, passwordConfirm));
    } catch (err) {
      setError(err?.response?.data?.message);
    }
    setIsLoading(false);
  };

  const handleGoogleClick = async (e) => {
    setError("");
    setIsGoogleLoading(true);
    e.preventDefault();

    try {
      await dispatch(AUTHACTION.loginGoogleAction());
    } catch (err) {
      setError("An error occured with your Google account. Please try again or use manual login.");
    }
    setIsGoogleLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="Signup">
      <label htmlFor="name">Your name:</label>
      <input type="text" id="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="exemple@exemple.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" placeholder="••••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <label htmlFor="password">Password confirmation:</label>
      <input
        type="password"
        id="passwordConfirm"
        placeholder="••••••••••"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        required
      />
      <p className="error-text">{error ? error : ""}</p>

      <CustomButton level="primary" type="submit">
        {isLoading ? "Loading..." : "Create Account"}
      </CustomButton>
      <CustomButton onClick={(e) => handleGoogleClick(e)} level="transparent">
        <IoLogoGoogle />
        {isGoogleLoading ? "Loading..." : "Login with Google"}
      </CustomButton>
    </form>
  );
};

export default Signup;
