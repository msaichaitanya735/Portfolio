import pms1 from '../images/project/privatemailngsystem/1.png';
import pms2 from '../images/project/privatemailngsystem/2.png';
import pms3 from '../images/project/privatemailngsystem/3.png';
import pms4 from '../images/project/privatemailngsystem/4.png';
import pms5 from '../images/project/privatemailngsystem/5.png';
import pms6 from '../images/project/privatemailngsystem/6.png';
import itg1 from '../images/project/instantticketgenerator/1.png';
import itg2 from '../images/project/instantticketgenerator/2.png';
import itg3 from '../images/project/instantticketgenerator/3.png';
import itg4 from '../images/project/instantticketgenerator/4.png';
import dzo1 from '../images/project/dunzo/1.png';
import dzo2 from '../images/project/dunzo/2.png';
import dzo3 from '../images/project/dunzo/3.png';
import dzo4 from '../images/project/dunzo/4.png';
import dzo5 from '../images/project/dunzo/5.png';
import dzo6 from '../images/project/dunzo/6.png';
import dzo7 from '../images/project/dunzo/7.png';
import dzo8 from '../images/project/dunzo/8.png';
import prf1 from '../images/project/portfolio/1.png';
import prf2 from '../images/project/portfolio/2.png';
import prf3 from '../images/project/portfolio/3.png';
import prf4 from '../images/project/portfolio/4.png';
import prf5 from '../images/project/portfolio/5.png';
import prf6 from '../images/project/portfolio/6.png';
import ra1 from '../images/project/resumeautomation/resumebuilder.png';
import ra2 from '../images/project/resumeautomation/coverbuilder.png';
import ra3 from '../images/project/resumeautomation/docker.png';
import ra4 from '../images/project/resumeautomation/google-apps-script.png';
import ra5 from '../images/project/resumeautomation/Sheet.png';

export const projects = [
    {
        title : "Private Mailing System",
        desc: "Private Maling System allows a user to transfer encrypted data to other user without any 3rd party mailing services.",
        type: "WebApp",
        sourcecode: "https://github.com/msaichaitanya735/Private",
        tech: ['html','css','react','redux','nodejs','mongodb'],
        screenshot: [pms1,
                    pms2,
                    pms3,
                    pms4,
                    pms5,
                    pms6]
    },
    {
        title: "Clone of Dunzo",
        desc: "It is copy of Dunzo App with all the functionality and UI components. I worked on it as a part of Internship with Cogizant India",
        type: "WebApp",
        sourcecode: "https://github.com/msaichaitanya735/Dunzo",
        tech: ['html','css','react','redux','nodejs','mongodb','expressjs','github'],
        screenshot: [dzo1,
                     dzo2,
                     dzo3,
                     dzo4,
                     dzo5,
                     dzo6,
                     dzo7,
                     dzo8,]
    },
    {
        title: "Instant Ticket Generator",
        desc: "ITG allows passengers from local buses to board the bus and navigate to app using barcode. They can select their desired destination and pay according to the distance using payment gateway in the app.",
        type: "WebApp",
        sourcecode: "https://github.com/msaichaitanya735/ITG",
        tech: ['html','css','react','redux','nodejs','mongodb','expressjs','github'],
        screenshot:[itg1,itg2,itg3,itg4]    
    },
    {
        title: "Portfolio",
        desc: "This is my personal website breifing me, which I designed with an attractive UI designs.",
        type: "WebApp",
        sourcecode: "https://github.com/msaichaitanya735/Portfolio",
        tech: ['html','css','react','redux','nodejs','mongodb','expressjs','github','netlify'],
        screenshot: [prf1,prf2,prf3,prf4,prf5,prf6]
    },
        {
        title : "AI-RA",
        desc: "An AI-powered Resume Automation and Job Tracker built to simplify and optimize the job application process. It accepts a job description, extracts keywords using GPT-4, generates a LaTeX-based ATS-optimized resume and tailored cover letter, and tracks application status.",
        type: "AI Automation",
        sourcecode: "https://lnkd.in/g8yZWR2H",
        tech: ['Google Sheets', 'Apps Script', 'n8n', 'Docker', 'OpenAI', 'Regex', 'LaTeX', 'Overleaf'],
        screenshot: [ra1,ra2,ra3,ra4,ra5] // Replace with actual screenshot variable names or URLs
    },
    
]
