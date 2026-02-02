import React from 'react';
import Particles from './ParticleComponent';
import './Skills.css';
import { skillGroups } from './skillslist.js';

const Skills = () => {
  return (
    <section className="skillscontainer" id="skills">
      <Particles theme="dark" />
      <div className="techstack">Tech Stack</div>
      <div className="skills-groups">
        {skillGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="skill-group">
            <h3 className="skill-group-title">{group.title}</h3>
            <div className="skillscenterbox">
              {group.skills.map((skill, i) => (
                <div key={`${groupIndex}-${i}`} className="skill-card" style={{ color: 'white' }}>
                  <div className="skillimage">
                    <img src={skill.image} alt={skill.name} />
                  </div>
                  <div className="skillname">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
