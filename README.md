# SaiChaitanya Muthyala — Portfolio

> Personal portfolio for **Sai Chaitanya Muthyala** — Software Engineer, AI/ML — ML infrastructure, Generative AI, and content safety across cybersecurity and regulated financial environments.

Live site: **[saichaitanyamuthyala.com](https://saichaitanyamuthyala.com)**

---

## About

I'm a Software Engineer with 5+ years developing production systems and 2+ years in ML infrastructure — model deployment, evaluation, optimization, and data processing. I currently build agentic AI systems at **HapTag AI** (cybersecurity). Previously at **Capital One**, where I built ML infrastructure and Generative AI integration on an internal customer-servicing platform serving 500+ authorized servicing associates in a regulated financial environment.

- 🎓 **MS in Computer Science (NLP & Machine Learning)** — University of Central Missouri
- 🏆 **IEEE Xtreme 2021** — All India Rank 15 &nbsp;•&nbsp; **IEEE Xtreme 2020** — Rank 16
- 📍 United States &nbsp;•&nbsp; ✉️ saichaitanyamuthyalas@gmail.com

---

## What this repo is

The source for my personal portfolio — a single-page React app that surfaces my work experience, projects, skills, and contact channels. It's the code behind the site linked above.

### Sections

- **Hero** — headline + summary + resume download
- **About Me** — positioning around ML infrastructure, content safety, and Generative AI
- **Education & Achievements** — degrees, IEEE Xtreme, Smart India Hackathon
- **Professional Experience** — HapTag AI → Capital One → Cognizant (Client: Pearson) → coding.Studio
- **Tech Stack** — grouped by ML Infrastructure / GenAI, Backend, Frontend, Infrastructure
- **Projects** — JobFlow (agentic AI), LifeOS (AI platform), AI-RA (resume automation), and older full-stack builds
- **Contact** — Formspree-backed contact form + social links

---

## Tech Stack

**Frontend**
- React 17, React Router v6
- Material UI (MUI 6) + custom CSS
- `react-tsparticles` for animated backgrounds
- `3d-react-carousal` for the project detail carousel
- GSAP for interactions

**Tooling**
- Create React App (`react-scripts` 5)
- Yarn for package management
- Formspree for the contact form (no backend server needed)

---

## Getting Started

### Prerequisites

- Node.js 16+
- Yarn (or npm)

### Install

```bash
git clone https://github.com/msaichaitanya735/Portfolio.git
cd Portfolio
yarn install
```

### Configure

Create a `.env` file at the project root (see `.env.example`):

```env
REACT_APP_FORMSPREE_URL=https://formspree.io/f/xxxxxxxx
```

Without this, the contact form falls back to a message asking visitors to email directly.

Drop your resume PDF at `public/resume.pdf`. The **Resume** button downloads it as `SaiChaitanya_Resume.pdf`.

### Run

```bash
yarn start          # dev server on http://localhost:3000
yarn build          # production build → build/
yarn test           # interactive test runner
```

---

## Project Structure

```
src/
├── components/
│   ├── HomePage.js          # top-level layout — assembles every section
│   ├── AboutMe.js           # ML infra / content safety / GenAI positioning
│   ├── Education.js         # degrees + IEEE Xtreme / SIH achievements
│   ├── WorkExperince.js     # HapTag → Capital One → Cognizant → coding.Studio
│   ├── Skills.js            # tech stack grid (grouped)
│   ├── skillslist.js        # source of truth for tech icons & groupings
│   ├── ProjectsPage.js      # project cards
│   ├── Projectlist.js       # source of truth for projects (title, desc, tech, screenshots)
│   ├── EachProject.js       # project detail view with carousel + tech icons
│   ├── Contact.js           # Formspree-backed contact form
│   └── ...
├── images/
│   ├── me/                  # personal photos, company logos
│   ├── project/             # project screenshots (grouped per project)
│   └── icons/               # local tech icons (SVG/PNG)
public/
├── resume.pdf               # downloadable resume (add your own)
└── images/icons/            # fallback icons served statically
```

### Where to edit what

| Change | File |
|---|---|
| Add / edit a job | `src/components/WorkExperince.js` |
| Add a project | `src/components/Projectlist.js` (+ screenshots under `src/images/project/<slug>/`) |
| Add / rename a skill | `src/components/skillslist.js` |
| Update the hero / summary | `src/components/HomePage.js`, `AboutMe.js`, `About.js` |
| Update education / achievements | `src/components/Education.js` |
| Contact endpoint | `.env` (`REACT_APP_FORMSPREE_URL`) |

---

## Deployment

Netlify-friendly out of the box — `public/_redirects` handles React Router client-side routes, `Procfile` is present for platforms that need it. Build with `yarn build`, then serve the `build/` directory (Netlify, Vercel, GitHub Pages, S3+CloudFront, etc.).

---

## Highlights

- **Real work, real numbers.** Every experience bullet maps to a system I built — 1K+ events/day agentic pipelines at HapTag AI, 500+ associates served by GenAI + PII masking at Capital One, 50K+ events/hour distributed systems at Cognizant.
- **ML infrastructure focus.** The Skills section is grouped around the same axes I work along day-to-day: LLM APIs and RAG, backend services, frontend, and cloud infrastructure — not a random logo cloud.
- **Fast, responsive, minimal dependencies.** Static build, no server-side rendering, mobile-first responsive layouts across every section.

---

## Connect

- 🌐 [saichaitanyamuthyala.com](https://saichaitanyamuthyala.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/saichaitanyamuthyala)
- 💻 [GitHub](https://github.com/msaichaitanya735)
- ✉️ saichaitanyamuthyalas@gmail.com

---

_If you're a recruiter or engineering lead reading this — I'm open to Software Engineer, AI/ML and Full-Stack AI roles. Reach out via the contact form on the live site, or email directly._
