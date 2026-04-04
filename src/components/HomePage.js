import React, { useState } from "react";
import NavBar from "./NavBar";
import "./Homepage.css";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import SendIcon from "@mui/icons-material/Send";
import LanguageIcon from "@mui/icons-material/Language";
import heroImg from "../images/me/hero-img.jpg";
import ProjectsPage from "./ProjectsPage";
import AboutMe from "./AboutMe";
import WorkExperience from "./WorkExperince";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

const OPEN_TO_OPPORTUNITIES_TEXT = "Seeking W-2 AI Engineer / Full-Stack AI Engineer / LLM Specialist roles (H-1B sponsorship; currently on F-1 OPT).";

function HomePage() {
  const [showOpportunitiesDetail, setShowOpportunitiesDetail] = useState(false);

  return (
    <div className="hero-Example">
      <NavBar />
      <div className="homepage-container">
        <div className="homepage-container-left">
          <div className="text-container">SAICHAITANYA MUTHYALA</div>
          <p className="paragraph-container">
            Software Engineer with 5+ years of full-stack experience building web applications with React/TypeScript and Python. Proficient in API design, data visualization, LLM application development, and MCP/agentic frameworks.
          </p>
          <p className="paragraph-container paragraph-recently">
            Recently: shipped a production-level AI application from 0 to 1 in 2 days. Currently building end-to-end AI-powered web applications at HapTag AI.
          </p>
          <div className="hero-open-badge-wrap">
            <span
              className="hero-open-badge"
              onClick={() => setShowOpportunitiesDetail(!showOpportunitiesDetail)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setShowOpportunitiesDetail(!showOpportunitiesDetail)}
              aria-expanded={showOpportunitiesDetail}
            >
              Open to opportunities
            </span>
            {showOpportunitiesDetail && (
              <p className="hero-opportunities-detail">{OPEN_TO_OPPORTUNITIES_TEXT}</p>
            )}
          </div>
          <div className="button-container">
            <a href="/resume.pdf" download="SaiChaitanya_Resume.pdf" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="success">
                <span>Resume <DownloadIcon /></span>
              </Button>
            </a>
            <a href="#contact">
            <Button variant="contained" color="success" >
              <span>Hire Me <SendIcon /></span>
            </Button>
            </a>
            <a href="#about">
            <Button variant="contained" color="success">
              <span href="#about">Explore Me <LanguageIcon /></span>
            </Button>
            </a>
          </div>
        </div>
        <div className="homepage-container-right">
          <img src={heroImg} alt="Chaitanya" />
        </div>
      </div>
      <AboutMe />
      <Education/>
      <WorkExperience/>
      <Skills/>
      <ProjectsPage />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default HomePage;
