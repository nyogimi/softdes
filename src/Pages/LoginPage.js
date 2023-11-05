import React from "react";
import "./LoginPage.css";

export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="light-theme-wrapper">
        <div className="light-theme">
          <img
            className="element"
            alt="Element"
            src="/logo.png"
          />
          <div className="h">Welcome!</div>
          <div className="form-control">Email</div>
          <div className="text-wrapper">Password</div>
          <button className="form-group-custom">
            <button className="button-btn-primary">
              <button className="btn-text">Login</button>
            </button>
          </button>
          <div className="form-control-input" />
          <div className="input-form-control-wrapper">
            <div className="input-form-control" />
          </div>
        </div>
      </div>
    </div>
  );
};
