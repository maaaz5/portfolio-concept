import React, { useEffect, useState } from "react";

const Footer = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);

  // setInterval(() => {
  //
  // }, 1000);

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
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#" className="footer__nav-nav__link">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#" className="footer__nav-nav__link">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
      <p style={{ marginRight: "12px" }} className="time">
        {date.toLocaleTimeString()}
      </p>
    </footer>
  );
};

export default Footer;
