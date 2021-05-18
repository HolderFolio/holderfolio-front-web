import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { AUTHACTION } from "../../redux/auth/auth-action";
import CustomButton from "../CustomButton/CustomButton";

import "./Auth.scss";
import ContainerModalLogin from "../modals/ContainerModalLogin";

import { IoLogoGoogle } from "react-icons/io5";
import { cleanUser } from "../../helpers/setUser";
import { customStyles } from "../../helpers/modal-styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    setError("");
    setIsLoading(true);
    e.preventDefault();

    try {
      await dispatch(AUTHACTION.loginManuelAction(email, password));
    } catch (err) {
      cleanUser()
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
    <div>
      <form onSubmit={handleSubmit} className="Login">
        <label htmlFor="email">Email :</label>
        <input type="email" id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password :</label>
        <input type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <p className="error-text">{error ? error : ""}</p>
        <p className="Login__forgot" onClick={openModal}>
          Forgot Password ?
        </p>
        <CustomButton level="primary" type="submit">
          {isLoading ? "Loading..." : "Connexion"}
        </CustomButton>
        <CustomButton onClick={(e) => handleGoogleClick(e)} level="transparent">
          <IoLogoGoogle />
          {isGoogleLoading ? "Loading..." : "Login with Google"}
        </CustomButton>
      </form>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="forget password">
        <ContainerModalLogin closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Login;
