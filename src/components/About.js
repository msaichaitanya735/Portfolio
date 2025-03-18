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
            I’m a Full-Stack Developer passionate about building scalable, high-performance web applications. 
            <span>Currently, I’m pursuing my Master’s in Computer Science at the University of Central Missouri, deepening my expertise in software development and system design.</span>

            <span>Previously, I worked at Cognizant India for 2 years, where I developed and optimized front-end and full-stack applications, collaborated with clients, and ensured seamless digital experiences.</span>

I specialize in React, Node.js, and modern web technologies, crafting fast, interactive websites and intuitive web apps that enhance user engagement. My goal is to turn complex problems into efficient, elegant, and impactful solutions.
                {/* I have graduated from Vignana Bharathi Institute of Technology affiliated to JNTUH with specialization in  Computer Science and Technology. */}
            </span>
 
            <span>
                I enjoy using my skill-set to empower people to accomplish their goals. My development stack is focused on building incredible fast websites and WebApps with delightful interactions.
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