import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUserAction } from "../../redux/user/user-actions";
import { AUTH } from "../../services/authService";
import CustomButton from "../CustomButton/CustomButton";
import { setUserToLocalStorage } from "../../helpers/setUser"

import "./Auth.scss";

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    setError("");
    setIsLoading(true);
    e.preventDefault();

    try {
      const response = await AUTH.signupService(name, email, password, passwordConfirm);
      if (response) {
        dispatch(setCurrentUserAction(response.data.data.user));
        setUserToLocalStorage(response)
      }
    } catch (err) {
      setError(err?.response?.data?.message);
    }
    setIsLoading(false);
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
      {error && <p>{error}</p>}

      <CustomButton level="primary" type="submit">
        {isLoading ? "Loading..." : "Create Account"}
      </CustomButton>
    </form>
  );
};

export default Signup;