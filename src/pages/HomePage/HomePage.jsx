import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { AUTHACTION } from "../../redux/auth/auth-action";



const HomePage = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const handleClick = () => {
    console.log('handleClick')
    dispatch(AUTHACTION.logoutAction())
  }
  if (error) {
    return <p>An error occured: {error || "please try to refresh the page or log in again."}</p>;
  }

  return <div className="HomePage">
    Hello homepage
    <button onClick={() => handleClick()}>Logout</button>
  </div>;
};

export default HomePage
