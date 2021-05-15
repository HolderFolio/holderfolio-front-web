import React from "react";
import { IoClose } from "react-icons/io5";
import "./ContainerModal.scss";
import CustomButton from "../CustomButton/CustomButton";

const ContainerModalRefresh = ({ closeModal }) => {
  return (
    <div className="ContainerModal">
      <CustomButton onClick={closeModal} level="transparent" className="ContainerModal__close round">
        <IoClose />
      </CustomButton>
      <h2>Password updated</h2>
      <p>Please refresh the page to handle the updates you just made.</p>
      <CustomButton
        level="primary"
        onClick={() => {
          document.location.reload();
        }}
      >
        Refresh
      </CustomButton>
    </div>
  );
};

export default ContainerModalRefresh;
