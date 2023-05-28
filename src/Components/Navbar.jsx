import React, { useState, useEffect } from 'react';
import '../Style/Main.scss'


function navbar() {
  return (
    <header>
        <nav className="container">
        <div className="logo">
          <a href="#">
           <img src="img/phil-logo.png" alt="Header Logo" width="150"/>

          </a>
        </div>
            <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/communities">Listings</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default navbar