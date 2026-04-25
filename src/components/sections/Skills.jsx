import { portfolioData } from '../../data/portfolioData';
import FadeIn from '../ui/FadeIn';

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-bg-base min-h-[calc(100vh-64px)]">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 text-xs font-medium tracking-[0.15em] uppercase text-primary mb-6">
            <span className="w-6 h-[1.5px] bg-primary"></span>
            Technical skills
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-16 leading-[1.2]">
            What I work with
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FadeIn delay={100}>
            <div className="bg-white border border-border-light rounded-[14px] p-7 transition-all duration-200 hover:shadow-[0_8px_32px_rgba(26,138,114,0.08)] hover:-translate-y-0.5">
              <div className="w-11 h-11 rounded-[10px] bg-secondary flex items-center justify-center mb-4 text-xl">⌨️</div>
              <h3 className="text-[0.85rem] font-medium tracking-[0.06em] uppercase text-text-muted mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.core.map((skill, i) => (
                  <span key={i} className="bg-bg-base border border-border-light text-text-secondary text-[0.8rem] px-3 py-1 rounded-full font-mono hover:bg-secondary hover:text-primary hover:border-primary transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-white border border-border-light rounded-[14px] p-7 transition-all duration-200 hover:shadow-[0_8px_32px_rgba(26,138,114,0.08)] hover:-translate-y-0.5">
              <div className="w-11 h-11 rounded-[10px] bg-secondary flex items-center justify-center mb-4 text-xl">📱</div>
              <h3 className="text-[0.85rem] font-medium tracking-[0.06em] uppercase text-text-muted mb-4">Mobile & Web</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.frontendMobile.map((skill, i) => (
                  <span key={i} className="bg-bg-base border border-border-light text-text-secondary text-[0.8rem] px-3 py-1 rounded-full font-mono hover:bg-secondary hover:text-primary hover:border-primary transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="bg-white border border-border-light rounded-[14px] p-7 transition-all duration-200 hover:shadow-[0_8px_32px_rgba(26,138,114,0.08)] hover:-translate-y-0.5">
              <div className="w-11 h-11 rounded-[10px] bg-secondary flex items-center justify-center mb-4 text-xl">🤖</div>
              <h3 className="text-[0.85rem] font-medium tracking-[0.06em] uppercase text-text-muted mb-4">AI / ML</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.aiSecurity.map((skill, i) => (
                  <span key={i} className="bg-bg-base border border-border-light text-text-secondary text-[0.8rem] px-3 py-1 rounded-full font-mono hover:bg-secondary hover:text-primary hover:border-primary transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="bg-white border border-border-light rounded-[14px] p-7 transition-all duration-200 hover:shadow-[0_8px_32px_rgba(26,138,114,0.08)] hover:-translate-y-0.5">
              <div className="w-11 h-11 rounded-[10px] bg-secondary flex items-center justify-center mb-4 text-xl">🗄️</div>
              <h3 className="text-[0.85rem] font-medium tracking-[0.06em] uppercase text-text-muted mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.backendData.map((skill, i) => (
                  <span key={i} className="bg-bg-base border border-border-light text-text-secondary text-[0.8rem] px-3 py-1 rounded-full font-mono hover:bg-secondary hover:text-primary hover:border-primary transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="bg-white border border-border-light rounded-[14px] p-7 transition-all duration-200 hover:shadow-[0_8px_32px_rgba(26,138,114,0.08)] hover:-translate-y-0.5">
              <div className="w-11 h-11 rounded-[10px] bg-secondary flex items-center justify-center mb-4 text-xl">🔧</div>
              <h3 className="text-[0.85rem] font-medium tracking-[0.06em] uppercase text-text-muted mb-4">Tools & Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.toolsConcepts.map((skill, i) => (
                  <span key={i} className="bg-bg-base border border-border-light text-text-secondary text-[0.8rem] px-3 py-1 rounded-full font-mono hover:bg-secondary hover:text-primary hover:border-primary transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="bg-white border border-border-light rounded-[14px] p-7 transition-all duration-200 hover:shadow-[0_8px_32px_rgba(26,138,114,0.08)] hover:-translate-y-0.5">
              <div className="w-11 h-11 rounded-[10px] bg-secondary flex items-center justify-center mb-4 text-xl">🔒</div>
              <h3 className="text-[0.85rem] font-medium tracking-[0.06em] uppercase text-text-muted mb-4">Security</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.security.map((skill, i) => (
                  <span key={i} className="bg-bg-base border border-border-light text-text-secondary text-[0.8rem] px-3 py-1 rounded-full font-mono hover:bg-secondary hover:text-primary hover:border-primary transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}