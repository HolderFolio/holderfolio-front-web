import React, { useState } from "react";

import { AUTH } from "../../services/authService"


const ContainerModalLogin = ({ closeModal }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    console.log('test')
    AUTH.forgotPasswordService(email)
  };

  return (
    <div>
      <button onClick={closeModal}>close</button>
      <div>Forget password?</div>
      <div>
      <input type="email" id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button  onClick={(e) => handleSubmit(e)}>send</button>
      </div>
    </div>
  );
};

export default ContainerModalLogin;