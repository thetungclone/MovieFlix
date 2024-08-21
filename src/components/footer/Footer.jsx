import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
// import logo from "../../assets/movieflix.svg";

import logo from "../../assets/movie-icon-logo.svg";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="footer-content">
          <div className="infoText">
            <img src={logo} alt="" />
            <p>
              Our React and Redux-based web application provides a seamless
              experience for choosing movies or TV shows, fetching up-to-date
              data from the TMDB API. With SCSS and React Icons, it features an
              intuitive interface and stylish design, making it easy to find
              your next favorite title.
            </p>
          </div>

          <div className="menuItems">
            <h2>All our pages</h2>
            <ul>
              <li className="menuItem">
                <a href="/">Home</a>
              </li>
              <li className="menuItem">
                <a href="/explore/movie">Movies</a>
              </li>
              <li className="menuItem">
                <a href="/explore/tv">TV Shows</a>
              </li>
            </ul>
          </div>

          <div className="contactInfo">
            <h2>Contact Us</h2>
            <p>
              <FaPhoneAlt size={16} /> (+91) 97140 15889
            </p>
            <p>
              <MdOutlineMailOutline size={20} /> twishamody@gmail.com
            </p>
          </div>
        </div>

        <div className="socialIcons">
          {/* <span className="icon">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </span> */}
          <span className="icon">
            <a
              href="https://www.instagram.com/twi.here/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://github.com/twihere3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.linkedin.com/in/twisha-mody"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </ContentWrapper>
      <div className="copyright1">
        <div className="copyright">
          © May 2024 MovieFlix Twisha Mody. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
