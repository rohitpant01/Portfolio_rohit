import { portfolioData } from '../../data/portfolioData';
import ProjectCard from '../ui/ProjectCard';
import FadeIn from '../ui/FadeIn';

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-white min-h-[calc(100vh-64px)]">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 text-xs font-medium tracking-[0.15em] uppercase text-primary mb-4">
                <span className="w-6 h-[1.5px] bg-primary"></span>
                Selected work
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-semibold leading-[1.2]">
                Built to learn.<br/>Then built to ship.
              </h2>
            </div>
            <p className="text-[0.9rem] text-text-muted font-light leading-[1.7] max-w-[280px]">
              Three systems built while mastering fundamentals in 2025 — followed by one product that applies all of it.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {portfolioData.projects.map((project, index) => (
            <div key={project.id}>
              {/* Show phase separator if it's the first project of that phase */}
              {(index === 0 || portfolioData.projects[index - 1].phase !== project.phase) && (
                <FadeIn>
                  <div className="flex items-center gap-4 mb-6 mt-12">
                    <span className="text-[0.7rem] font-medium tracking-[0.14em] uppercase text-text-muted">
                      {project.phase}
                    </span>
                    <span className="flex-1 h-px bg-border-light"></span>
                  </div>
                </FadeIn>
              )}
              
              <FadeIn delay={100}>
                <ProjectCard project={project} />
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}