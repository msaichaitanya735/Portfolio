import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from '3d-react-carousal';
import { projects } from './Projectlist';
import './EachProject.css';

// A map of technology names to their CDN icon URLs
const techIconUrls = {
    'Google Sheets': 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg',
    'Apps Script': 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg',
    'n8n': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/N8n_logo.png',
    'Docker': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
    'OpenAI': 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    'Regex': 'https://upload.wikimedia.org/wikipedia/commons/d/da/Pictogram_voting_regex.svg', // Placeholder, specific Regex logo is uncommon
    'LaTeX': '/images/icons/latex.svg',
    'Overleaf': 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Overleaf_Logo.svg',
    'Python': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    'FastAPI': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg',
    'TypeScript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    'LangChain': '/images/icons/langchain.png',
    'D3.js': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg',
    'PostgreSQL': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
    'Redis': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg',
    'pgvector': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
    'Playwright': 'https://playwright.dev/img/playwright-logo.svg',
    'Notion API': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    'Claude Agent SDK': '/images/icons/claude-agent-sdk.svg',
    'github': '/images/icons/github.svg', // Keep local icons as fallback
    'react': '/images/icons/react.svg',
    'nodejs': '/images/icons/nodejs.svg',
    'mongodb': '/images/icons/mongodb.svg',
    'css': '/images/icons/css.svg',
    'html': '/images/icons/html5.svg',
    'expressjs': '/images/icons/expressjs.svg',
    'redux': '/images/icons/redux.svg',
    'netlify': '/images/icons/netlify.svg'
};


const EachProject = () => {
  let { id } = useParams();
  const [data] = useState(projects[id]);
  
  const slides = data.screenshot && data.screenshot.length > 0
    ? data.screenshot.map((x, i) => {
        return (<img src={x} key={i} alt={`screenshot ${i+1}`} />);
      })
    : [];

  const getIconSrc = (techName) => {
    // Check if a mapped icon path exists for the tech name (case-insensitive)
    const key = Object.keys(techIconUrls).find(k => k.toLowerCase() === techName.toLowerCase());
    if (key) {
      return techIconUrls[key];
    }
    // Otherwise, fall back to a local SVG named after the tech
    return `/images/icons/${techName}.svg`;
  };

  return (
    <div className="eachprojectcontainer">
      <div className="logo"><a href="/">Chay</a></div>
      {slides.length > 0 ? (
        <div className="carousel">
          <Carousel slides={slides} />
        </div>
      ) : (
        <div className="project-hero">
          <div className="project-hero-glow" aria-hidden="true"></div>
          <div className="project-hero-inner">
            <span className="project-hero-type">{data.type}</span>
            <h1 className="project-hero-title">{data.title}</h1>
            <div className="project-hero-chips">
              {data.tech.slice(0, 5).map((t, i) => (
                <span key={i} className="project-hero-chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
      {slides.length > 0 && <div className="proTitle">{data.title}</div>}
      <div className="projectdescription">
        {data.desc}
      </div>
      <div className='prodetails'>
        <div className='prosourcetitle'>
          Source Code
          <div className="sourcecodelink">
            <a href={data.sourcecode} target="_blank" rel="noopener noreferrer">{data.sourcecode}</a>
          </div>
        </div>
      </div>
      <div className="tech">
        Tech Used
      </div>
      <div className="probox">
        {data.tech.map((tec, i) => {
          return (
            <div className="Hi" style={{ color: 'white' }} key={i}>
              <div className="skillimage">
                <img src={getIconSrc(tec)} alt={tec} />
              </div>
              <div className="skillname">{tec}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EachProject;