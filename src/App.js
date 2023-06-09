import React from 'react';
import Carousel from './Components/Carousel.jsx';
import Navbar from './Components/Navbar1.jsx';
import Mainpage from './Components/Mainpage.jsx'
import Footer from './Components/Footer.jsx'
import './App.scss';

const images = [{
    src: 'img/slide-1.jpg',
    alt: 'Image 1',

  },
  {
    src: 'img/slide-2.jpg',
    alt: 'Image 2',

  },
  {
    src: 'img/slide-1.jpg',
    alt: 'Image 3',

  },
];

const App = () => {
  return ( 
    <div className = "mainWrapper" >
    <Navbar/>
    <Carousel images = {images}/> 
    <Mainpage/>
    <Footer/>
    </div>
  );
};

export default App;