import React, { useState, useEffect } from 'react';
import '../Style/Main.scss';

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
          <div className="burger-icon" onClick={handleMobileMenuToggle}>
            <span></span>
            <span></span>
            <span></span>
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
