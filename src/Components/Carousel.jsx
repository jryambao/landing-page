import React, { useState, useEffect } from 'react';
import '../Style/Main.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  { src: 'img/slide-3.jpg'},
  { src: 'img/slide-4.jpg'},
];

const Carousel = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <section className="carouselSlider">
      <div className="carousel">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image.src})` }}>
          
          
        </div>
      ))}
      <div className="carousel-item-content">
            <div data-aos-once="true" data-aos="fade-down" data-aos-duration="1000">
               <h2>Phil Dunphy</h2>
            <p>Not just another realtor, a man who cares!</p>
            </div>
           
          </div>
          <div data-aos-once="true" data-aos="fade-right" data-aos-duration="1000" className="carousel-quote">
            <p>20 Years of Selling Homes Locally</p>
          </div>
      </div>
      
    </section>
  );
};

export default Carousel;