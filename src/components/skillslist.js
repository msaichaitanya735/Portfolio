// Local imports
import html from '../images/icons/html5.svg';
import css from '../images/icons/css.svg';
import react from '../images/icons/react.svg';
import javascript from '../images/icons/javascript.svg';
import nodejs from '../images/icons/nodejs.svg';
import redux from '../images/icons/redux.svg';
import expressjs from '../images/icons/expressjs.svg';
import git from '../images/icons/github.svg';
import getbootstrap from '../images/icons/getbootstrap.svg';
import python from '../images/icons/python.png';
import java from '../images/icons/Java.png';
import springBoot from '../images/icons/Spring.png';
import aws from '../images/icons/Amazon.png';
import tailwind from '../images/icons/TailwindCss.png';
import docker from '../images/icons/Docker.png';
import fastapi from '../images/icons/fastapi.png';
import langchain from '../images/icons/langchain.png';
import gemini from '../images/icons/gemini.png';
import pgvector from '../images/icons/pgvector.png';
import openai from '../images/icons/OpenAI.png';

// External icon URLs (wikimedia, devicons - known working)
const gpt_icon = 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg';
const typescript_icon = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg';
const nextjs_icon = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg';
const postgresql_icon = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg';
const aws_lambda_icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/2560px-Amazon_Lambda_architecture_logo.svg.png';
const aws_s3_icon = 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon-S3-Logo.svg';

// RAG: unique icon (document + magnifying glass = retrieval) — not LangChain
const rag_icon = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="#a9ff5c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M28 8H12a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V20"/><path d="M32 4v8h8"/><circle cx="22" cy="26" r="6"/><path d="M26 30l8 8"/></svg>'
);

// Eval / Testing: checkmark + beaker (testing)
const eval_testing_icon = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 28l6 6 12-14"/><path d="M24 8v8l6 4 6-4-6-4-6 4V8z"/><path d="M18 20l-4 2v12h20v-12l-4-2"/></svg>'
);

// Structured Outputs: curly braces (JSON/code)
const structured_outputs_icon = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8c-4 4-4 12 0 16s12 4 16 0"/><path d="M32 8c4 4 4 12 0 16s-12 4-16 0"/><path d="M18 24h12"/></svg>'
);

// REST: API/link icon
const rest_icon = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 22l6-6 6 6"/><path d="M24 16v16"/><path d="M14 30H8a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4h8"/><path d="M34 30h6a4 4 0 0 0 4-4V14a4 4 0 0 0-4-4h-8"/></svg>'
);

// SSE / Streaming: signal waves (streaming data)
const sse_icon = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 24h6l4-8 4 16 4-8 4 8h6"/><path d="M4 32h6l4-4 4 8 4-8 4 4h6"/></svg>'
);


// Grouped skills: LLM/AI, Backend, Frontend, Cloud/DevOps
export const skillGroups = [
  {
    title: 'LLM / AI Systems',
    skills: [
      { name: 'RAG', image: rag_icon },
      { name: 'pgvector', image: pgvector },
      { name: 'Embeddings', image: openai },
      { name: 'Prompt Eng.', image: gpt_icon },
      { name: 'Eval / Testing', image: eval_testing_icon },
      { name: 'Structured Outputs', image: structured_outputs_icon },
      { name: 'GPT', image: gpt_icon },
      { name: 'Gemini', image: gemini },
      { name: 'LangChain', image: langchain },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', image: python },
      { name: 'FastAPI', image: fastapi },
      { name: 'Node.js', image: nodejs },
      { name: 'PostgreSQL', image: postgresql_icon },
      { name: 'REST', image: rest_icon },
      { name: 'SSE / Streaming', image: sse_icon },
      { name: 'Express.js', image: expressjs },
      { name: 'Java', image: java },
      { name: 'Spring Boot', image: springBoot },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', image: react },
      { name: 'Next.js', image: nextjs_icon },
      { name: 'TypeScript', image: typescript_icon },
      { name: 'Tailwind CSS', image: tailwind },
      { name: 'HTML', image: html },
      { name: 'CSS', image: css },
      { name: 'JavaScript', image: javascript },
      { name: 'Redux', image: redux },
      { name: 'Bootstrap', image: getbootstrap },
    ],
  },
  {
    title: 'Cloud / DevOps',
    skills: [
      { name: 'AWS', image: aws },
      { name: 'Lambda', image: aws_lambda_icon },
      { name: 'S3', image: aws_s3_icon },
      { name: 'Docker', image: docker },
      { name: 'Git', image: git },
    ],
  },
];

// Flat list (for backward compatibility if needed)
export const skill = skillGroups.flatMap((g) => g.skills);
