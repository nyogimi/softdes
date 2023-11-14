import React from "react";
import "./Summary.css";

export const Summary = () => {
  return (
    <div className="summary-page">
      <div className="div">
      <div className="dark-theme">
            <img
              className="element"
              alt="Element"
              src="/logo.png"
            />
        <div className="overlap-group">
          <p className="home-summary">
            <span className="span">HOME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="text-wrapper-2">SUMMARY </span>
          <div className="div-wrapper">
          <div className="text-wrapper">SUMMARY</div>
            </div>
          </p>
        </div>
        <div className = "frame">
          <p className = "LOCATION-quezon-city">
            LOCATION: Quezon City Clinic
            <br/>
            DATE: 11/6/2023
            <br/>
            TIME: 9:00 am
            <br/>
            PRICE: P3600
            <br/>
            SERVICE TYPE: Implant Dentistry
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};
