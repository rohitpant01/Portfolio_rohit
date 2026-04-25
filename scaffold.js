import fs from 'fs';
import path from 'path';

const dirs = [
  'src/components/layout',
  'src/components/sections',
  'src/components/ui',
];

dirs.forEach(dir => fs.mkdirSync(dir, { recursive: true }));

const files = {
  'src/components/ui/Button.jsx': `
export default function Button({ children, href, primary, ...props }) {
  const baseStyle = "px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-block text-center";
  const styles = primary 
    ? "bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg"
    : "bg-white text-text-primary border border-gray-200 hover:bg-gray-50";
  
  if (href) {
    return <a href={href} className={\`\${baseStyle} \${styles}\`} {...props}>{children}</a>;
  }
  return <button className={\`\${baseStyle} \${styles}\`} {...props}>{children}</button>;
}
`,
  'src/components/ui/SkillPill.jsx': `
export default function SkillPill({ children }) {
  return (
    <span className="px-4 py-2 bg-secondary/30 text-primary font-medium text-sm rounded-full shadow-sm">
      {children}
    </span>
  );
}
`,
  'src/components/ui/ProjectCard.jsx': `
export default function ProjectCard({ project }) {
  return (
    <div className="bg-bg-surface p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">The Problem</h4>
        <p className="text-text-secondary text-sm">{project.problem}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">The Solution</h4>
        <p className="text-text-primary text-sm font-medium">{project.solution}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Key Features</h4>
        <ul className="list-disc pl-5 text-sm text-text-secondary space-y-1">
          {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">What I Learned</h4>
        <p className="text-sm text-text-secondary italic">"{project.learned}"</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map((tech, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded text-text-secondary">{tech}</span>
        ))}
      </div>

      <div className="flex gap-4">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline text-sm">View on GitHub &rarr;</a>
      </div>
    </div>
  );
}
`,
  'src/components/layout/Navbar.jsx': `
export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-bg-base/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-bold text-primary tracking-tight">&lt;Rohit/&gt;</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors">Let's Talk</a>
        </div>
      </div>
    </nav>
  );
}
`,
  'src/components/layout/Footer.jsx': `
export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-text-secondary">
      <p>© {new Date().getFullYear()} Rohit Pant. Built with React & Tailwind.</p>
    </footer>
  );
}
`,
  'src/components/sections/Hero.jsx': `
import { portfolioData } from '../../data/portfolioData';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/40 rounded-full blur-[100px] -z-10"></div>
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          {portfolioData.hero.tagline}
        </h1>
        <h2 className="text-xl md:text-3xl text-primary font-medium mb-8">
          {portfolioData.hero.role}
        </h2>
        <p className="text-lg md:text-xl text-text-secondary mb-12 leading-relaxed max-w-2xl mx-auto">
          {portfolioData.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#projects" primary>View My Work</Button>
          <Button href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download PDF Resume</Button>
        </div>
      </div>
    </section>
  );
}
`,
  'src/components/sections/About.jsx': `
import { portfolioData } from '../../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">{portfolioData.about.title}</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group mx-auto md:mx-0 w-full max-w-md">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="bg-gray-200 w-full aspect-square rounded-2xl relative overflow-hidden flex items-center justify-center border-4 border-white shadow-sm">
              <span className="text-text-secondary">Your Photo Here</span>
            </div>
          </div>
          <div>
            {portfolioData.about.paragraphs.map((para, i) => (
              <p key={i} className="text-lg text-text-secondary leading-relaxed mb-6">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  'src/components/sections/Skills.jsx': `
import { portfolioData } from '../../data/portfolioData';
import SkillPill from '../ui/SkillPill';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Technical Arsenal</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b pb-2">Core & Languages</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.core.map((skill, i) => <SkillPill key={i}>{skill}</SkillPill>)}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 border-b pb-2">Frontend & Mobile</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.frontendMobile.map((skill, i) => <SkillPill key={i}>{skill}</SkillPill>)}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 border-b pb-2">AI & Security</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.aiSecurity.map((skill, i) => <SkillPill key={i}>{skill}</SkillPill>)}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 border-b pb-2">Backend & Data</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.backendData.map((skill, i) => <SkillPill key={i}>{skill}</SkillPill>)}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 border-b pb-2">Tools & Concepts</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.toolsConcepts.map((skill, i) => <SkillPill key={i}>{skill}</SkillPill>)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
`,
  'src/components/sections/Projects.jsx': `
import { portfolioData } from '../../data/portfolioData';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Featured Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
`,
  'src/components/sections/Contact.jsx': `
import { portfolioData } from '../../data/portfolioData';
import Button from '../ui/Button';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">{portfolioData.contact.title}</h2>
        <p className="text-lg text-text-secondary mb-10 leading-relaxed">
          {portfolioData.contact.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={\`mailto:\${portfolioData.contact.email}\`} primary>Say Hello</Button>
          <div className="flex gap-4 ml-4">
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  'src/App.jsx': `
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bg-base font-body text-text-primary selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
`
};

for (const [filepath, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(process.cwd(), filepath), content.trim() + '\\n');
}
console.log('Scaffolding complete!');
