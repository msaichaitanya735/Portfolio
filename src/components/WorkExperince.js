import React from "react";
import "./WorkExperience.css";
import cognizant from "../images/me/Cognizant-Logo.jpg"; // Replace with actual image paths
import codingstudio from "../images/me/codingStudios.jpg";
import haptag from "../images/me/haptag_logo.png";


function WorkExperience() {
  return (
    <div className="experience-container">
      {/* Title Section */}
      <div className="experience-title">
        <h1>Professional <span>EXPERIENCE</span></h1>
        <p>Bringing expertise in AI, automation, and full-stack development.</p>
      </div>

      {/* Experience Section */}
      <div className="experience-item">
        <div className="experience-text">
          <h2>AI Data Analyst</h2>
          <p><strong>Haptag</strong> | June 2025 - Present</p>
          <p>
            <ul>
              <li>Building and designing applications with a focus on AI and prompt engineering.</li>
              <li>Developing AI models (including GPT-4o and Gemini) for anomaly detection in cybersecurity.</li>
              <li>Researching and implementing the latest AI tools and technologies to enhance Haptag's offerings.</li>
            </ul>
          </p>
        </div>
        <div className="experience-imgCard">
            <div className="experience-imgHolder">
                <img src={haptag} alt="Haptag" />
            </div>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-text">
          <h2>Programmer Analyst</h2>
          <p>
            <ul>
              <li>Leveraged Large Language Models (LLMs) to build intelligent automation solutions.</li>
              <li>Engineered and fine-tuned prompts for AI models to ensure optimal performance and accuracy.</li>
              <li>Contributed to the development of AI-powered features within full-stack applications.</li>
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