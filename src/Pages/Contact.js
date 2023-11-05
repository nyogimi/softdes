import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="overlap-2">
              <p className="quezon-city-clinic">
                Quezon City Clinic <br />
                2nd Floor, #120 St&nbsp;&nbsp;Maginhawa St.,
                <br />
                Teachers Village. Quezon City <br />
                <br />
                Tue-Sun: 2:00 PM - 9:00&nbsp;&nbsp;PM
                <br />
                <br />
                Mobile No: +63 9954471918
              </p>
            </div>
            <div className="overlap-group-2">
              <img className="img" alt="Ellipse" src="ellipse.svg" />
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

              <div className="headline">Dr. Lester R. Limbos</div>
              <p className="h-headline">
                Manila Clinic
                <br />
                Unit 102, BMC Bldg 3 #1146 Hermosa St., Abad Santos Ave., Manila
                <br />
                <br />
                Tues/Wed/Thurs/Sat/Sun: 7:00 AM - 2:00 PM
                <br />
                <br />
                Mobile No: +63 932 851 7356
              </p>
            </div>
          </div>
          <img className="image" alt="Image" src="/image 15.png" />
        </div>
        <div className="overlap-3">
          <p className="p">
            St. Luke’s Medical Center
            <br />
            Room 1013 South Tower, CHBC E. Rodriguez Ave., Quezon City (By Appointment Only)
            <br />
            <br />
            Telephone No: (02) 723 0101&nbsp;&nbsp;loc 2013
            <br />
            Mobile No: +63 917 828 0047
          </p>
          <img className="image-2" alt="Image" src="/image 16.png" />
          <div className="content">
            <div className="columns">
              <div className="column">
                <div className="info">
                  <div className="frame">
                    <p className="text-wrapper-2">Limbos Dental Cosmetics and Implant Center</p>
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
                    <div className="frame-2">
                      <div className="text-wrapper-3">Main Clinic</div>
                      <div className="p-s-card-paragraph-2">
                        <p className="text-wrapper-4">
                          120 Maginhawa Street, Teachers Village, Diliman Quezon City Room 1013 South, Tower, Cathedral
                          Heights Bldg. Complex, E. Rodriguez Ave. Unit 201 BMCI Building 3, 1146 Hermosa Street Abad
                          Santos, Manila., Quezon City, Philippines
                        </p>
                      </div>
                    </div>
                    <div className="frame-3">
                      <div className="text-wrapper-3">Our Hotline</div>
                      <div className="p-s-card-paragraph-2">
                        <div className="text-wrapper-5">0917 828 0047</div>
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
      </div>
    </div>
  );
};
