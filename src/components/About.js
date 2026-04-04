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
            Software Engineer with 5+ years of full-stack experience building web applications with React/TypeScript and Python.
            <span>I hold a Master’s in Computer Science (NLP & ML) from the University of Central Missouri.</span>

            <span>Currently an AI Engineer at HapTag AI, previously a Software Engineer at Capital One, and a Programmer Analyst at Cognizant (Client: Pearson). I build end-to-end AI-powered applications, design robust APIs, and create interactive data visualizations. I’m actively open to new opportunities.</span>

            I specialize in React/TypeScript, Python/FastAPI, and AI technologies including LLM APIs, LangChain/LangGraph, MCP frameworks, and data visualization with D3.js, Plotly, and Recharts.
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