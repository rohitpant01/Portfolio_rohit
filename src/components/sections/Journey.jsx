import { portfolioData } from '../../data/portfolioData';
import FadeIn from '../ui/FadeIn';

export default function Journey() {
  return (
    <section className="py-24 px-6 bg-bg-base min-h-[calc(100vh-64px)]">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 text-xs font-medium tracking-[0.15em] uppercase text-primary mb-6">
            <span className="w-6 h-[1.5px] bg-primary"></span>
            The path here
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 leading-[1.2]">
            Not a straight line.<br/>A deliberate one.
          </h2>
          <p className="text-[0.95rem] text-text-muted font-light max-w-[560px] leading-[1.8] mb-16">
            Every step below was intentional. The humanities years weren't detours — they were foundation. Here's how it all connects.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">
          
          <div className="relative pl-8 border-l-2 border-border-light space-y-10 mt-4">
            {portfolioData.journey.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="relative pb-2">
                  <div className={`absolute -left-[39px] top-1 w-3.5 h-3.5 rounded-full border-2 border-bg-base shadow-[0_0_0_2px_var(--color-primary)] ${
                    item.isMuted ? 'bg-border-light shadow-[0_0_0_2px_var(--color-border-light)]' : 'bg-primary'
                  }`}></div>
                  
                  <div className="text-[0.75rem] text-primary font-medium tracking-[0.08em] uppercase mb-1.5">
                    {item.year}
                  </div>
                  <h3 className="font-medium text-[0.95rem] text-text-dark mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[0.85rem] text-text-muted font-light leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="sticky top-24">
              <div className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-primary mb-6 flex items-center gap-3">
                <span className="w-4 h-[1.5px] bg-primary"></span>
                What this arc tells a recruiter
              </div>
              
              <div className="space-y-4">
                {portfolioData.recruiterInsights.map((insight, i) => (
                  <div key={i} className="bg-white border border-border-light rounded-xl p-5">
                    <div className={`text-[0.78rem] font-medium uppercase tracking-[0.08em] mb-2 ${
                      i === 0 ? 'text-primary' : i === 1 ? 'text-amber' : 'text-text-muted'
                    }`}>
                      {insight.label}
                    </div>
                    <div className="font-medium text-[0.9rem] text-text-dark mb-1">
                      {insight.title}
                    </div>
                    <div className="text-[0.83rem] text-text-muted font-light leading-[1.6]">
                      {insight.desc}
                    </div>
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
