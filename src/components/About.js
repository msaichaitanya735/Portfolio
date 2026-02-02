import React from 'react'
import './About.css'
import me from '../images/me/chay5.png'
import ParticleComponent from './ParticleComponent'

const About = () => {
  return (
    <div className="containers">
       
        <ParticleComponent theme="light"/>
        <div className="logos">
            <a href="/">Chay</a>
        </div>
        <div className="centerboxs">
            <span>
            I’m an AI, Automation, and Web Developer passionate about building scalable, high-performance web applications.
            <span>Currently, I’m pursuing my Master’s in Computer Science at the University of Central Missouri, deepening my expertise in software development and AI.</span>

            <span>Previously, I worked at Cognizant India for 2 years, where I developed and optimized full-stack applications. I am currently working as an AI Engineer at Haptag, where I build applications, work on prompt engineering, and develop AI models for cybersecurity anomaly detection. I'm actively open to new opportunities.</span>

            I specialize in React, Node.js, and modern web technologies, and I am proficient with AI tools like GPT, Gemini, and LangChain. I enjoy turning complex problems into efficient, elegant, and impactful solutions.
            </span>
        </div>
        
        <div className="imgcontainers">
            <div className="imgs">
                <img src={me} alt='chaitanya'/>
            </div>
        </div>
    </div>
  )
}

export default About