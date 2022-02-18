import React, { useEffect, useRef } from 'react'
import './Homepage.css'
import me from '../images/me/chay2.png'

const HomePage=({timeline, ease, easeio})=> {
  let fireimg = useRef(null)
  let first = useRef(null)
  let sec = useRef(null)
  let third = useRef(null)
  let border =useRef(null)
  let about = useRef(null)
  let project = useRef(null)
  let skills = useRef(null)
  let contact = useRef(null)
  let container =useRef(null)
  useEffect(() => {
    timeline.from([ container, border ], 1 ,{
    opacity: 0,
    x: "30%",
    width: "0%",
    })
    timeline.from([ about, project, skills, contact], .6 ,{
    opacity: 0,
    })
    // timeline.from([ border], .7 ,{
    // opacity: 0,
    // width: "0%",
    // })  
    timeline.from([ first, sec, third], .7 ,{
    opacity: 0,
    x: "-20%",
    stagger: {
        amount: .9
    },
    })
    timeline.from([fireimg], .9, {
      opacity: 0,
      x: '200'
    });
    },[ ])
  return (
    <div className="container" ref ={el => container = el}>
      <div className="logo">
        Chay
      </div>
      <div className="projects" >
        <a href='/projects' ref ={el => project = el}>Projects</a>
      </div>
      <div className="about" >
        <a href='/about' ref ={el => about = el}>About</a>
      </div>
      <div className="myskills" >
        <a href='/skills' ref ={el => skills = el}>My Skills</a>
      </div>
      <div className="contact">
        <a href='/contact' ref ={el => contact = el}>Contact</a>
      </div>
      <div className="centerbox" ref ={el => border = el}>
        <div className="info">
          <span className='hi' ref ={el => first = el}>Hi, </span>
          <span className='chaitanya' ref ={el => sec = el}>I'm Chaitanya</span>
          <span className='details' ref ={el => third = el}>I am a Frontend Developer. I code and design web pages.</span>
        </div> 
        <div className="imgcontainer">
          <div className="img" ref ={el => fireimg = el}>
            <img src={me} alt="Chaitanya" />
          </div> 
        </div>
      </div>
    </div>
  )
}

export default HomePage