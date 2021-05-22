import React, { useState } from "react";

import "./AssetBlockPreview.scss";

import { IoLogoBitbucket, IoCaretUp, IoCaretDown } from "react-icons/io5";
import { getMoneySymbol } from "../../helpers/functions/getMoneySymbol";
import { useSelector } from "react-redux";
import { selectUserDevise } from "../../redux/auth/auth-selectors";

const AssetBlockPreview = () => {
  const [diffPercentage, setDiffPercentage] = useState(-3.21);
  const userDevise = useSelector(selectUserDevise);
  return (
    <div className="AssetBlockPreview">
      <IoLogoBitbucket />
      <p className="AssetBlockPreview__expenses">$43.80</p>
      <p className="AssetBlockPreview__price">{getMoneySymbol(userDevise || "$")}1.56</p>
      <p>XRP</p>

      <p className="AssetBlockPreview__quantity">28</p>

      <p className={`AssetBlockPreview__difference ${diffPercentage && diffPercentage < 0 ? "loose-text" : "win-text"}`}>
        {diffPercentage && diffPercentage < 0 ? (
          <>
            <IoCaretDown />
            {diffPercentage}%
          </>
        ) : (
          <>
            <IoCaretUp />
            {diffPercentage}%
          </>
        )}
      </p>
    </div>
  );
};

export default AssetBlockPreview;
