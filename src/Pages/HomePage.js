import React from "react";
import { Link } from "react-router-dom";
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
                      <label className="form-control">Location</label>
                      <select className="custom-select">
                        <option value="">Please Select</option>
                        <option value="Manila Clinic">Manila Clinic</option>
                        <option value="Quezon City Clinic">Quezon City Clinic</option>
                        <option value="St. Luke’s Medical Center">St. Luke’s Medical Center</option>
                      </select>
                    </div>
                    <div className="form-group-custom">
                      <label className="form-control">Service</label>
                      <select className="custom-select">
                        <option value="">Please Select</option>
                        <option value="TMJ (Temporomandibular Joints)">TMJ (Temporomandibular Joints)</option>
                        <option value="Orthodontics">Orthodontics</option>
                        <option value="Functional Jaw Orthopedics">Functional Jaw Orthopedics</option>
                        <option value="Prosthodontics">Prosthodontics</option>
                        <option value="Cosmetics">Cosmetics</option>
                        <option value="Surgery">Surgery</option>
                        <option value="Implant Dentistry">Implant Dentistry</option>
                      </select>
                    </div>
                    <div className="form-group-custom">
                      <label className="form-control">Date</label>
                      <div className="custom-select">
                        <input type="date" className="date-input" />
                      </div>
                    </div>
                    <div className="form-group-custom">
                      <label className="form-control">Time</label>
                      <select className="custom-select">
                        <option value="">Please Select</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div className="button-btn-primary">
                    <Link to="/summary" className="btn-text">
                      Book Appointment
                    </Link>
                  </div>
                  <div className="button-btn-secondary">
                    <Link to="/signup" className="btn-text">
                      Sign Up
                    </Link>
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
                  <Link to="/" className="a">
                    Home
                  </Link>
                </div>
                <div className="a-wrapper">
                  <div className="link-wrapper">
                    <Link to="/services" className="text-wrapper">
                      Services
                    </Link>
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="a-2">
                    <Link to="/aboutus" className="text-wrapper">
                      About Us
                    </Link>
                  </div>
                </div>
                <div className="li-2">
                  <div className="a-3">
                    <Link to="/contact" className="link-2">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <div className="nav-item">
                  <div className="button-btn-primary-2">
                    <Link to="/summary" className="btn-text-2">
                      Book Appointment
                    </Link>
                    <img
                      className="icn-arrow-right-icn"
                      alt="Icn arrow right icn"
                      src="/icn arrow-right .icn-xs.svg"
                    />
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
