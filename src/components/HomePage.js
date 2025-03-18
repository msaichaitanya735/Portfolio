import React from "react";
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

function HomePage() {
  return (
    <div className="hero-Example">
      <NavBar />
      <div className="homepage-container">
        <div className="homepage-container-left">
          <div className="text-container">SAICHAITANYA MUTHYALA</div>
          <p className="paragraph-container">
            A highly skilled Full-Stack Developer with expertise in React, Node.js, Spring Boot, and AI-driven automation, pursuing an MS in Computer Science (GPA 4.0), with strong problem-solving skills, cloud experience (AWS/GCP), and a passion for building scalable web applications.
          </p>
          <div className="button-container">
            <Button variant="contained" color="success">
              <span>Resume <DownloadIcon /></span>
            </Button>
            <Button variant="contained" color="success">
              <span>Hire Me <SendIcon /></span>
            </Button>
            <Button variant="contained" color="success">
              <span>Explore Me <LanguageIcon /></span>
            </Button>
          </div>
        </div>
        <div className="homepage-container-right">
          <img src={heroImg} alt="Chaitanya" />
        </div>
      </div>
      <AboutMe />
      <Education/>
      <WorkExperience/>
      <ProjectsPage />
    </div>
  );
}

export default HomePage;
