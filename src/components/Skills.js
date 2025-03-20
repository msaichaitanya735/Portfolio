import React from 'react'
import Particles from './ParticleComponent'
import './Skills.css';
import {skill} from './skillslist.js'

const Skills = () => {
  return (
    <section className="skillscontainer" id="skills">
        <Particles theme="dark"/>
        <div className="techstack">TechStack</div>
        <div className="skillscenterbox">
            {
              skill.map((skill,i)=>{
                return(
                  <div className="Hi" style={{color:'white'}}>
                    <div className="skillimage"><img src={skill.image} alt={skill.name}/></div>
                    <div className="skillname">{skill.name}</div>
                  </div>
                )
              })
            }
        </div>
    </section>
  )
}

export default Skills