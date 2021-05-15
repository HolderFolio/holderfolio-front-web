import React, { useState } from "react";

import { AUTH } from "../../services/authService";

import { IoClose } from "react-icons/io5";
import "./ContainerModalLogin.scss";
import CustomButton from "../CustomButton/CustomButton";

const ContainerModalLogin = ({ closeModal }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    AUTH.forgotPasswordService(email);
  };

  return (
    <div className="ContainerModalLogin">
      <CustomButton onClick={closeModal} level="transparent" className="ContainerModalLogin__close round">
        <IoClose />
      </CustomButton>
      <h2>Forgot your password?</h2>
      <p>Send us your email address, and you'll receive a link to reset your password.</p>
      <div className="ContainerModalLogin__form">
        <input type="email" id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <CustomButton level="primary" onClick={(e) => handleSubmit(e)}>
          send
        </CustomButton>
      </div>
    </div>
  );
};

export default ContainerModalLogin;
