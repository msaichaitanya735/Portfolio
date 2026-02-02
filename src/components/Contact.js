import React, { useState } from "react";
import "./Contact.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const FORMSPREE_URL = process.env.REACT_APP_FORMSPREE_URL || "https://formspree.io/f/mjgopgdg";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "" | "sending" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FORMSPREE_URL) {
      setStatus("error");
      setErrorMessage("Form is not configured. Please email me directly at saichaitanyamuthyalas@gmail.com.");
      return;
    }
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again or email me directly.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email me at saichaitanyamuthyalas@gmail.com");
    }
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
            disabled={status === "sending"}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={status === "sending"}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            disabled={status === "sending"}
          />
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          {status === "success" && (
            <p className="contact-form-feedback success">Thanks! Your message was sent. I'll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="contact-form-feedback error">
              {errorMessage}{" "}
              <a href="mailto:saichaitanyamuthyalas@gmail.com" className="contact-email-link">Email me</a>
            </p>
          )}
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
