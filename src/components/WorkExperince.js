import React from "react";
import "./WorkExperience.css";
import cognizant from "../images/me/Cognizant-Logo.jpg";
import codingstudio from "../images/me/codingStudios.jpg";
import haptag from "../images/me/haptag_logo.png";
import capitalone from "../images/me/capitalone_logo.jpg";


function WorkExperience() {
  return (
    <div className="experience-container">
      {/* Title Section */}
      <div className="experience-title">
        <h1>Professional <span>EXPERIENCE</span></h1>
        <p>Software Engineer, AI/ML — ML infrastructure, Generative AI, and content safety across cybersecurity and regulated financial environments.</p>
      </div>

      {/* HapTag AI */}
      <div className="experience-item">
        <div className="experience-text">
          <h2>Software Engineer, AI/ML</h2>
          <p><strong>HapTag AI</strong> (Cybersecurity Startup)</p>
          <p><em>Python, FastAPI, OpenAI, Claude, Gemini, LangChain, LangGraph, pgvector, Docker, AWS, CI/CD</em></p>
          <p>
            <ul>
              <li>Built ML infrastructure for 3 production AI systems: model deployment, evaluation, optimization, and data processing pipelines; implemented Generative AI tools processing 1K+ events/day at 94% validity with agentic AI workflows.</li>
              <li>Implemented AI content safety and security controls: input validation, output filtering, user harm mitigation, and secure coding practices in the cybersecurity domain; applied application security patterns for web-facing AI services.</li>
              <li>Prototyped, evaluated, and productized AI features: NLP-powered information retrieval, agentic product capabilities; collaborated with peers through design and code reviews ensuring best practices in ML development.</li>
              <li>Triaged and debugged production AI system issues across model behavior, data pipeline, and service operations; tracked and resolved with systematic debugging and monitoring.</li>
            </ul>
          </p>
        </div>
        <div className="experience-imgCard">
            <div className="experience-imgHolder">
                <img src={haptag} alt="HapTag AI" />
            </div>
        </div>
      </div>

      {/* Capital One */}
      <div className="experience-item reverse">
        <div className="experience-text">
          <h2>Software Engineer</h2>
          <p><strong>Capital One</strong> (Financial Services)</p>
          <p><em>Python, FastAPI, TypeScript, Node.js, LangChain, pgvector, PostgreSQL, Azure, AWS, Docker, CI/CD</em></p>
          <p>
            <ul>
              <li>Built ML infrastructure for a production AI application: model deployment, evaluation, and optimization with a data processing pipeline; Generative AI integration on the internal customer-servicing platform serving 500+ authorized servicing associates across operations teams.</li>
              <li>Implemented application security patterns in a regulated financial environment: web application security, input validation, access controls, PII masking, and data privacy compliance for secure handling of sensitive financial data.</li>
              <li>Designed structured reasoning traces and provenance citations to satisfy Model Risk Management explainability requirements; human-in-the-loop sign-off was the architecture, not an add-on.</li>
              <li>Collaborated through design and code reviews across AI, platform, and data engineering boundaries; contributed to large-scale system design and distributed computing patterns (LangChain orchestration, pgvector retrieval, FastAPI services).</li>
            </ul>
          </p>
        </div>
        <div className="experience-imgCard">
            <div className="experience-imgHolder">
                <img src={capitalone} alt="Capital One" />
            </div>
        </div>
      </div>

      {/* Cognizant */}
      <div className="experience-item">
        <div className="experience-text">
          <h2>Software Engineer</h2>
          <p><strong>Cognizant Technology Solutions</strong> (Client: Pearson)</p>
          <p><em>Python, Java, Spring Boot, TypeScript, PostgreSQL, Kafka, AWS Lambda, SQS, S3, Docker, Kubernetes</em></p>
          <p>
            <ul>
              <li>Developed large-scale distributed systems handling information at massive scale: 12 microservices with event-driven architecture processing 50K+ events/hour at 99.7% uptime serving 200K+ users.</li>
              <li>Built data processing and ML-ready infrastructure on AWS (Lambda, SQS, S3, Glue pipelines); optimized data structures and algorithms for performance at scale across 120+ institutions.</li>
              <li>Contributed to React/TypeScript applications for Pearson's education platform; improved responsiveness through state optimization, lazy-loaded routes, and reduced re-renders.</li>
            </ul>
          </p>
        </div>
        <div className="experience-imgCard">
            <div className="experience-imgHolder">
                <img src={cognizant} alt="Cognizant" />
            </div>
        </div>
      </div>

      {/* coding.Studio */}
      <div className="experience-item reverse">
        <div className="experience-text">
          <h2>Software Development Engineer</h2>
          <p><strong>coding.Studio();</strong></p>
          <p><em>Python, Java, TypeScript, PostgreSQL, Docker, CI/CD</em></p>
          <p>
            <ul>
              <li>Developed production software with Python and Java: REST APIs, data structures, algorithms, and secure coding practices.</li>
              <li>Collaborated through code reviews and design discussions: ensured best practices in style, testability, and efficiency while shipping iteratively in a small team.</li>
            </ul>
          </p>
        </div>
        <div className="experience-imgCard">
            <div className="experience-imgHolder">
                <img src={codingstudio} alt="codingStudio" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
