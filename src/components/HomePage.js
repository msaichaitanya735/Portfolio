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
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

function HomePage() {
  const handleResumeDownload = () => {
    const resumeUrl = process.env.PUBLIC_URL + "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "SaiChaitanya_Resume.pdf"; // Custom file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero-Example">
      <NavBar />
      <div className="homepage-container">
        <div className="homepage-container-left">
          <div className="text-container">SAICHAITANYA MUTHYALA</div>
          <p className="paragraph-container">
            A highly skilled AI, Automation, and Web Developer with expertise in LLMs, React, Node.js, Spring Boot, and AI-driven automation, pursuing an MS in Computer Science (GPA 3.6). I have a passion for building scalable web applications and leveraging AI to solve complex problems, with experience in cloud technologies like AWS.
          </p>
          <div className="button-container">
            <Button variant="contained" color="success" onClick={handleResumeDownload}>
              <span>Resume <DownloadIcon /></span>
            </Button>
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
