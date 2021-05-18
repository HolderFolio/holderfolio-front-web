import React from "react";
import defaultAvatar from "../../assets/default_avatar.jpg";

import "./UserAvatar.scss";

const UserAvatar = ({ imgSrc, userId }) => {
  const handleImgError = (e) => {
    e.target.src = defaultAvatar;
  };

  if (userId) {
    return (
      <div className="UserAvatar">
        <img src={imgSrc || defaultAvatar} onError={handleImgError} alt="User Avatar" />
      </div>
    );
  }

  return (
    <div className="UserAvatar">
      <img src={imgSrc || defaultAvatar} onError={handleImgError} alt="User Avatar" />
    </div>
  );
};

export default UserAvatar;
