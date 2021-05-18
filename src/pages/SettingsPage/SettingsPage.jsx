import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton/CustomButton";
import UserAvatar from "../../components/UserAvatar/UserAvatar";
import { AUTHACTION } from "../../redux/auth/auth-action";
import { selectCurrentUser } from "../../redux/auth/auth-selectors";
import Modal from "react-modal";

import "./SettingsPage.scss";
import { customStyles } from "../../helpers/modal-styles";
import ContainerModalRefresh from "../../components/modals/ContainerModalRefresh";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const [isAvatarLoading, setIsAvatarLoading] = useState(false);
  const [avatarError, setAvatarError] = useState(null);
  const imageInput = useRef();

  const [nameInput, setNameInput] = useState(currentUser?.name);
  const [isNameLoading, setIsNameLoading] = useState(false);
  const [nameError, setNameError] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [password, setPassword] = useState({
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
  });
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);
  const [passwordError, setPasswordError] = useState(null);

  const handleAvatarUpdate = async (e, newAvatar) => {
    setAvatarError(null);
    setIsAvatarLoading(true);
    e.preventDefault();

    try {
      await dispatch(AUTHACTION.updateUserAtion({ avatar: newAvatar }));
    } catch (error) {
      setAvatarError(error?.response?.data?.message || "Plase verify the datas that you send.");
    }
    setIsAvatarLoading(false);
  };

  const handleNameUpdate = async (e) => {
    setNameError(null);
    setIsNameLoading(true);
    e.preventDefault();

    try {
      await dispatch(AUTHACTION.updateUserAtion({ name: nameInput }));
    } catch (error) {
      setNameError(error?.response?.data?.message || "Plase verify the datas that you send.");
    }
    setIsNameLoading(false);
  };

  const handlePasswordUpdate = async (e) => {
    setPasswordError(null);
    setIsPasswordLoading(true);
    e.preventDefault();
    try {
      await dispatch(AUTHACTION.updateMyPasswordAtion(password));
      openModal();
    } catch (error) {
      setPasswordError(error?.response?.data?.message || "Plase verify the datas that you send.");
    }
    setIsPasswordLoading(false);
  };

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="SettingsPage pageWrapWidth">
      <h1>Settings</h1>

      <div className="SettingsPage__user">
        <UserAvatar imgSrc={currentUser?.avatar} />
        <h2>{currentUser?.name}</h2>
      </div>
      <form className="form-group" onSubmit={(e) => handleAvatarUpdate(e, imageInput.current.files[0])}>
        <label htmlFor="avatar">
          <h2>Change Avatar</h2>
        </label>
        <div className="form-group__inline-input">
          <input ref={imageInput} type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" required />
          <CustomButton level="secondary">{isAvatarLoading ? "Loading..." : "Validate"}</CustomButton>
        </div>
        {avatarError && <p className="error-text">Error : {avatarError}</p>}
      </form>

      <form className="form-group" onSubmit={handleNameUpdate}>
        <label htmlFor="username">
          <h2>Change your user name</h2>
        </label>
        <div className="form-group__inline-input">
          <input type="text" id="username" required value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
          <CustomButton level="secondary">{isNameLoading ? "Loading..." : "Validate"}</CustomButton>
        </div>
        {nameError && <p className="error-text">Error : {nameError}</p>}
      </form>

      <form className="form-group" onSubmit={handlePasswordUpdate}>
        <label>
          <h2>Change password</h2>
        </label>
        <div className="form-group">
          <label htmlFor="passwordCurrent">Your current password:</label>
          <input
            type="password"
            id="passwordCurrent"
            required
            value={password.passwordCurrent}
            onChange={(e) =>
              setPassword((prevState) => {
                return { ...prevState, passwordCurrent: e.target.value };
              })
            }
          />
          <label htmlFor="password">Your new password:</label>
          <input
            type="password"
            id="password"
            required
            value={password.password}
            onChange={(e) =>
              setPassword((prevState) => {
                return { ...prevState, password: e.target.value };
              })
            }
          />
          <label htmlFor="passwordConfirm">Confirm new passwod:</label>
          <input
            type="password"
            id="passwordConfirm"
            required
            value={password.passwordConfirm}
            onChange={(e) =>
              setPassword((prevState) => {
                return { ...prevState, passwordConfirm: e.target.value };
              })
            }
          />
          <CustomButton level="secondary">{isPasswordLoading ? "Loading..." : "Validate"}</CustomButton>
        </div>
        {passwordError && <p className="error-text">Error : {passwordError}</p>}
      </form>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="refresh page">
        <ContainerModalRefresh closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default SettingsPage;
