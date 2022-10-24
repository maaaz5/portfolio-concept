import React, { useEffect, useState } from "react";

const Footer = () => {
  let datee = new Date();
  const [date, setDate] = useState(datee);

  function time() {
    setTimeout(() => {
      setDate(datee);
    }, 1000);
  }

  useEffect(() => {
    return time();
  }, [time]);

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
