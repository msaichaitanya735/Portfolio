import React from 'react'
import './Contact.css'
import me from "../images/me/contactme.svg";

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
        <div className="contacts">

        </div>
    </div>    
  )
}

export default Contact