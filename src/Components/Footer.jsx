import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {
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
        name: 'Name is required',
      }));
      valid = false;
    }

    if (formData.email.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required',
      }));
      valid = false;
    }

    if (formData.message.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Message is required',
      }));
      valid = false;
    }

    return valid;
  };

  const sendEmail = (templateParams) => {
    emailjs.send(
      'service_0h118i9', // Replace with your EmailJS service ID
      'template_s9px0kh', // Replace with your EmailJS template ID
      templateParams,
      'JYHjsxNWXvQOU-vu1' // Replace with your EmailJS user ID
    )
      .then((response) => {
        console.log('Email sent:', response.status, response.text);
        // Optionally, show a success message to the user
      })
      .catch((error) => {
        console.error('Email error:', error);
        // Optionally, show an error message to the user
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
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
    <div className="first-row">
        <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder='Your Name'
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
          placeholder='youremail@example.com'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
    </div>
    <div className="second-row">
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <span>{errors.message}</span>}
      </div>
    </div>
    
      <div className="submit-btn">
        <button type="submit">Submit</button>

      </div>
    </form>
    </div>
    </div>
    <div className="hp-footer">

    </div>
    </>
  );
};

export default Footer;
