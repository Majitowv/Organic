import React from "react";
import Logog from "../../../assets/images/header logo.svg";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__column">
            <h3>Contact Us</h3>
            <p><strong>Email:</strong> needhelp@Organia.com</p>
            <p><strong>Phone:</strong> 666 888 888</p>
            <p><strong>Address:</strong> 88 road, borklyn street, USA</p>
          </div>

          <div className="footer__column footer__center">
            <img className="footer__logo" src={Logog} alt="img" />
            <p className="footer__description">
              Simply dummy text of the printing and typesetting industry.
              Lorem Ipsum simply dummy text of the printing
            </p>
            <div className="footer__socials">
              <IoLogoInstagram/>
              <FaFacebook/>
              <FaTwitter/>
              <FaTelegram/>

            </div>
          </div>

          <div className="footer__column">
            <h3>Utility Pages</h3>
            <ul>
              <li>Style Guide</li>
              <li>404 Not Found</li>
              <li>Password Protected</li>
              <li>Licences</li>
              <li>Changelog</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
