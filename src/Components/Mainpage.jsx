import React, { useEffect, useRef, useState } from 'react';
import '../Style/Main.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import {listing , Testi, communities, video} from '../Components/Listings.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';


// PHIL NUMBERS
const NumberCounter = ({ counterRef }) => {
  const [hasStartedCounting, setHasStartedCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasStartedCounting) {
          startCounting();
          setHasStartedCounting(true);
        }
      });
    });

    observer.observe(counterRef.current);

    return () => {
      observer.unobserve(counterRef.current);
    };
  }, [counterRef, hasStartedCounting]);

  const startCounting = () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
      const target = +counter.getAttribute('data-target');
      const duration = 1000; // Adjust the duration as needed

      const countUp = (currentValue, targetValue, duration) => {
        let start = null;

        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const increment = Math.floor((targetValue / duration) * progress);

          if (counter === counters[counters.length - 0]) {
            counter.innerText = `${currentValue + increment}`;
          } else {
            counter.innerText = `$${currentValue + increment}K`;
          }

          if (progress < duration) {
            requestAnimationFrame(step);
          } else {
            if (counter === counters[counters.length - 0]) {
              counter.innerText = `${targetValue}`;
            } else {
              counter.innerText = `$${targetValue}K`;
            }
          }
        };

        requestAnimationFrame(step);
      };

      countUp(0, target, duration);
    });
  };

  return (
    <div className="hp-pp" ref={counterRef}>
      <div className="section-title">
        <h3>Phil's Numbers</h3>
        <h2>Why Work With Him</h2>
      </div>
      <div className="container">
      <div className="track-body">
        <div className="track-stats">
          <h3 className="counter" data-target={690}>
            0
          </h3>
          <p>In Total Sales</p>
        </div>
        <div className="track-stats">
          <h3 className="counter" data-target={10}>
            0
          </h3>
          <p>In Total Transactions <br></br> For 20 Years</p>
        </div>
        <div className="track-stats">
          <h3 className="counter" data-target={570}>
            0
          </h3>
          <p>Median <br></br> Sales Price</p>
        </div>
        <div className="track-stats">
          <h3 className="counter" data-target={980}>
            0
          </h3>
          <p>Average Price <br></br> Per Sq. Ft.</p>
        </div>
      </div>
      </div>
    </div>
  );
};


// LISTINGS CARD
const Listing = ({ title, price, description, imageName, centerTitle }) => (
  <div className="list-item">
    <a href="#" className="list-card">
      <div className="list-img">
        <img src={imageName} alt="Listing Image" />
      </div>
      <div className="center-info">
        <h3>{title}</h3>
        <h4>{centerTitle}</h4>
      </div>
      <div className="bottom-info">
        <h3>{title}</h3>
        <h4>{centerTitle}</h4>
      </div>
      <div className="hover-info">
        <h3>{price}</h3>
        <h4>{description}</h4>
      </div>
    </a>
  </div>
);
const FlPrevArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-prev-arrow">
    <FontAwesomeIcon icon={faArrowLeft} />
    Prev
  </button>
);

const FlNextArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-next-arrow">
    Next
    <FontAwesomeIcon icon={faArrowRight} />
  </button>
);
const Carousel = () => {
    const sliderRef = useRef(null);

      const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };


  const settings = {
    dots: false, // Enable navigation dots
    arrows: false, // Show navigation arrows
    infinite: true, // Disable infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll per swipe
    prevArrow: <FlPrevArrow />,
    nextArrow: <FlNextArrow />,
    responsive: [
      {
        breakpoint: 992, // Responsive breakpoint
        settings: {
          slidesToShow: 1, // Number of slides to show at this breakpoint
        },
      },
    ],
  };
   return (
    <div className="hp-listing">
      <div className="container">
        <div className="section-title">
          <h3>Featured</h3>
          <h2>Listings</h2>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {listing.map((listing, index) => (
            <Listing key={index} {...listing} />
          ))}
        </Slider>

        <div class="slick-btn list-btn global-btn" data-aos-duration="1000" data-aos="fade-in" data-aos-reveal="true" data-aos-once="true">
            <FlPrevArrow onClick={handlePrev} />
          <a href="#">View More</a>

            <FlNextArrow onClick={handleNext} />
        </div>

      </div>

    </div>
  );
};

// TESTIMONIAL CARD

const Testimonial = ({ testimonial, client }) => (
  <div className="ts-card">
    <div className="ts-content">
      <p>{testimonial}</p>
    </div>
    <div className="ts-name">
      <h3>{client}</h3>
    </div>
  </div>
);

const TsPrevArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-prev-arrow">
    <FontAwesomeIcon icon={faArrowLeft} />
    Prev
  </button>
);

const TsNextArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-next-arrow">
    Next
    <FontAwesomeIcon icon={faArrowRight} />
  </button>
);

const TsCarousel = () =>{
  const sliderRef = useRef(null);

  const settings = {
      dots: false, // Enable navigation dots
      arrows: false, // Show navigation arrows
      prevArrow: <TsPrevArrow />,
      nextArrow: <TsNextArrow />,
      infinite: true, // Disable infinite loop
      speed: 1000, // Transition speed in milliseconds
      slidesToShow: 1, // Number of slides to show at a time
      slidesToScroll: 1, // Number of slides to scroll per swipe
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  

  return (
    <div className="hp-testimonial">
    <div className="section-title">
          <h3>What They Say</h3>
          <h2>Testimonials</h2>
        </div>
      <div className="container">
        <div className="ts-list">
          <Slider ref={sliderRef} {...settings}>
          {Testi.map((Testi, index) => (
            <Testimonial key={index} {...Testi} />
          ))}
        </Slider>

        
        </div>
       
      </div>
       <div class="ts-btn global-btn" data-aos-duration="1000" data-aos="fade-in" data-aos-reveal="true" data-aos-once="true">
            <TsPrevArrow onClick={handlePrev} />
          <a href="#">View More</a>

            <TsNextArrow onClick={handleNext} />
        </div>
    </div>
  );
}

// COMMUNITIES

const CommunityCard = ({title, imageName, href, children}) =>{
    const [tapCount, setTapCount] = useState(0);

      const handleLinkClick = (e) => {
    if (tapCount === 0 && window.innerWidth <= 991) {
      e.preventDefault();
      setTapCount(1);
    }
  };
  const handleLinkHover = () => {
    if (tapCount === 0 && window.innerWidth <= 991) {
      setTapCount(1);
    }
  };

  return(
  <a href='#' className="fc-card">
    <div className="fc-img">
      <img src={imageName} alt="Community Name"/>
    </div>
    <div className="fc-title">
      <h3>{title}</h3>
      <h4>Los Angeles</h4>
    </div>
  </a>
  );
}

const Community = () =>{
  return(
    <div className="hp-community">
      <div className="container">
        <div className="fc-list">
         <div className="hpc-title">
          <h3>Featured</h3>
          <h2>Communities</h2>
          <div className="global-btn">
            <a href="#">View All</a>
          </div>
          
        </div>
          {communities.map((communities, index) => (
            <CommunityCard key={index} {...communities} />
          ))}
        </div>
        
   
      </div>
        
      </div>
  );
}

const VideoCard = ({imageName, link}) =>{

 return(
  <>
    <a target='blank' href={link} className="hpv-card">
      <div className="fv-img">
        <img src={imageName} alt="Videos"/>
      </div>
      <div className="play-btn">
        <FontAwesomeIcon icon={faPlay} />
      </div>
        
      </a>
      
  </>
    
  );


}

const Fvideo = () =>{
  const sliderRef = useRef(null);

  const settings = {
  dots: false,
  arrows: false,
  prevArrow: <FvPrevArrow />,
  nextArrow: <FvNextArrow />,
  centerMode: true,
  autoplay: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992, // screen size at which this configuration will be applied
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    
  ],
};

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="hp-video">
        <div className="container">
          <div className="hpv-title">
            <h3>Featured</h3>
            <h2>Videos</h2>
            <div className="global-btn">
            <a href="#">View All</a>
            </div>
          </div>
        <div className="fv-list">
        <FvPrevArrow onClick={handlePrev} />
          <Slider ref={sliderRef} {...settings}>
          {video.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </Slider>
         <FvNextArrow onClick={handleNext} />
        </div>
      </div>
    </div>
  );
}
  const FvPrevArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-prev-arrow">
    <FontAwesomeIcon icon={faArrowLeft} />
    Prev
  </button>
);

const FvNextArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-next-arrow">
    Next
    <FontAwesomeIcon icon={faArrowRight} />
  </button>
);




function Mainpage() {
  const counterRef = useRef(null);

  return (
    <section id="main-body">
      <div id="hp-about">
        <div className="container">
          <div className="agent">
            <img src="img/agent1.jpg" alt="Phil Dunphy" />
          </div>
          <div className="about-body">
            <div className="section-title">
              <h3>Meet</h3>
              <h2>Phil Dunphy</h2>
            </div>
            <div className="content">
              <p>
                Phil Dunphy is known for his quirky personality and unrelenting
                optimism. In addition to his role as a doting husband and
                father, Phil is a highly successful real estate agent. With his
               extensive knowledge of the market, impeccable communication
                skills, and unwavering determination, Phil is a force to be
                reckoned with in the real estate industry.
              </p>
              <p>
                Whether he's helping his clients find their dream home or
                closing a deal with a firm handshake and a big smile, Phil's
                commitment to his work is unwavering. As a realtor, Phil Dunphy
                is a true professional who knows how to get the job done with a
                touch of humor and a lot of heart.
              </p>
            </div>

            <div className="global-btn">
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <NumberCounter counterRef={counterRef} />
      <Carousel/>
      <TsCarousel/>
      <Community/>
      <Fvideo/>
      
    </section>
  );
}

export default Mainpage;
