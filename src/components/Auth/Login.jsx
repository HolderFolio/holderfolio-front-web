import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from 'react-modal';

import { setCurrentUserAction } from "../../redux/user/user-actions";
import { AUTH } from "../../services/authService";
import { AUTHACTION } from "../../redux/auth/auth-action"

import CustomButton from "../CustomButton/CustomButton";
import  { setUserToLocalStorage, cleanUser } from "../../helpers/setUser"


import "./Auth.scss";
import ContainerModalLogin from "../modals/ContainerModalLogin";


///////////////////////// POUR MODAL: ajouter le css comme tu veux   /////////////////////////////
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);


  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }


  const handleSubmit = async (e) => {
    setError("");
    setIsLoading(true);
    e.preventDefault();

    try {
      const response = await AUTH.loginService(email, password);
      if (response) {
        dispatch(setCurrentUserAction(response.data.data.user));
        setUserToLocalStorage(response)
      }
    } catch (err) {
      cleanUser()
      setError(err?.response?.data?.message);
    }
    setIsLoading(false);
  };

  const handleClick = async () => {
    dispatch(AUTHACTION.loginGoogleAction())
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className="Login">
        <label htmlFor="email">Email :</label>
        <input type="email" id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password :</label>
        <input type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p>{error}</p>}

        <CustomButton level="primary" type="submit">
          {isLoading ? "Loading..." : "Connexion"}
        </CustomButton>

        <button onClick={handleClick}>
          Google
        </button>
      </form>

      <h2 onClick={openModal}>
        Password Forget
        </h2>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="forget password"
      >
        <ContainerModalLogin closeModal={closeModal} />
      </Modal>
    </div>

  );
};

export default Login;