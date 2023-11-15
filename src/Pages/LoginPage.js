import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-page">
      <div className="light-theme-wrapper">
        <div className="light-theme">
          <img className="element" alt="Element" src="/logo.png" />
          <div className="h">Welcome!</div>
          <div className="form-control">Email</div>
          <input
            type="email"
            className="form-control-input"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="form-control-password-text">Password</div>
          <input
            type="password"
            className="form-control-password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="form-group-custom">
            <Link to="homepage" className="button-btn-primary">
              <div className="btn-text">Login</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
