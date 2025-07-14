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
        <h2>Passionate and dedicated full-stack developer</h2>
        <p>
                   With expertise in <span> React, Node.js, Spring Boot, and AI technologies like GPT and Gemini</span>, I create
          seamless and high-performance applications. My focus is on building
          scalable solutions, automating complex processes, and enhancing user experiences.
        </p>
      </div>

      {/* Feature Section */}
      <div className="about-features">
        <div className="feature-box">
          <span className="feature-icon">⚡</span>
          <h3>Fast & Efficient</h3>
          <p>Developing optimized code to ensure high-speed performance.</p>
        </div>
        <div className="feature-box">
          <span className="feature-icon">🌎</span>
          <h3>Full-Stack Development</h3>
          <p>Expertise in both frontend and backend technologies.</p>
        </div>
        <div className="feature-box">
          <span className="feature-icon">🚀</span>
          <h3>Scalable & Secure</h3>
          <p>Building robust applications with scalability in mind.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
