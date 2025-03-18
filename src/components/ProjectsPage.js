import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './ProjectPage.css';
import me from "../images/me/projectimg.svg";
import arrow from "../images/me/arrow.svg";
import { projects } from './Projectlist';
const ProjectsPage = () => {
  return (
    <div className="projectcontainer">
        <div className="work">&#60;WORK /&#62;</div>
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
      
    </div>
  )
}

export default ProjectsPage