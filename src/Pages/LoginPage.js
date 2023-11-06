import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
          <div className="form-group-custom">
            {/* Wrap the "Login" button with a Link */}
            <Link to="/homepage" className="button-btn-primary">
              <div className="btn-text">Login</div>
            </Link>
          </div>
          <div className="form-control-input" />
          <div className="input-form-control-wrapper">
            <div className="input-form-control" />
          </div>
        </div>
      </div>
    </div>
  );
};
