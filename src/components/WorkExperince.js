import React from "react";
import "./WorkExperience.css";
import cognizant from "../images/me/Cognizant-Logo.jpg"; // Replace with actual image paths
import codingstudio from "../images/me/codingStudio.jpeg";


function WorkExperience() {
  return (
    <div className="experience-container">
      {/* Title Section */}
      <div className="experience-title">
        <h1>WORK <span>EXPERIENCE</span></h1>
        <p>Bringing expertise in full-stack development, cloud computing, and AI-driven solutions.</p>
      </div>

      {/* Experience Section */}
      <div className="experience-item">
        <div className="experience-text">
          <h2>Programmer Analyst</h2>
          <p>Worked on scalable web applications using **React, Node.js, and AWS**. Developed automation scripts, optimized API calls, and improved system efficiency.</p>
          <button className="exp-btn">Learn More →</button>
        </div>
        <div className="experience-imgCard">
            <div className="experience-imgHolder">
                <img src={cognizant} alt="Software Engineer Work" />
            </div>
        </div>
      </div>

      <div className="experience-item reverse">
      <div className="experience-imgCard">
      <div className="experience-imgHolder">
          <img src={cognizant} alt="Cloud Development" />
        </div>
        </div>
        <div className="experience-text">
          <h2>Progammer Analyst Intern</h2>
          <p>Deployed **serverless applications** using AWS Lambda and optimized CI/CD pipelines for seamless deployment.</p>
          <button className="exp-btn">Learn More →</button>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-text">
          <h2>AI & Automation Specialist</h2>
          <p>Developed AI-powered tools for job application automation, integrating **NLP and GPT-based models** for enhanced resume matching.</p>
          <button className="exp-btn">Learn More →</button>
        </div>
        <div className="experience-imgCard">
            <div className="experience-imgHolder">          
                <img src={codingstudio} alt="AI & Automation" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
