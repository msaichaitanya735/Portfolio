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
          <h2>AI Engineer</h2>
          <p><strong>Haptag</strong> | June 2025 - Present</p>
          <p>
            <ul>
              <li>Built a multi-step LLM pipeline for cybersecurity log anomaly detection (Detector → Explainer → Reporter) with strict JSON schemas for downstream reliability.</li>
              <li>Implemented real-time streaming inference (FastAPI StreamingResponse/SSE) + frontend EventSource viewer for live anomaly results.</li>
              <li>Designed RAG retrieval with Postgres + pgvector to ground explanations and reduce hallucinations.</li>
              <li>Added cost/latency optimizations: batching, token controls, semantic caching strategy.</li>
              <li>Ran prompt evaluation/testing across GPT-4o + Gemini to compare quality/consistency and failure modes.</li>
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
          <p><strong>Cognizant</strong> | Jul 2021 - Jun 2023</p>
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
                <img src={cognizant} alt="Cognizant" />
            </div>
        </div>
      </div>

      <div className="experience-item">
      <div className="experience-imgCard">
      <div className="experience-imgHolder">
          <img src={cognizant} alt="Cognizant" />
        </div>
        </div>
        <div className="experience-text">
          <h2>Programmer Analyst Intern</h2>
          <p><strong>Cognizant</strong> • Hyderabad, Telangana, India | Feb 2021 - May 2021</p>
          <p>
            <ul>
            <li>Built a full-stack web app, leading a team of developers.</li>
            <li>Implemented Agile workflows, enhancing productivity.</li>
            <li>Developed React components & REST APIs for smooth user experience.</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-text">
          <h2>Senior Software Development Engineer</h2>
          <p><strong>codingStudio</strong> • Hyderabad, TG, India | Jan 2019 - Jan 2021</p>
          <p>
            <ul>
            <li>Built and deployed real-time apps for thousands of users.</li>
            <li>Organized coding competitions, growing developer engagement.</li>
            <li>Optimized server throughput & app scalability for peak performance.</li>
            </ul>
          </p>
        </div>
        <div className="experience-imgCard">
            <div className="experience-imgHolder">          
                <img src={codingstudio} alt="codingStudio" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;