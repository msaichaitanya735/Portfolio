import React, { useState } from "react";
import "./NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Portfolio</h1>
        <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
            <div className="navbar-nav">
                <a href="#about" className="nav-item">About Me</a>
                <a href="#skills" className="nav-item">Skills</a>
                <a href="#projects" className="nav-item">Projects</a>
                <a href="#contact" className="nav-item">Contact</a>
                <a href="/resume.pdf" className="nav-item resume-btn" download="SaiChaitanya_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </div>
        {/* Mobile Menu Button */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
