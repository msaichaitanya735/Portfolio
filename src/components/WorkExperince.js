import React from "react";
import "./WorkExperience.css";
import cognizant from "../images/me/Cognizant-Logo.jpg";
import codingstudio from "../images/me/codingStudios.jpg";
import haptag from "../images/me/haptag_logo.png";
import capitalOneLogo from "../images/me/capitalone_logo.png";


function WorkExperience() {
  return (
    <div className="experience-container">
      {/* Title Section */}
      <div className="experience-title">
        <h1>Professional <span>EXPERIENCE</span></h1>
        <p>Bringing expertise in AI, full-stack development, and data visualization.</p>
      </div>

      {/* HapTag AI */}
      <div className="experience-item">
        <div className="experience-text">
          <h2>AI Engineer</h2>
          <p><strong>HapTag AI</strong> (Cybersecurity Startup) – Remote, USA | Jun 2025 - Present</p>
          <p>
            <ul>
              <li>Built end-to-end AI-powered web application (React/TypeScript frontend + Python/FastAPI backend) as one of 3 engineers; rapidly prototyped features going from 0 to 1 in weekly sprints.</li>
              <li>Created interactive dashboards and data visualizations using D3.js force-directed network graphs, Recharts time-series charts, and Plotly-style analytics views with virtualized tables (50K+ entries).</li>
              <li>Built LLM applications with prompt engineering, MCP server development, and LangChain/LangGraph agentic workflows: 3 AI agents with tool/function calling processing 1K+ events/day.</li>
              <li>Designed robust APIs: FastAPI inference gateway with async orchestration, connection pooling, SSE streaming; load-tested to 50 concurrent connections at p99 under 3s.</li>
              <li>Prototyped evaluation framework (500-event dataset, 7 scoring dimensions, LLM-as-judge at 87% human agreement) and automated in CI/CD.</li>
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
      <div className="experience-item">
        <div className="experience-text">
          <h2>Software Engineer</h2>
          <p><strong>Capital One</strong> – United States | Jan 2024 - Jun 2025</p>
          <p>
            <ul>
              <li>Built internal LLM-powered documentation search tool using OpenAI API and Python: ingested 2K+ internal wiki pages with semantic search, served through a React/TypeScript interface; reduced onboarding lookup time from 15 minutes to under 30 seconds.</li>
              <li>Developed interactive data visualization platform (Tableau, Power BI) for institutional reporting: real-time enrollment trend dashboards, cohort comparison heatmaps, and drill-down views serving 500+ institutions.</li>
              <li>Prototyped LangChain/CrewAI-based workflow for automated assessment summarization: chained prompt engineering with retrieval from PostgreSQL-backed course metadata.</li>
            </ul>
          </p>
        </div>
        <div className="experience-imgCard">
            <div className="experience-imgHolder">
                <img src={capitalOneLogo} alt="Capital One" />
            </div>
        </div>
      </div>

      {/* Cognizant */}
      <div className="experience-item">
        <div className="experience-text">
          <h2>Programmer Analyst (Full-Stack)</h2>
          <p><strong>Cognizant Technology Solutions</strong> (Client: Pearson) – Hyderabad, India | Jan 2021 - Jun 2023</p>
          <p>
            <ul>
              <li>Built full-stack web applications (React/TypeScript + Spring Boot APIs) serving 200K+ students; created data visualization dashboards adopted by 120+ institutions in 3 months.</li>
              <li>Designed API-driven event architecture (12 microservices, Spring Boot + Kafka) with systems integration across bounded contexts; 3x peak load at 99.7% uptime handling 50K+ events/hour.</li>
              <li>Architected serverless Python data pipeline on AWS (Lambda, SQS, Glue, Athena) for 500+ institutions; handled 12x traffic spike with zero data loss.</li>
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
      <div className="experience-item">
        <div className="experience-text">
          <h2>Software Development Engineer</h2>
          <p><strong>coding.Studio();</strong> – Hyderabad, India | Jan 2020 - Jan 2021</p>
          <p>
            <ul>
              <li>Delivered full-stack features in Python and Java with React components, REST API contracts, and PostgreSQL-backed workflows; rapidly prototyped internal tools and shipped iteratively in a small team.</li>
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