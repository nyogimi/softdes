import React from "react";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
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
                            <img className="vector" alt="Vector" src="vector.svg" />
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
                            <img className="vector" alt="Vector" src="vector.svg" />
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
                            <img className="vector" alt="Vector" src="vector.svg" />
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
              src="/logo.png"
            />
            <div className="collapse-navbar">
              <div className="navbar-nav">
                <div className="li">
                  <a href="/" className="a">Home</a>
                </div>
                <div className="a-wrapper">
                  <div className="link-wrapper">
                    <a href="/services" className="link-2">Services</a>
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="a-2">
                    <a href="/aboutus" className="link-2">About Us</a>
                  </div>
                </div>
                <div className="li-2">
                  <div className="a-3">
                    <a href="/contact" className="link-2">Contact</a>
                  </div>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <div className="nav-item">
                  <div className="button-btn-primary-2">
                    <div className="btn-text-2">Book Appointment</div>
                    <img className="icn-arrow-right-icn" alt="Icn arrow right icn" src="/icn arrow-right .icn-xs.svg" />
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
