import React from 'react'
import {Link} from 'react-router-dom';
import './Homepage.css'
import me from '../images/me/chay2.png'

const HomePage=()=> {
  return (
    <div className="container">
      <div className="logo">
        Chay
      </div>
      <div className="projects">
        Projects
      </div>
      <div className="about" >
        About
      </div>
      <div className="myskills">
        My Skills
      </div>
      <div className="contact">
        Contact
      </div>
      <div className="centerbox">
        <div className="info">
          <span className='hi' >Hi, </span>
          <span className='chaitanya'>I'm Chaitanya</span>
          <span className='details' >I am a Frontend Developer. I code and design web pages.</span>
        </div> 
        <div className="imgcontainer">
          <div className="img">
            <img src={me} alt="Chaitanya" />
          </div> 
        </div>
      </div>
    </div>
  )
}

export default HomePage