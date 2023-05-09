import React from 'react';
import Carousel from './homepage/carousel.jsx';
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
    <div className = "app" >
    <Carousel images = {images}
      title = "Hello World"
      subtitle = "Fuck"
    /> 
    </div>
  );
};

export default App;