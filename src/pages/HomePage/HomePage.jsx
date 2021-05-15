import React from "react";
import { useDispatch } from "react-redux";

import { AUTHACTION } from "../../redux/auth/auth-action";


const HomePage = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log('handleClick')
    dispatch(AUTHACTION.logoutAction())
  }

  return <div className="HomePage">
    Hello homepage
    <button onClick={() => handleClick()}>Logout</button>
    </div>;
};

export default HomePage;
