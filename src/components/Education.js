import React from "react";
import "./Education.css";
import UCMLogo from "../images/me/ucm-acad-v3.jpg"
import VBITLogo from "../images/me/vbit.png"

function Education() {
  return (
    <div className="education-container">
      {/* Title Section */}
      <div className="education-title">
        <h1>EDUCATION <span>BACKGROUND</span></h1>
        <p>Academic qualifications and learning journey.</p>
      </div>

      {/* Education Items */}
      <div className="education-item">
        <div className="education-text">
          <h2>Master's in Computer Science</h2>
          <p>University of Central Missouri | 2023 - 2025</p>
          <p>Specializing in **Full-Stack Development, Cloud Computing, and AI**.</p>
        </div>
        {/* <div className="education-img">
        <img src={UCMLogo} alt="Master's Degree"/>
        </div> */}
        <div className="education-imgCard">
            <div className="educaiton-imgs">
            <img src={UCMLogo} alt="Master's Degree"/>
            </div>
        </div>
      </div>

      <div className="education-item reverse">
        {/* <div className="education-img">
          <img src={VBITLogo} alt="Bachelor's Degree" />
        </div> */}
        <div className="education-text">
          <h2>Bachelor's in Electronics & CS</h2>
          <p>Jawaharlal Nehru Technological University | 2017 - 2021</p>
          <p>Gained strong foundations in **Data Structures, OOPS, and Web Technologies**.</p>
        </div>
        <div className="education-imgCard">
            <div className="educaiton-imgs">
            <img src={VBITLogo} alt="Master's Degree"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
