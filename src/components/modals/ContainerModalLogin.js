import React, { useState } from "react";

import { AUTH } from "../../services/authService"


const ContainerModalLogin = ({ closeModal }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    AUTH.forgotPasswordService(email)
  };

  return (
    <div>
      <button onClick={closeModal}>close</button>
      <div>Forget password?</div>
      <form onSubmit={handleSubmit}>
      <input type="email" id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button>send</button>
      </form>
    </div>
  );
};

export default ContainerModalLogin;