import { portfolioData } from '../../data/portfolioData';
import FadeIn from '../ui/FadeIn';

export default function About() {
  return (
    <section className="py-24 px-6 bg-white min-h-[calc(100vh-64px)]">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">
          
          <FadeIn>
            <div className="flex items-center gap-3 text-xs font-medium tracking-[0.15em] uppercase text-primary mb-6">
              <span className="w-6 h-[1.5px] bg-primary"></span>
              About me
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-8 leading-[1.2]">
              {portfolioData.about.title}
            </h2>
            
            <div className="space-y-6">
              {portfolioData.about.paragraphs.map((para, i) => (
                <p key={i} className="text-lg text-text-secondary leading-[1.85] font-light">
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 mt-8">
              {portfolioData.about.tags.map((tag, i) => (
                <span key={i} className="px-4 py-1.5 bg-secondary text-primary rounded-full text-[0.8rem] font-medium tracking-[0.01em]">
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-bg-base p-8 rounded-2xl border border-border-light">
              <h3 className="text-[0.78rem] tracking-[0.1em] uppercase text-text-muted font-medium mb-6">
                Education
              </h3>
              
              <div className="space-y-6">
                {portfolioData.about.education.map((edu, i) => (
                  <div key={i} className="pb-6 border-b border-border-light last:border-0 last:pb-0">
                    <div className="font-medium text-[0.9rem] text-text-primary mb-1">{edu.degree}</div>
                    <div className="text-[0.82rem] text-text-muted mb-1">{edu.school}</div>
                    <div className="text-[0.78rem] font-medium text-primary">{edu.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
}