import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); // Update the year every minute

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    let valid = true;

    if (formData.name.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'This field is required',
      }));
      valid = false;
    }

    if (formData.email.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'This field is required',
      }));
      valid = false;
    }

    if (formData.message.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'This field is required',
      }));
      valid = false;
    }

    return valid;
  };

  const sendEmail = (templateParams) => {
    emailjs
      .send(
        'service_0h118i9', // Replace with your EmailJS service ID
        'template_s9px0kh', // Replace with your EmailJS template ID
        templateParams,
        'JYHjsxNWXvQOU-vu1' // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log('Email sent:', response.status, response.text);
        // Optionally, show a success message to the user
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Email error:', error);
        // Optionally, show an error message to the user
        setIsLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      sendEmail(templateParams);
    }
  };

  return (
    <>
      <div className="hp-contact">
        <div className="container">
          <div className="section-title">
            <h3>Get In Touch</h3>
            <h2>Contact Phil</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="first-row input-box">
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span>{errors.name}</span>}
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
              </div>
            </div>
            <div className="second row input-box">

            <div>
                <label>Message:</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <span>{errors.message}</span>}
              </div>
            </div>

            <div className="submit-btn">
              {isLoading ? (
                <div className="spinner"></div>
              ) : (
                <button type="submit">Send</button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="hp-footer">
        <div className="container">
          <div className="footer-top">
          <a href='#' className="footer-logo">
            <img src="img/phil-logo.png" alt="Footer Logo" width="250" />
          </a>
          <div className="footer-sm">
            <ul>
                  <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                </ul>
          </div>   
        </div>
        <div className="footer-bot">
          <div className="footer-nav">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Listings</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>

          </div>
          <div className="footer-disclaimer">
            <p>The content, design, and images displayed on the Phil Dunphy Real Estate website are protected by copyright laws and international treaties. All rights are reserved by Phil Dunphy Real Estate and its respective owners.</p>
            <p>Visitors are prohibited from reproducing, distributing, modifying, transmitting, or using any material from this website without the explicit written permission of Phil Dunphy Real Estate. Unauthorized use of the website's content may violate copyright, trademark, and other applicable laws.</p>
          </div>
          <div className="footer-copyright">
            <p>&copy; {currentYear} Phil Dunphy Real Estate. All rights reserved.</p>
          </div>
          <FontAwesomeIcon icon={faWarehouse} />
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
