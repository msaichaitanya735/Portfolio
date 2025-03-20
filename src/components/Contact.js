import React, { useState } from "react";
import "./Contact.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Handle Form Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission (Can be linked to Backend/API)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Title */}
        <h1 className="contact-title">
          GET IN <span>TOUCH</span>
        </h1>
        <p>Let's work together! Fill out the form below or connect via social media.</p>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
        </form>

        {/* Social Links */}
        <div className="contact-socials">
          <a href="mailto:saichaitanyamuthyalas@gmail.com">
            <EmailIcon/>
          </a>
          <a href="https://www.linkedin.com/in/saichaitanya-muthyala-3204a71a0/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon/>
          </a>
          <a href="https://github.com/msaichaitanya735" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
