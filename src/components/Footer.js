import React from "react";
import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-brand">
          <h2>SaiChaitanya Muthyala</h2>
          <p>Building Scalable & Intelligent Solutions</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Media Links */}
        <div className="footer-socials">
          <a href="mailto:saichaitanyamuthyalas@gmail.com" title="Email">
            <EmailIcon fontSize="large" />
          </a>
          <a href="https://linkedin.com/in/saichaitanya-muthyala-3204a71a0" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="https://github.com/msaichaitanya735" target="_blank" rel="noopener noreferrer" title="GitHub">
            <GitHubIcon fontSize="large" />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SaiChaitanya Muthyala | Made with Passion & Coffee ☕</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
