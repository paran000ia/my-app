import "./css/Footer.css";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-logo">

          <span className="logo-icon">
            ≋
          </span>

          <span>
            DiveSea
          </span>

        </div>

        <nav className="footer-nav">

          <a href="/">
            Privacy Policy
          </a>

          <a href="/">
            Term & Conditions
          </a>

          <a href="/">
            About Us
          </a>

          <a href="/">
            Contact
          </a>

        </nav>

      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">

        <p>
          © 2023 EATLY All Rights Reserved.
        </p>

        <div className="footer-socials">

          <a href="/">
            <FaInstagram />
          </a>

          <a href="/">
            <FaLinkedinIn />
          </a>

          <a href="/">
            <FaFacebookF />
          </a>

          <a href="/">
            <FaTwitter />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;