import React, { useEffect, useState } from "react";
import "../style/Front.css";
import { Weather } from "./weather";
export function FrontPage() {
  const [inputValue, setInputValue] = useState("");
  const [isSubmit, setIsSubmit] = useState("delhi");

  const clickHandler = () => {
    setIsSubmit(inputValue);
    setInputValue("");
  };

  return (
    <div className="mainPage">
      <div className="left">
        <nav className="leftNav">
          <div className="logo"> forecast</div>
          <div className="currLoc">
            <div>
              <i className="fa fa-location-arrow"></i> current location
            </div>
            <div>Delhi,India</div>
          </div>
        </nav>
        <div className="imgCenter">
          <div className="heading">The Only Weather Forecast You Need</div>
          <div className="inputdiv">
            <input
              type="text"
              placeholder="Enter location"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <i
              className="fa fa-search"
              onClick={() => {
                clickHandler();
              }}
            ></i>
          </div>
        </div>
      </div>
      <div className="right">
        {/*  <nav className="rightNav">
          <a href="">Weather</a>
          <a href="">Alerts</a>
          <a href="">News</a>
          <a href="">About</a>
        </nav> */}
        {isSubmit && <Weather mystate={isSubmit} />}
      </div>
    </div>
  );
}
