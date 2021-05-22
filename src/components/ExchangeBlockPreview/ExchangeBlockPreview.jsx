import React, { useState } from "react";

import "./ExchangeBlockPreview.scss";
import { IoLogoBitcoin, IoCaretUp, IoCaretDown } from "react-icons/io5";

const ExchangeBlockPreview = () => {
  const exchangeDiffPercentage = useState(0.53);
  return (
    <div className="ExchangeBlockPreview">
      <div className="ExchangeBlockPreview__name">
        <IoLogoBitcoin />
        BitCoin
      </div>
      <div className="ExchangeBlockPreview__values">
        <p className="ExchangeBlockPreview__values--main">133.51 $</p>
        <p className="ExchangeBlockPreview__values--value">0.742 EGLD</p>
      </div>
      <div className="ExchangeBlockPreview__bottom">
        <p>179.93 $</p>
        <p className={`ExchangeBlockPreview__bottom--text ${exchangeDiffPercentage && exchangeDiffPercentage < 0 ? "loose-text" : "win-text"}`}>
          {exchangeDiffPercentage && exchangeDiffPercentage < 0 ? (
            <>
              -${exchangeDiffPercentage}
              <IoCaretDown />
            </>
          ) : (
            <>
              +${exchangeDiffPercentage}
              <IoCaretUp />
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default ExchangeBlockPreview;
