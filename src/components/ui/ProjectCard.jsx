import { ExternalLink, Code } from 'lucide-react';

export default function ProjectCard({ project }) {
  const isFlagship = project.isFlagship;
  
  return (
    <div className={`relative overflow-hidden rounded-[20px] p-6 md:p-10 transition-all duration-300 border border-border-light group ${
      isFlagship ? 'bg-secondary' : 'bg-bg-base hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(26,138,114,0.06)]'
    }`}>
      
      {/* Top accent line animation */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 ${
        isFlagship ? 'bg-primary scale-x-100' : 'bg-primary'
      }`}></div>

      <span className="absolute right-6 top-6 md:right-10 md:top-8 font-display text-4xl md:text-5xl font-semibold text-border-light leading-none pointer-events-none opacity-50 md:opacity-100">
        {project.id}
      </span>

      <div className="flex flex-col h-full relative z-10">
        {isFlagship && (
          <div className="mb-4">
            <span className="inline-flex bg-primary text-white text-[0.7rem] px-3 py-1 rounded-full font-medium tracking-[0.06em] uppercase">
              Flagship · Full-Stack + AI Product
            </span>
          </div>
        )}

        <h3 className="font-display text-[1.6rem] font-semibold tracking-[-0.02em] text-text-primary mb-3">
          {project.title}
        </h3>
        
        <div className="mb-4">
          <div className="text-[0.82rem] text-text-muted uppercase tracking-[0.1em] font-medium mb-1.5">The problem</div>
          <p className="text-[0.95rem] text-text-secondary leading-[1.8] font-light">{project.problem}</p>
        </div>

        <div className="bg-white border-l-4 border-primary px-4 py-3 rounded-r-lg mb-5 text-[0.88rem] text-text-secondary italic">
          ↳ {project.result}
        </div>

        <div className={`px-4 py-3 rounded-r-lg mb-6 text-[0.82rem] text-text-secondary border-l-4 ${
          isFlagship ? 'bg-[rgba(26,138,114,0.08)] border-primary' : 'bg-amber-light border-amber'
        }`}>
          <strong className={isFlagship ? 'text-primary' : 'text-amber'}>
            {isFlagship ? '"' : 'What this project proved: '}
          </strong>
          {project.proved}
          {isFlagship ? '"' : ''}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.features.map((feature, i) => (
            <span key={i} className="bg-white border border-border-light text-text-secondary text-[0.78rem] px-3 py-1.5 rounded-full">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-5 border-t border-border-light mb-6">
          {project.techStack.map((tech, i) => (
            <span key={i} className="bg-transparent border border-primary text-primary text-[0.75rem] px-3 py-1 rounded-full font-mono">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-5 items-center mt-auto">
          {project.github && project.github !== "#" && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-primary font-medium transition-colors text-[0.85rem]">
              <Code size={16} /> Source
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-primary font-medium transition-colors text-[0.85rem]">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}