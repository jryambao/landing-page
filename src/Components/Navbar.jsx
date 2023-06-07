import React, { useState, useEffect, useRef } from 'react';
import '../Style/Main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

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

  const handleMobileMenuToggle = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };
   const handleSubMenuToggle = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <header className={isSticky}>
      <nav className="container">
        <div className="logo">
          <a href="#">
            <img src="img/phil-logo.png" alt="Header Logo" width="150" />
          </a>
        </div>
        <div className={`mobile-menu ${isMobileMenuVisible ? 'active' : ''}`}>
        <div className="header-nav">
         <button className="burger-icon" onClick={handleMobileMenuToggle}>
              <FontAwesomeIcon icon={faBars} />
            </button>
        <a href="tel:1+999.999.999">
          <FontAwesomeIcon icon={faPhone} />
        </a>
           
        <a href="mailto:johnralph266@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
        </a>

        </div>
        <div className="sidemenu">
         <button className="sideburger" onClick={handleMobileMenuToggle}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          <div className="mobile-logo">
          <a href="#">
            <img src="img/phil-logo.png" alt="Header Logo" width="150" />
          </a>
        </div>
          <ul className="mobile-nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Listings</a>
              <ul className="submenu">
                <li>
                  <a href="#">Residential</a>
                </li>
                <li>
                  <a href="#">Commercial</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
  
        </div>
        <ul className="desktop-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li onMouseEnter={handleSubMenuToggle} onMouseLeave={handleSubMenuToggle}>
            <a href="#">Listings</a>
            <ul className="submenu">
              <li>
                <a href="#">Residential</a>
              </li>
              <li>
                <a href="#">Commercial</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

