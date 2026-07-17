import React from "react";
import "./Education.css";
import UCMLogo from "../images/me/ucm-acad-v3.jpg"
import VBITLogo from "../images/me/vbit.png"

function Education() {
  return (
    <div className="education-container">
      {/* Title Section */}
      <div className="education-title">
        <h1>EDUCATION <span>&amp; ACHIEVEMENTS</span></h1>
        <p>Academic qualifications and competitive programming honors.</p>
      </div>

      {/* Education Items */}
      <div className="education-item">
        <div className="education-text">
          <h2>MS in Computer Science (NLP &amp; Machine Learning)</h2>
          <p>University of Central Missouri | Aug 2023 - May 2025</p>
          <p>Specialized in <strong>Natural Language Processing and Machine Learning</strong>.</p>
          <ul style={{ color: "#ccc", marginTop: "10px", lineHeight: "1.6" }}>
            <li><strong>IEEE Xtreme 2021:</strong> All India Rank 15 (data structures &amp; algorithms competition)</li>
            <li><strong>IEEE Xtreme 2020:</strong> All India Rank 16</li>
            <li><strong>Smart India Hackathon 2019:</strong> Winner (out of 50K+ teams)</li>
          </ul>
        </div>
        <div className="education-imgCard">
            <div className="educaiton-imgs">
            <img src={UCMLogo} alt="University of Central Missouri"/>
            </div>
        </div>
      </div>

      <div className="education-item reverse">
        <div className="education-text">
          <h2>Bachelor of Technology, Computer Science</h2>
          <p>Vignana Bharathi Institute of Technology | 2017 - 2021</p>
          <p>Strong foundations in <strong>Data Structures, Algorithms, OOP, and Web Technologies</strong>.</p>
        </div>
        <div className="education-imgCard">
            <div className="educaiton-imgs">
            <img src={VBITLogo} alt="Vignana Bharathi Institute of Technology"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
