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
          <div className="form-control">
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-control-input">
            <input type="text" id="email" name="email" />
          </div>
          <div className="text-wrapper">
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-form-control-wrapper">
            <input type="password" id="password" name="password" />
          </div>
        </div>
      </div>
    </div>
  ); 
};
