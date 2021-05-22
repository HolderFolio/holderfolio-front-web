import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AUTHACTION } from "../../redux/auth/auth-action";

import { IoGlobe } from "react-icons/io5";
import { selectUserDevise, selectUserGraphTime } from "../../redux/auth/auth-selectors";
import { getMoneySymbol } from "../../helpers/functions/getMoneySymbol";
import CustomButton from "../../components/CustomButton/CustomButton";

import "./HomePage.scss";
import ExchangeBlockPreview from "../../components/ExchangeBlockPreview/ExchangeBlockPreview";
import AssetBlockPreview from "../../components/AssetBlockPreview/AssetBlockPreview";

const HomePage = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const userGraphTime = useSelector(selectUserGraphTime);
  const userDevise = useSelector(selectUserDevise);
  const [graphTimeDisplay, setGraphTimeDisplay] = useState(userGraphTime || "24h");
  const [globalEarn, setGlobalEarn] = useState(985.21);
  const [difference, setDifference] = useState(52.28);
  const handleClick = () => {
    console.log("handleClick");
    dispatch(AUTHACTION.logoutAction());
  };
  if (error) {
    return <p>An error occured: {error || "please try to refresh the page or log in again."}</p>;
  }

  return (
    <div className="HomePage">
      <div className="HomePage__top">
        <IoGlobe />
        <select name="portfolio" id="portfolio">
          <option value="portfolio1">portfolio 1</option>
          <option value="portfolio2">portfolio 2</option>
          <option value="portfolio3">portfolio 3</option>
          <option value="portfolio4">portfolio 4</option>
          <option value="portfolio5">portfolio 5</option>
        </select>
        <p className="HomePage__global-earn">
          {getMoneySymbol(userDevise) || "$"} {globalEarn}
        </p>
        <p className={`HomePage__difference ${difference && difference < 0 ? "loose-text" : "win-text"}`}>
          {getMoneySymbol(userDevise) || "$"} {difference && difference < 0 ? "-" + difference : "+" + difference} ({graphTimeDisplay})
        </p>
        <div className="HomePage__switch-time">
          <CustomButton level="transparent" onClick={() => setGraphTimeDisplay("24h")}>
            24H
          </CustomButton>
          <CustomButton level="transparent" onClick={() => setGraphTimeDisplay("all")}>
            ALL
          </CustomButton>
        </div>
      </div>
      <div className="HomePage__exchanges">
        <ExchangeBlockPreview />
        <ExchangeBlockPreview />
        <ExchangeBlockPreview />
        <ExchangeBlockPreview />
        <ExchangeBlockPreview />
        <ExchangeBlockPreview />
        <ExchangeBlockPreview />
        <ExchangeBlockPreview />
        <ExchangeBlockPreview />
      </div>
      <div className="HomePage__assets">
        <AssetBlockPreview />
        <AssetBlockPreview />
        <AssetBlockPreview />
        <AssetBlockPreview />
      </div>

      {/* <button onClick={() => handleClick()}>Logout</button> */}
    </div>
  );
};

export default HomePage;
