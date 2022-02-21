import React from 'react'
import './Contact.css'
import me from "../images/me/contactme.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Contact = () => {
  return (
    <div className="contactcontainer">
        <div className="logo"><a href="/" style={{color:'black'}}>Chay</a></div>
        <div className="contacts">&#60;CONTACT /&#62;</div>
        <div className="contactimgcontainer">
                <div className="img">
                    <img src={me} alt="chaitanya"/>
                </div>            
        </div>
        <div className="discuss">Let's Discuss</div>
        <div className="links">
          <div className="link">
            <FontAwesomeIcon icon="fa-brands fa-github" />
            <span><a href="https://github.com/msaichaitanya735" style={{color:'black'}}>GitHub</a></span>
          </div>
          <div className="link">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            <span><a href='https://www.linkedin.com/in/saichaitanya-muthyala-3204a71a0/' style={{color:'black'}}>LinkedIn <i class="fab fa-linkedin" style={{color:"black"}}></i></a></span>
          </div>
          <div className="link">  
            <span>Mail <i class="fa-solid fa-envelope" style={{color:"black"}}></i></span>
            
          </div>
        
        </div>
    </div>    
  )
}

export default Contact