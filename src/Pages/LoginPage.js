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
          <img
            className="element"
            alt="Element"
            src="/logo.png"
          />
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
            <Link to="/homepage" className="button-btn-primary">
              <div className="btn-text">Login</div>
            </Link>
          </div>
<<<<<<< HEAD
=======
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
>>>>>>> 64b3d02c3e5e0b9bb1c62753ef2b7cbb1fac7cc4
        </div>
      </div>
    </div>
  ); 
};
