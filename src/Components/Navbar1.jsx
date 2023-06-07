import React, { useState, useEffect, useRef } from 'react';
import '../Style/Main.scss';
import { faPhone, faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      const stickyHeaderClass = window.scrollY > 0 ? 'sticky' : '';
      setIsSticky(stickyHeaderClass);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <header className={isSticky}>
        <nav className="nav">
      <a href="#" className="nav__brand">
       <img src="img/phil-logo.png" alt="Header Logo" width="150" />
      </a>
      <ul className={active}>
      <div className="mobile-logo">
        <a href="#">
       <img src="img/phil-logo.png" alt="Header Logo" width="150" />
      </a>
      </div>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Listings
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Videos
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div className="header_nav">
        <a href="tel:1+999.999.999">
          <FontAwesomeIcon icon={faPhone} />
        </a>
           
        <a href="mailto:johnralph266@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <button onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </button>
      </div>
    
    </nav>
    </header>
    
  );
}

export default Navbar;