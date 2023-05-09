import React, { useState, useEffect } from 'react';
import '../App.scss'

const images = [
  { src: 'img/slide-3.jpg'},
  { src: 'img/slide-4.jpg'},
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image.src})` }}
        >
          <div className="carousel-item-content">
            <h2>Phil Dunphy</h2>
            <p>Not just another realtor, a man who cares!</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;