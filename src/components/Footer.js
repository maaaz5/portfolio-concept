import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li>
          <a href="#" className="footer__nav-nav__link">
            Find me in:
          </a>
        </li>
        <li>
          <a href="#" className="footer__nav-nav__link">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#" className="footer__nav-nav__link">
            <i class="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#" className="footer__nav-nav__link">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
      <p>15:56</p>
    </footer>
  );
};

export default Footer;
