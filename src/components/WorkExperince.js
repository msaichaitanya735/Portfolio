import React from "react";
import "./WorkExperience.css";
import cognizant from "../images/me/Cognizant-Logo.jpg"; // Replace with actual image paths
import codingstudio from "../images/me/codingStudios.jpg";


function WorkExperience() {
  return (
    <div className="experience-container">
      {/* Title Section */}
      <div className="experience-title">
        <h1>Professional <span>EXPERIENCE</span></h1>
        <p>Bringing expertise in full-stack development, cloud computing, and AI-driven solutions.</p>
      </div>

      {/* Experience Section */}
      <div className="experience-item">
        <div className="experience-text">
          <h2>Programmer Analyst</h2>
          <p>
            <ul>
              <li>Optimized UI performance & rendering using React, Next.js, and TypeScript.</li>
              <li>Developed scalable, reusable UI components, ensuring accessibility & responsiveness.</li>
              <li>Led Agile development, collaborating across teams for seamless execution.</li>
              <li>Architected high-availability cloud solutions, improving reliability & cost efficiency.</li>
            </ul>
          </p>
        </div>
        <div className="experience-imgCard">
            <div className="experience-imgHolder">
                <img src={cognizant} alt="Software Engineer Work" />
            </div>
        </div>
      </div>

      <div className="experience-item">
      <div className="experience-imgCard">
      <div className="experience-imgHolder">
          <img src={cognizant} alt="Cloud Development" />
        </div>
        </div>
        <div className="experience-text">
          <h2>Progammer Analyst Intern</h2>
          <p>
            <ul>
            <li> Built a full-stack web app, leading a team of developers.</li>
            <li> Implemented Agile workflows, enhancing productivity.</li>
            <li> Developed React components & REST APIs for smooth user experience.</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-text">
          <h2>Software Development Engineer</h2>
          <p>
            <ul>
            <li> Built and deployed real-time apps for thousands of users.</li>
            <li> Organized coding competitions, growing developer engagement.</li>
            <li> Optimized server throughput & app scalability for peak performance.</li>
            </ul>
          </p>
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
