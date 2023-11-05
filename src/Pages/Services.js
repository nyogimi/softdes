// Services.js

import React from "react";
import "./Services.css";

export const Services = () => {
  return (
    <div className="services">
      <div className="div">
        <div className="overlap-group">
          <img className="ellipse" alt="Ellipse" src="ellipse.svg" />
          <img className="img" alt="Ellipse" src="image.svg" />
          <div className="dark-theme">
            <img
              className="element"
              alt="Element"
              src="/logo.png"
            />
            <div className="collapse-navbar">
              <div className="navbar-nav">
                <div className="li">
                  <div className="a">
                    <a href="/" className="link">Home</a>
                  </div>
                </div>
                <div className="a-wrapper">
                  <div className="link-wrapper">
                    <a href="/services" className="text-wrapper">Services</a>
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="a-2">
                    <a href="/aboutus" className="text-wrapper">About Us</a>
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
                  <div className="button-btn-primary">
                    <a href="/book-appointment" className="btn-text">Book Appointment</a>
                    <img
                      className="icn-arrow-right-icn"
                      alt="Icn arrow right icn"
                      src="icn-arrow-right-icn-xs.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="frame">
              <div className="frame-2">
                <div className="frame-3">
                  <div className="text-wrapper-2">Ortho Services</div>
                  <p className="text-wrapper-3">
                    TMJ (Temporomandibular Joints) Orthodontics
                    <br />
                    Functional Jaw Orthopedics
                    <br />
                    Prosthodontics
                  </p>
                </div>
              </div>
              <div className="frame-2">
                <div className="services-wrapper">
                  <div className="text-wrapper-2"> Services</div>
                </div>
                <div className="text-wrapper-3">
                  Cosmetics
                  <br />
                  Surgery
                  <br />
                  Implant Dentistry
                </div>
              </div>
            </div>
            <p className="p">What are the Services we Offer?</p>
          </div>
          <div className="content">
            <div className="columns">
              <div className="column">
                <div className="info">
                  <div className="frame-4">
                    <p className="text-wrapper-4">Limbos Dental Cosmetics and Implant Center</p>
                    <div className="p-s-card-paragraph">
                      <p className="we-are-committed-to">
                        We are committed to give you the best smile you deserve! If you have been feeling less
                        than&nbsp;&nbsp;happy with your smile and want to do something about it, look no further! LIMBOS
                        DENTAL COSMETICS AND IMPLANT CENTER has the tools to give you your best smile!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menus">
                <div className="div-s-card-text-wrapper">
                  <div className="div-s-card-text">
                    <div className="frame-5">
                      <div className="text-wrapper-5">Main Clinic</div>
                      <div className="p-s-card-paragraph-2">
                        <p className="text-wrapper-6">
                          120 Maginhawa Street, Teachers Village, Diliman Quezon City Room 1013 South, Tower, Cathedral
                          Heights Bldg. Complex, E. Rodriguez Ave. Unit 201 BMCI Building 3, 1146 Hermosa Street Abad
                          Santos, Manila., Quezon City, Philippines
                        </p>
                      </div>
                    </div>
                    <div className="frame-6">
                      <div className="text-wrapper-5">Our Hotline</div>
                      <div className="p-s-card-paragraph-2">
                        <div className="text-wrapper-7">0917 828 0047</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="line" alt="Line" src="line-90.svg" />
            <div className="bottom">
              <p className="element-all-rights">© 2023, All Rights Reserved</p>
            </div>
          </div>
        </div>
        <div className="button-btn-primary-wrapper">
          <div className="button-btn-primary">
            <a href="/book-appointment" className="btn-text-2">Book Appointment</a>
            <img className="icn-arrow-right-icn-2" alt="Icn arrow right icn" src="icn-arrow-right-icn-xs-2.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
