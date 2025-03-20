import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './ProjectPage.css';
import me from "../images/me/projectimg.svg";
import arrow from "../images/me/arrow.svg";
import { projects } from './Projectlist';
const ProjectsPage = () => {
  return (
    <section className="projectcontainer" id="projects">
        <div className="work">Projects </div>
        <div className="projimgcontainer">
                <div className="project-img">
                    <img src={me} alt="chaitanya"/>
                </div>            
        </div>
        <div className="projectpage-listcontainer">
        {projects.map((pro,i)=>{
            return(
                <div className="projectitem">
                    <div className="projecttype">{pro.type}</div>
                    <div className="projectinto" ><a href={`/project/${i}`}><h1>{pro.title}</h1><img className='arrow' src={arrow}/></a></div>
                </div>

            )
        })}

        </div>
      
    </section>
  )
}

export default ProjectsPage