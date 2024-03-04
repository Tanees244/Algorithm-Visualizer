import "./FooterStyles.css";
import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={30} className="footer-icon" />
            <div>
              <p className="footer-text">Karachi, Pakistan</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone size={20} className="footer-icon" />
            <p className="footer-text">0001-00100-1</p>
          </div>
          <div className="email">
            <FaMailBulk size={20} className="footer-icon" />
            <p className="footer-text">k20-1879</p>
          </div>
        </div>
        <div className="right">
          <h4 className="footer-heading">Algorithm Project</h4>
          <p className="footer-description">
            We present you algorithm visualizer
          </p>
          <div className="social">
            <FaFacebook size={30} className="social-icon" />
            <FaTwitter size={30} className="social-icon" />
            <FaLinkedin size={30} className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
