import React from "react";
import "./AboutMe.css";

// import img1 from "../images/custom1.png";  // Replace with actual image paths
// import img2 from "../images/custom2.png";
// import img3 from "../images/custom3.png";
// import img4 from "../images/custom4.png";

function AboutMe() {
  return (
    <section className="about-container" id="about">
      {/* Title Section */}
      <div className="about-title">
        <h1>ABOUT <span>ME</span> </h1>
        <p>Learn more about my journey and skills in development.</p>
      </div>


      {/* Description Section */}
      <div className="about-description">
        <h2>Software Engineer, AI/ML — ML Infrastructure &amp; Content Safety</h2>
        <p>
          I build production ML infrastructure and Generative AI systems with a focus on <span>model deployment, evaluation, optimization, and data processing</span>. My work spans <span>LLM APIs (OpenAI, Claude, Gemini), RAG on pgvector, agentic workflows, and application security</span> — from cybersecurity at HapTag AI to a regulated financial environment at Capital One. MS in Computer Science (NLP &amp; Machine Learning), University of Central Missouri.
        </p>
      </div>

      {/* Feature Section */}
      <div className="about-features">
        <div className="feature-box">
          <span className="feature-icon">⚡</span>
          <h3>ML Infrastructure</h3>
          <p>Model deployment, evaluation, optimization, and data processing pipelines for production AI systems.</p>
        </div>
        <div className="feature-box">
          <span className="feature-icon">🛡️</span>
          <h3>AI Content Safety</h3>
          <p>Input validation, output filtering, user harm mitigation, and application security patterns for AI services.</p>
        </div>
        <div className="feature-box">
          <span className="feature-icon">🧠</span>
          <h3>Generative AI &amp; NLP</h3>
          <p>Agentic AI products, RAG retrieval, prompt engineering, structured outputs, and evaluation harnesses.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
