import React from "react";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="ellipse" alt="Ellipse" src="ellipse.svg" />
          <img className="img" alt="Ellipse" src="ellipse-2.svg" />
          <div className="container">
            <div className="row">
              <div className="col-md">
                <p className="headline">Limbos Dental Cosmetics and Implant Center</p>
              </div>
              <div className="card-item-wrapper">
                <div className="card-item">
                  <div className="h">Book Appointment</div>
                  <div className="card-content">
                    <div className="form-group-custom">
                      <div className="form-control">Location</div>
                      <div className="custom-select">
                        <div className="select">
                          <div className="option">
                            <div className="dropdown">Please Select</div>
                            <img className="vector" alt="Vector" src="image.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group-custom">
                      <div className="form-control">Service</div>
                      <div className="custom-select">
                        <div className="select">
                          <div className="option">
                            <div className="dropdown">Please Select</div>
                            <img className="vector" alt="Vector" src="vector-2.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group-custom">
                      <div className="form-control">Date</div>
                      <div className="custom-select">
                        <div className="select">
                          <div className="option">
                            <img className="vector" alt="Vector" src="vector.svg" />
                            <div className="text-wrapper">Please Select</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group-custom">
                      <div className="form-control">Time</div>
                      <div className="custom-select">
                        <div className="select">
                          <div className="option">
                            <img className="vector" alt="Vector" src="vector-3.svg" />
                            <div className="div">Please Select</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="button-btn-primary">
                    <div className="btn-text">Book Appointment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    <img className="link" alt="Link" src="link.png" />
                  </div>
                </div>
                <div className="a-wrapper">
                  <div className="link-wrapper">
                    <div className="link-2">Services</div>
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="a-2">
                    <div className="link-2">About Us</div>
                  </div>
                </div>
                <div className="li-2">
                  <div className="a-3">
                    <div className="link-2">Contact</div>
                  </div>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <div className="nav-item">
                  <div className="button-btn-primary-2">
                    <div className="btn-text-2">Book Appointment</div>
                    <img className="icn-arrow-right-icn" alt="Icn arrow right icn" src="icn-arrow-right-icn-xs.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};