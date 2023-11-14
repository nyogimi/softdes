import React from "react";
import "./SignUpPage.css";

export const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <div className="light-theme-wrapper">
        <div className="light-theme">
          <img
            className="element"
            alt="Element"
            src="logo.png"
          />
          <div className="h">Sign Up</div>
          <button className="button-btn-primary">
            <button className="btn-text">Sign Up</button>
          </button>
          <div className="form-control">Email 
            <div className="input-form-control">
            <input type="text" id="email" name="email" placeholder="Enter your email" />
          </div>

          </div>
          
          <div className="text-wrapper">Name
            <div className="input-form-control-2">
            <input type="text" id="name" name="name" placeholder="Enter your Name"/>
          </div>
          </div>
          
          <div className="div">Contact No.
            <div className="input-form-control-3">  
            <input type="text" id="num" name="num" placeholder="Enter Contact Number"/>
          </div>
          </div>
            
          <div className="form-control-2">Address
            <div className="input-form-control-4">
            <input type="text" id="address" name="address" placeholder="Enter Home Address"/>
          </div>
          </div>

          <div className="overlap-group">
            <div className="form-control-3">Password
              <div className="input-form-control-5">
              <input type="pass" id="password" name="password" placeholder="Enter Password"/>
            </div>
            </div>
          </div>

            </div>
          </div>
        </div>
  );
};
