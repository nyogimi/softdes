import React from "react";
import "./Contact.css";

export const DarkTheme = () => {
  return (
    <div className="dark-theme">
      <img
        className="element"
        alt="Element"
        src="21317736-166466953903791-3719905096119854242-n-removebg-preview-2.png"
      />
      <div className="collapse-navbar">
        <div className="navbar-nav">
          <div className="li">
            <div className="a">
              <div className="link">Home</div>
            </div>
          </div>
          <div className="a-wrapper">
            <div className="link-wrapper">
              <div className="text-wrapper">Services</div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="div">
              <div className="link-2">About Us</div>
            </div>
          </div>
          <div className="li-2">
            <div className="a-2">
              <div className="link-2">Contact</div>
            </div>
          </div>
        </div>
        <div className="nav-item-wrapper">
          <div className="nav-item">
            <div className="button-btn-primary">
              <div className="btn-text">Book Appointment</div>
              <img className="icn-arrow-right-icn" alt="Icn arrow right icn" src="icn-arrow-right-icn-xs.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
