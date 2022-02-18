import React from 'react'
import './About.css'
import me from '../images/me/chay5.png'
// import Particles from "react-tsparticles";
import ParticleComponent from './ParticleComponent'

const About = () => {
  return (
    <div className="containers">
        <div className="logo" style={{color:'black'}}>
        Chay
        </div>
        <ParticleComponent/>

        <div className="centerboxs">
            <span>
                I am a full-stack developer from Hyderabad, India.
                I have graduated from Vignana Bharathi Institute of Technology affiliated to JNTUH with specialization in  Computer Science and Technology.
            </span>
            <span>
                I have an year of working experience from Cognizant India.
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