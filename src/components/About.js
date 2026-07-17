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
            Software Engineer, AI/ML with 5+ years developing production systems and 2+ years in ML infrastructure — model deployment, evaluation, optimization, and data processing.
            <span>I hold a Master’s in Computer Science (NLP &amp; ML) from the University of Central Missouri.</span>

            <span>Currently at HapTag AI (cybersecurity) building agentic AI workflows and content-safety controls. Previously at Capital One (Jan 2024 – Jun 2025), where I built ML infrastructure and Generative AI integration in a regulated financial environment. Before that, distributed systems at Cognizant (Client: Pearson).</span>

            I specialize in Python/FastAPI, LLM APIs (OpenAI, Claude, Gemini), LangChain/LangGraph, RAG on pgvector, application security, and large-scale system design. IEEE Xtreme 2021 All India Rank 15.
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