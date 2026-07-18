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
              <li>Founding-team engineer (5 of us). Built the guts of three production AI systems end-to-end — model deployment, eval loops, and the data pipelines that keep them fed. Shipped agentic workflows chewing through 1K+ security events a day at 94% validity.</li>
              <li>Owned AI content safety in a cybersecurity domain — input validation, output filtering, harm mitigation. You don't get to hand-wave the edge cases here; every prompt is one bad response away from a real problem.</li>
              <li>Prototyped a lot, killed most of it, productized what stuck. NLP-powered retrieval, agentic features, and the odd Chrome-extension experiment. Design and code reviews with peers caught the sharp corners early.</li>
              <li>When production broke, I lived in the traces — pulled apart model behavior, pipeline, and service ops until I found the actual bug, not the plausible one.</li>
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
              <li>Built ML infrastructure for an internal customer-servicing platform used by 500+ authorized servicing associates. Model deployment, eval harnesses, and the data pipeline feeding it — the unglamorous plumbing that decides whether GenAI is actually usable inside a bank.</li>
              <li>In regulated environments, security is architecture, not an afterthought. PII masking sat between internal data and the LLM endpoint; every design review passed through the security team before compliance even saw it.</li>
              <li>To satisfy Model Risk Management I built structured reasoning traces and provenance citations into the pipeline — every claim the model made traced back to a document. Human-in-the-loop wasn't tacked on; it was the design.</li>
              <li>Owned the AI workflow layer end-to-end. Design reviews happened at the seams with the platform and data-engineering teams — LangChain orchestration, pgvector retrieval, FastAPI in the middle.</li>
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
              <li>Distributed systems at Pearson-scale: 12 microservices on an event-driven backbone, 50K+ events/hour, 99.7% uptime for 200K+ students who had exams to take. Downtime here isn't a metric — it's someone's grade.</li>
              <li>Built the AWS data plumbing (Lambda, SQS, S3, Glue) that fed analytics across 120+ institutions. When traffic jumped 12x during peak season, nothing dropped.</li>
              <li>Also lived in the React/TypeScript layer — state cleanup, lazy routes, killing off re-renders on pages that kept getting slower with every feature added.</li>
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
              <li>Full-stack in Python and Java: REST APIs, real algorithms, secure defaults. Small team, so you owned things end-to-end — no throwing it over the wall.</li>
              <li>Shipped iteratively; code reviews were less "process" and more "please catch this before I regret it." Great place to fail early and cheaply.</li>
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
